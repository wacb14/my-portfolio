import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent {
  languages = [true, false];
  change() {
    this.languages[0] = !this.languages[0];
    this.languages[1] = !this.languages[1];
  }
}
