import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HelpsService } from 'src/app/services/helps.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(private help: HelpsService, private title: Title) {}

  ngOnInit(): void {
    this.help
      .getLanguage(this.help.getSelectionLanguage())
      .subscribe((data: any) => {
        this.title.setTitle(data.footerPrivacyPolicy + ' - BCI GmbH');
      });
  }
}
