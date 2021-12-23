import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewBannerComponent } from './components/new-banner/new-banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TeamComponent } from './components/team/team.component';
import { CareersComponent } from './components/careers/careers.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [AppComponent, NewBannerComponent, NavbarComponent, CarouselComponent, TeamComponent, CareersComponent, HomeComponent, NotFoundComponent, BannerComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, MatIconModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
