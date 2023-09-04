import { locale as bang } from './../assets/i18n/bn';
import { Component } from "@angular/core";

import { locale as english } from "src/assets/i18n/en";
import { TranslationService } from './translate.service';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent    {
  title = 'Angular Internationalization';
  currentLang = 'bn';
  constructor(private translationService: TranslationService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translationService.addTranslation(english, bang)

  }
  ngOnIn() {
    this.currentLang = this.translationService.getCurrentLang();
  }
  onLangChange(currentLang: string) {
    this.translationService.useLang(currentLang);
  }
  languages = [
    { name: 'Bangla', lang: 'bn' },
    { name: 'English', lang: 'en' }
  ]
}
