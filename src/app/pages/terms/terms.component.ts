import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HelpsService } from 'src/app/services/helps.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {
  constructor(private help: HelpsService, private title: Title) {}

  ngOnInit(): void {
    this.help
      .getLanguage(this.help.getSelectionLanguage())
      .subscribe((data: any) => {
        this.title.setTitle(data.footerTerms + ' - BCI GmbH');
      });
  }
}
