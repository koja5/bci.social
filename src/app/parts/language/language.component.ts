import { Component, Input, OnInit } from '@angular/core';
import { HelpsService } from 'src/app/services/helps.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  @Input() page: any;
  public allLangs: any;
  public selectionLanguage: any;
  public language: any;

  constructor(private helps: HelpsService) {}

  ngOnInit(): void {
    this.selectionLanguage = this.helps.getSelectionLanguage();
    this.helps
      .getLanguage(this.helps.getSelectionLanguage())
      .subscribe((data) => {
        this.language = data;
      });
    this.helps.getAllLangs().subscribe((data) => {
      this.allLangs = data;
    });
  }

  changeLanguage(name: string) {
    this.selectionLanguage = name;
    this.helps.setSelectionLanguage(name);
    location.reload();
  }
}
