import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './pages/menu/menu.module'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,MenuModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
