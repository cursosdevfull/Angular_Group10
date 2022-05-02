import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  title = '';
  group!: FormGroup;
  photoToShow = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data ? 'EDIT' : 'ADD';
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, Validators.required),
      segundo_nombre: new FormControl(
        this.data?.segundo_nombre,
        Validators.required
      ),
      apellido: new FormControl(this.data?.apellido, Validators.required),
      cmp: new FormControl(this.data?.cmp, Validators.required),
      dni: new FormControl(this.data?.dni, Validators.required),
      correo: new FormControl(this.data?.correo, [
        Validators.required,
        Validators.email,
      ]),
    });

    if (this.data) {
      this.group.addControl('foto', new FormControl(null));
      this.photoToShow = this.data.foto ? this.data.foto : '';
    } else {
      this.group.addControl('foto', new FormControl(null, Validators.required));
    }
  }
}
