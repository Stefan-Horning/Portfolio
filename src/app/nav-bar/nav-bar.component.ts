import { Component, Input, } from '@angular/core';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';
import { trigger, transition, animate, style } from '@angular/animations';
import { HomescreenComponent } from '../homescreen/homescreen.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

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
      document.documentElement.style.overflow = 'hidden'
    }else{
      this.isMenuOpen = false;
      this.endpicture = false;
      document.documentElement.style.overflow = 'scroll'
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

  barOne = document.getElementById('burger-bar-one');
  barTwo = document.getElementById('burger-bar-two');
  barThree = document.getElementById('burger-bar-three');

  /*onToggle(){
    if (!this.toggled) {
      toggled = !toggled;
      TweenLite.to(barOne, .5, { strokeDashoffset:-1076} );
      TweenLite.to(barTwo, .5, { strokeDashoffset:-1250} );
      TweenLite.to(barThree, .5, { opacity: 0, x: -1000 });
    } else {
      toggled = !toggled;
      TweenLite.to(barOne, .5, { strokeDashoffset:0} );
      TweenLite.to(barTwo, .5, { strokeDashoffset:0} );
      TweenLite.to(barThree, .5, { opacity: 1, x: 0 });
    }
  }*/
}
