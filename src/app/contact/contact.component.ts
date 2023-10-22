import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm:any;
  @ViewChild('nameField') myName:any;
  @ViewChild('emailField') myEmail:any;
  @ViewChild('massageField') myMassage:any;
  @ViewChild('buttonField') buttonField:any;
  name:any;
  email:any;
  massage:any;
  button:any;


  async sendMail(){
    this.setVariable();
    console.log('mail', this.myForm);
    this.setVariableTrue();

    let fd = new FormData();
    fd.append('name',this.name.value);
    fd.append('email',this.email.value);
    fd.append('massage',this.massage.value);
    //senden
    await fetch('https://formspree.io/f/mqkvneej',
      {
        method: 'POST',
        body: fd,
      }
    )

    this.setVariableFalse()
  }

  setVariable(){
    this.name = this.myName.nativeElement;
    this.email = this.myEmail.nativeElement;
    this.massage = this.myMassage.nativeElement;
    this.button = this.buttonField.nativeElement;
  }

  setVariableTrue(){
    this.name.disabled = true;
    this.email.disabled = true;
    this.massage.disabled = true;
    this.button.disabled = true;
  }

  setVariableFalse(){
    this.name.disabled = false;
    this.email.disabled = false;
    this.massage.disabled = false;
    this.button.disabled = false;
  }
}
