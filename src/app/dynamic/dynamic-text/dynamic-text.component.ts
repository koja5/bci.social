import { Component, Input, OnInit } from '@angular/core';
import { HelpsService } from 'src/app/services/helps.service';

@Component({
  selector: 'app-dynamic-text',
  templateUrl: './dynamic-text.component.html',
  styleUrls: ['./dynamic-text.component.scss'],
})
export class DynamicTextComponent implements OnInit {
  @Input() type!: string;
  public language: any;

  constructor(private helps: HelpsService) {}

  ngOnInit(): void {
    this.helps
      .getLanguageFromFolder(this.type, this.helps.getSelectionLanguage())
      .subscribe((data) => {
        this.language = data;
      });
  }
}
