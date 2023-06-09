import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss'],
})
export class CookieComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Cookie - BCI GmbH');
  }
}
