import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translates: TranslateService) {
    translates.setDefaultLang('en');
  }

  public switchLanguage(language: string): void {
    this.translates.use(language);
  }
}