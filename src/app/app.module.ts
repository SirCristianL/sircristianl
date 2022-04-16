import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { Wave1Component } from './vectors/wave1/wave1.component';
import { Wave2Component } from './vectors/wave2/wave2.component';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectDetailComponent,
    Wave1Component,
    Wave2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    NgwWowModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    Wave1Component,
    Wave2Component,
  ]
})
export class AppModule { }
