import { Component } from '@angular/core';
import { TranslationService } from '../translate.service';
import{ locale as englishLang} from './i18n/en';
import{ locale as banglaLang} from './i18n/bn';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  title = 'Angular Internationalization';
  constructor(private translationService: TranslationService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translationService.addTranslation(englishLang, banglaLang)
}}
