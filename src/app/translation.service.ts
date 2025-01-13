import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  translateTo(language: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private translates: TranslateService) {
    translates.setDefaultLang('de');
  }

  public switchLanguage(language: string): void {
    this.translates.use(language);
  }
}