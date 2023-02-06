import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './parts/navigation/navigation.component';
import { FooterComponent } from './parts/footer/footer.component';
import { TestimonialComponent } from './parts/testimonial/testimonial.component';
import { ContactUsComponent } from './parts/contact-us/contact-us.component';
import { ServicesComponent } from './parts/services/services.component';
import { FunFactComponent } from './parts/fun-fact/fun-fact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { TypeOfWorkComponent } from './pages/type-of-work/type-of-work.component';
import { ContactUsFormComponent } from './pages/contact-us-form/contact-us-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HelpsService } from './services/helps.service';
import { OurServiceComponent } from './pages/our-service/our-service.component';
import { FeatureComponent } from './parts/feature/feature.component';
import { CallUsComponent } from './parts/call-us/call-us.component';
import { AboutUsDeliveringComponent } from './parts/about-us-delivering/about-us-delivering.component';
import { CallUsPromoComponent } from './parts/call-us-promo/call-us-promo.component';
import { LanguageComponent } from './parts/language/language.component';
import { DynamicTextComponent } from './dynamic/dynamic-text/dynamic-text.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { CookieComponent } from './pages/cookie/cookie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    TestimonialComponent,
    ContactUsComponent,
    ServicesComponent,
    FunFactComponent,
    AboutUsComponent,
    HomeComponent,
    TypeOfWorkComponent,
    ContactUsFormComponent,
    OurServiceComponent,
    FeatureComponent,
    CallUsComponent,
    AboutUsDeliveringComponent,
    CallUsPromoComponent,
    LanguageComponent,
    DynamicTextComponent,
    ImpressumComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    CookieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HelpsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
