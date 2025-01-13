import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLanguage: string = 'de';

  constructor(private translates: TranslateService) {
    this.translates.setDefaultLang(this.currentLanguage);
  }

  public switchLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translates.use(this.currentLanguage);
  }
}