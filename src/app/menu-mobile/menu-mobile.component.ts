import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss','../../font.css']
})
@Injectable({
  providedIn: 'root'
})
export class MenuMobileComponent {
  open:boolean = false;
}
