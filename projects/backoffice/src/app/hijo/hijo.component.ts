import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TUser, User } from '../padre/padre.component';

@Component({
  selector: 'amb-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  @Input() info!: Date;
  @Output() onNewMessage = new EventEmitter();
  // @Input() listUsers: User[] = [];
  @Input() listUsers: TUser = [];

  constructor() {
    const infoUser: User = new User('Sergio', 40);
    setTimeout(() => this.onNewMessage.emit(infoUser), 3000);
  }

  ngOnInit(): void {
    console.log('# users', this.listUsers.length);
  }
}
