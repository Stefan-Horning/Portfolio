import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ImprintComponent } from './imprint/imprint.component';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';

const routes: Routes = [
  {path: '', component: HomescreenComponent},
  {path: 'imprint', component:ImprintComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
