import { Component, OnInit } from '@angular/core';
import { HelpsService } from 'src/app/services/helps.service';

@Component({
  selector: 'app-fun-fact',
  templateUrl: './fun-fact.component.html',
  styleUrls: ['./fun-fact.component.scss'],
})
export class FunFactComponent implements OnInit {
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
