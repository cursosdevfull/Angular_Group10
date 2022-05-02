import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from 'projects/backoffice/src/environments/environment';

@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotoComponent),
      multi: true,
    },
  ],
})
export class PhotoComponent implements OnInit, ControlValueAccessor {
  @ViewChild('photo') photo!: ElementRef;
  @ViewChild('file') file!: ElementRef;
  @Input() photoByDefault: string = '';

  statusHover: boolean = false;
  isUsingWebCam: boolean = false;
  triggerSnapshot = new Subject<void>();

  value!: File;

  onChange: any;
  onTouched: any;

  constructor() {}

  writeValue(val: File): void {
    if (val) {
      this.value = val;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {}

  onFileDropped(file: File): void {
    if (!file.type.startsWith('image')) {
      return;
    }

    this.onTouched();
    this.onChange(file);

    const fr: FileReader = new FileReader();
    fr.onloadend = (response: any) => {
      const dataBase64: string = response.target.result;
      this.loadPhotoFromUrlOrDataUrl(dataBase64);
    };

    fr.readAsDataURL(file);
  }

  executeLoadImage() {
    this.file.nativeElement.click();
    return false;
  }

  selectImage(event: any) {
    const file: File = event.target.files[0];
    this.onFileDropped(file);
  }

  changeOriginPhoto(event: MatSlideToggleChange) {
    this.isUsingWebCam = !this.isUsingWebCam;
  }

  triggerAsObservable() {
    return this.triggerSnapshot.asObservable();
  }

  takePhoto() {
    this.triggerSnapshot.next();
  }

  loadPhotoFromUrlOrDataUrl(urlOrPath: string) {
    this.photo.nativeElement.style.backgroundImage = `url(${urlOrPath})`;
  }

  onImageCapture(webcamImage: WebcamImage) {
    fetch(webcamImage.imageAsDataUrl)
      .then((res) => res.arrayBuffer())
      .then((buffer) => new File([buffer], 'avatar', { type: 'image/jpg' }))
      .then((file) => {
        this.onFileDropped(file);
        this.isUsingWebCam = false;
      });
  }

  ngAfterViewInit() {
    if (this.photoByDefault) {
      const path = `${environment.apiUrl}/photos/${this.photoByDefault}`;
      this.loadPhotoFromUrlOrDataUrl(path);
    }
  }
}
