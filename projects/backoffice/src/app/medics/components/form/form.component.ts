import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  title = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data ? 'EDIT' : 'ADD';
  }

  ngOnInit(): void {}
}
