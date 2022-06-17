// external
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// modules
import { PerxButtonModule } from './shared/perx-button/perx-button.module';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PerxButtonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
