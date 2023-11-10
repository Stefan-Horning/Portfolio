import { Component, HostListener, Input, } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { HomescreenComponent } from '../homescreen/homescreen.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import gsap from 'gsap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', '../../font.css'],
})
export class NavBarComponent {
  isMenuOpen: boolean = false;
  activeImageIndex: number = 0;
  imageAnimationInterval: any;
  endpicture: any = false;
  screenWidth:number;

  checkMenuMobile(){
    if(!this.isMenuOpen){
      this.startImageAnimation();
      this.isMenuOpen = true;
    }else{
      this.isMenuOpen = false;
      this.endpicture = false;
    }
  }

  startImageAnimation() {
    // Starten Sie die Animation, indem Sie alle 2 Sekunden das nächste Bild anzeigen
    this.imageAnimationInterval = setInterval(() => {
      if(this.activeImageIndex < 2){
        this.activeImageIndex = 3;
        this.stopImageAnimation();
      }else{

        this.activeImageIndex = (this.activeImageIndex + 1) % 3; // Wechselt zwischen den Bildern 0, 1, 2
      }
    }, 100); // Ändern Sie die Zeitintervalle nach Bedarf
  }

  
  stopImageAnimation(){
    clearInterval(this.imageAnimationInterval);
    this.endpicture = true;
  }
  
  toggled = false;

  onToggle() {
    let barOne = document.getElementById('burger-bar-one');
    let barTwo = document.getElementById('burger-bar-two');
    let barThree = document.getElementById('burger-bar-three');

    if (!this.toggled) {
      this.checkMenuMobile()
      this.toggled = !this.toggled;
      gsap.to(barOne, 0.5, { strokeDashoffset: -1076 });
      gsap.to(barTwo, 0.5, { strokeDashoffset: -1250 });
      gsap.to(barThree, 0.5, { opacity: 0, x: -1000 });
    } else {
      this.toggled = !this.toggled;
      this.checkMenuMobile()
      gsap.to(barOne, 0.5, { strokeDashoffset: 0 });
      gsap.to(barTwo, 0.5, { strokeDashoffset: 0 });
      gsap.to(barThree, 0.5, { opacity: 1, x: 0 });
    }
  }



  

  constructor(public translate: TranslateService) {
    this.screenWidth = window.innerWidth;
    this.getScreenSize();
  }

  @HostListener('window:resize', [])
  getScreenSize() {
      this.screenWidth = window.innerWidth;
  }
}

