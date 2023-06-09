import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HelpsService } from 'src/app/services/helps.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss'],
})
export class ImpressumComponent implements OnInit {
  constructor(private help: HelpsService, private title: Title) {}

  ngOnInit(): void {
    this.help
      .getLanguage(this.help.getSelectionLanguage())
      .subscribe((data: any) => {
        this.title.setTitle(data.footerImpressum + ' - BCI GmbH');
      });
  }
}
