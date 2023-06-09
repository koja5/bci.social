import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HelpsService } from 'src/app/services/helps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public language: any;
  public cookieRead = 1;

  constructor(public help: HelpsService, private title: Title) {}

  ngOnInit(): void {
    this.help
      .getLanguage(this.help.getSelectionLanguage())
      .subscribe((data) => {
        this.language = data;
        this.title.setTitle(this.language.navigationHome);
      });
    this.cookieRead = this.help.getCookieRead()
      ? Number(this.help.getCookieRead())
      : 1;
  }

  setCookieRead() {
    this.cookieRead = 0;
    this.help.setCookieRead();
  }
}
