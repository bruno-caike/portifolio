import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardDiffrentialsComponent } from './components/card-diffrentials/card-diffrentials.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactorComponent } from './components/contactor/contactor.component';
import { FormExperienceComponent } from './components/form-experience/form-experience.component';
import { CardExperienceComponent } from './components/card-experience/card-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardDiffrentialsComponent,
    FooterComponent,
    ContactorComponent,
    FormExperienceComponent,
    CardExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
