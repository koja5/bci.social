import { Component, OnInit } from '@angular/core';
import { HelpsService } from 'src/app/services/helps.service';

@Component({
  selector: 'app-call-us-promo',
  templateUrl: './call-us-promo.component.html',
  styleUrls: ['./call-us-promo.component.scss'],
})
export class CallUsPromoComponent implements OnInit {
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
