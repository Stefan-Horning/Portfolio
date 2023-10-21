import { Component, Input, } from '@angular/core';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';
import { trigger, transition, animate, style } from '@angular/animations';
import { HomescreenComponent } from '../homescreen/homescreen.component';
import { AppRoutingModule } from '../app-routing.module';

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
}
