import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  screenWidth:number;
  constructor(private router:Router) {
    this.screenWidth = window.innerWidth;
    this.getScreenSize();
  }

  @HostListener('window:resize', [])
  getScreenSize() {
      this.screenWidth = window.innerWidth;
  }

}
