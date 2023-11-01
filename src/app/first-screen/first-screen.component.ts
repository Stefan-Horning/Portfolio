import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss','../../font.css']
})
export class FirstScreenComponent {
  screenWidth:number;
  constructor() {
    this.screenWidth = window.innerWidth;
    this.getScreenSize();
  }

  @HostListener('window:resize', [])
  getScreenSize() {
      this.screenWidth = window.innerWidth;
  }
}
