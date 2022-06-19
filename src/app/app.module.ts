import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesModule } from './pages/pages.module';


import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
   
    NopagefoundComponent,
      

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    FormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
