import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardDiffrentialsComponent } from './components/card-diffrentials/card-diffrentials.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactorComponent } from './components/contactor/contactor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardDiffrentialsComponent,
    FooterComponent,
    ContactorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
