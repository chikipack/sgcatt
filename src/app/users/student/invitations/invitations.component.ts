import { Component } from '@angular/core';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css'],
})
export class InvitationsComponent {
  hasInvitations: boolean = false;
  changeView() {
    this.hasInvitations = !this.hasInvitations;
  }
}
