import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileCardComponent } from './components/mobile-card/mobile-card.component';
import { MobileDashboardComponent } from './components/mobile-dashboard/mobile-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileCardComponent,
    MobileDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
