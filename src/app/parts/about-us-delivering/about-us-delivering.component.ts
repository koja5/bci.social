import { Component, OnInit } from '@angular/core';
import { HelpsService } from 'src/app/services/helps.service';

@Component({
  selector: 'app-about-us-delivering',
  templateUrl: './about-us-delivering.component.html',
  styleUrls: ['./about-us-delivering.component.scss'],
})
export class AboutUsDeliveringComponent implements OnInit {
  public language: any;

  constructor(private help: HelpsService) {}

  ngOnInit(): void {
    this.help
      .getLanguage(this.help.getSelectionLanguage())
      .subscribe((data) => {
        this.language = data;
      });
  }
}
