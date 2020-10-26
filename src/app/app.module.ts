import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MapComponent } from './shared/map/map.component';
import { AboutComponent } from './pages/about/about.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    ServiciosComponent,
    MapComponent,
    AboutComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FontAwesomeModule,
    AppRoutingModule,
    MatCarouselModule,
    MatChipsModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
