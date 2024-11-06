import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuVisible = false;
  activeFragment = 'home';
  constructor(
    private eRef: ElementRef,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        this.jumpToSection(fragment);
        this.activeFragment = fragment;
        this.menuVisible = false;
      }
    });
  }
  jumpToSection(section: string | null) {
    if (section) document.getElementById(section)?.scrollIntoView();
  }
  menu() {
    this.menuVisible = !this.menuVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target) && this.menuVisible) {
      this.menuVisible = false;
    }
  }
}
