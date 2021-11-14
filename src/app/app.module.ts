import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    ProductModule,
    AppRoutingModule   
  ],
  declarations: [
    AppComponent,
    WelcomeComponent    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
