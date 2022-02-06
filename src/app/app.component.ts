import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMsg = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];
  //Event Handling
  addMember() {
    if (!this.newMemberName) {
      this.errorMsg = 'Name cannot be empty';
      return;
    }
    this.errorMsg = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';

    console.log(this.members);
  }

  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);
  }
  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMsg = 'Invalid number of teams';
      return;
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMsg = 'Not enough members';
      return;
    }

    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.numberOfTeams = '';
    console.log(this.teams);
  }
}
