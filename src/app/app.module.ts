import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CardsService } from './_shared/cards.service';


@NgModule({
  declarations: [
    AppComponent,
    CardsSectionComponent,
    CatDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]})
export class AppModule { }
