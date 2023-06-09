import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HelpsService } from 'src/app/services/helps.service';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
})
export class ContactUsFormComponent implements OnInit {
  public language: any;

  constructor(private help: HelpsService, private title: Title) {}

  ngOnInit(): void {
    this.help
      .getLanguage(this.help.getSelectionLanguage())
      .subscribe((data) => {
        this.language = data;
        this.title.setTitle(
          this.language.navigationMenuContact + ' - BCI GmbH'
        );
      });
  }
}
