import { Component } from '@angular/core';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', '../../font.css']
})
export class NavBarComponent {
  isMenuOpen: boolean = false;
  constructor(private mobileMenu: MenuMobileComponent){}

  checkMenuMobile(){
    if(!this.isMenuOpen){
      this.isMenuOpen = true;
      this.mobileMenu.open = true;
    }else{
      this.isMenuOpen = false;
      this.mobileMenu.open = false;
    }
  }
}
