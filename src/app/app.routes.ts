import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './main-content/privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './main-content/legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent }, 
    { path: 'legal-notice', component: LegalNoticeComponent },   
];