import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsFormComponent } from './pages/contact-us-form/contact-us-form.component';
import { CookieComponent } from './pages/cookie/cookie.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { OurServiceComponent } from './pages/our-service/our-service.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { TypeOfWorkComponent } from './pages/type-of-work/type-of-work.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'our-service',
    component: OurServiceComponent,
  },
  {
    path: 'type-of-work',
    component: TypeOfWorkComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsFormComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'cookie',
    component: CookieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
