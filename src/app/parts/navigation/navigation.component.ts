import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HelpsService } from 'src/app/services/helps.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() page!: boolean;

  public scroll = '';
  public mobileMenu = '';
  public language: any;
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private help: HelpsService
  ) {
    route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (window.location.hash !== '#/') {
          this.page = true;
        } else {
          this.page = false;
        }
      }
      this.mobileMenu = '';
    });
  }

  ngOnInit(): void {
    this.help
      .getLanguage(this.help.getSelectionLanguage())
      .subscribe((data) => {
        this.language = data;
      });
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (verticalOffset > 0) {
      this.scroll = 'is-sticky';
    } else {
      this.scroll = '';
    }
  }

  showMobileMenu() {
    if (this.mobileMenu !== '') {
      this.mobileMenu = '';
    } else {
      this.mobileMenu = 'active';
    }
  }
}
