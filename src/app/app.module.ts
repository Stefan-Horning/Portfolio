import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    NavBarComponent,
    MenuMobileComponent,
    FirstScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
