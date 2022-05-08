import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent } from 'rxjs';

@Component({
  selector: 'amb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @ViewChild('search') search!: ElementRef;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.search.nativeElement, 'keyup')
      .pipe(
        filter((text: any) => {
          const textValue = text.target.value;
          return textValue.length > 3 || textValue.length === 0;
        }),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((evt: any) => {
        this.onSearch.emit(evt.target.value.toLowerCase());
      });
  }
}
