import { Component, HostListener } from '@angular/core';
import { HelpsService } from './services/helps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public scrollToTop = '';
  title = 'ClinicNodePromoNew';
  public cookieRead = 1;
  public language: any;

  constructor(private help: HelpsService) {}

  ngOnInit() {
    //this.help.setSelectionLanguage('english');
    if (!this.help.getSelectionLanguage()) {
      this.help.setSelectionLanguage('germany');
    }

    this.help
      .getLanguage(this.help.getSelectionLanguage())
      .subscribe((data) => {
        this.language = data;
      });
    this.cookieRead = this.help.getCookieRead()
      ? Number(this.help.getCookieRead())
      : 1;
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (verticalOffset > 0) {
      this.scrollToTop = 'show';
    } else {
      this.scrollToTop = '';
    }
  }

  setCookieRead() {
    this.cookieRead = 0;
    this.help.setCookieRead();
  }
}
