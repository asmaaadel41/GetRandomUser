import { Component } from '@angular/core';
import { DUMMY_USERS } from '../models/users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  selectedUser = DUMMY_USERS[this.randomIndex];

  get imgSrc(): string {
    return `assets/users/${DUMMY_USERS[this.randomIndex].avatar}`;
  }
  onSelectUser() {
    this.randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[this.randomIndex];
  }
}
