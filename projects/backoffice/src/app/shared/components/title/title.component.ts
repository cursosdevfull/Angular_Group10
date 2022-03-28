import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amb-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() icon: string = '';

  constructor() {}

  ngOnInit(): void {}
}
