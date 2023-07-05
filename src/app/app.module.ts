import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BillingComponent } from './components/billing/billing.component';
import { BusinessComponent } from './components/business/business.component';
import { ButtonComponent } from './components/button/button.component';
import { CardDealComponent } from './components/card-deal/card-deal.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CtaComponent } from './components/cta/cta.component';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatsComponent } from './components/stats/stats.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    BusinessComponent,
    ButtonComponent,
    CardDealComponent,
    ClientsComponent,
    CtaComponent,
    FeedbackCardComponent,
    FooterComponent,
    GetStartedComponent,
    HeroComponent,
    NavbarComponent,
    StatsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
