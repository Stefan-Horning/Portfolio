import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
//import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portfolio';

  ngOnInit(): void {
    AOS.init({
      duration: 750,
    });
  }

  ngAfterViewInit(){
    setTimeout(() =>{
      AOS.refresh();
    },500);
  }

  constructor(public translate: TranslateService) {
     
  }
}
