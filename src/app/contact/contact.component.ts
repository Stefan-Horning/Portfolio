import { ASTWithName } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

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
  checkbox:any;
  showImages:boolean = true;
  buttonInput:boolean = true;
  contactForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required, Validators.minLength(2)]),
    emailInput: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.(de|com|net|nl|org|uk|cn|au|dk|pl|cz|at|lu|ru)$')]),
    massageInput: new FormControl('', [Validators.required, Validators.minLength(10)]),
    checkboxInput: new FormControl(false)
  });
  Send:boolean = false;
  
  constructor(public translate: TranslateService){}
  setBorderColor() {
    this.setVariable();
    if (this.contactForm.controls['emailInput'].hasError('pattern') ) {
      
      this.myEmail.nativeElement.style.bordercolor = '#ff0000';
    } else {
      this.myEmail.nativeElement.style.borderColor = '#70E61C';

      if(this.email.value == ""){
        this.myEmail.nativeElement.style = '';
      }
      
    }
  }

  async sendMail(){
      this.setVariable();
      this.setVariableTrue();

      if(this.email.value.endsWith('.de') || this.email.value.endsWith('.com') || this.email.value.endsWith('.net') || this.email.value.endsWith('.ru') || this.email.value.endsWith('.org') || this.email.value.endsWith('.uk') || this.email.value.endsWith('.cn') ||this.email.value.endsWith('.au') ||this.email.value.endsWith('.dk') ||this.email.value.endsWith('.pl') ||this.email.value.endsWith('.cz') ||this.email.value.endsWith('.at') ||this.email.value.endsWith('.lu') ||this.email.value.endsWith('.nl')){
        let fd = new FormData();
        fd.append('name',this.name.value);
        fd.append('email',this.email.value);
        fd.append('massage',this.massage.value);
        //senden
        try {
          await fetch('https://formspree.io/f/mdorbjdk', { 
            method: 'POST', 
            body: fd, 
            mode: 'no-cors'
          });
        } catch (error) {
        }
        //this.setVariableFalse()
        this.buttonField.nativeElement.innerText = await this.translate.instant('sended');
        this.buttonField.nativeElement.style.color = '#70E61C';
        this.buttonField.nativeElement.style.backgroundColor = '#9747FF';
        this.Send = true;
        setTimeout(() => {
          this.setVariableFalse();
          this.setValue();
          this.buttonField.nativeElement.innerText = this.translate.instant('send');    
          this.buttonField.nativeElement.style.color = '';
          this.buttonField.nativeElement.style.backgroundColor = '';
        },5000)
      }else{ 
        //this.setVariableFalse()
        this.setValue()
      }
    
  }

  setValue(){
    this.name.value = '';
    this.email.value = '';
    this.massage.value = '';
  }

  setVariable(){
    this.name = this.myName.nativeElement;
    this.email = this.myEmail.nativeElement;
    this.massage = this.myMassage.nativeElement;
    this.button = this.buttonField.nativeElement;
    this.checkbox = document.querySelector('#AGB');
  }

  setVariableTrue(){
    this.name.disabled = true;
    this.email.disabled = true;
    this.massage.disabled = true;
    this.button.disabled = true;
  }

  setVariableFalse(){
      this.checkbox.checked = true;
      this.name.disabled = false;
      this.email.disabled = false;
      this.massage.disabled = false;
      this.button.disabled = true;
    
  }
}
