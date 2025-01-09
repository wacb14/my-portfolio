import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  activeSection: string = 'home';
  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('.section');
    let currentSection = '';
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      // It changes only if the section's center's visible
      if (sectionCenter >= 0 && sectionCenter <= window.innerHeight) {
        currentSection = section.id;
        this.activeSection = currentSection;
      }
    });
  }
}
