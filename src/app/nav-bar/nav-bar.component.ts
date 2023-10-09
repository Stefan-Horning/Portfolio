import { Component, Input } from '@angular/core';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', '../../font.css']
})
export class NavBarComponent {
  isMenuOpen: boolean = false;

  checkMenuMobile(){
    if(!this.isMenuOpen){
      this.isMenuOpen = true;
    }else{
      this.isMenuOpen = false;
    }
  }
}
