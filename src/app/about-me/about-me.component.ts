import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
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
