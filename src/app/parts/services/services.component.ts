import { Component, OnInit } from '@angular/core';
import { HelpsService } from 'src/app/services/helps.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
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
