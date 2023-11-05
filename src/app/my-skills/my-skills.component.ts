import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
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
