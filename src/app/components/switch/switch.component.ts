import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent {
  english = { active: true, abbreviation: 'en' };
  spanish = { active: false, abbreviation: 'es' };

  constructor(private translateService: TranslateService) {}

  change() {
    if (this.english.active) {
      this.english.active = false;
      this.spanish.active = true;
      this.translateService.use(this.spanish.abbreviation);
    } else {
      this.english.active = true;
      this.spanish.active = false;
      this.translateService.use(this.english.abbreviation);
    }
  }
}
