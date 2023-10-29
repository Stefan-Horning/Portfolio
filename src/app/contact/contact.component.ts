import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    emailInput: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.(de|com|net)$')]),
    massageInput: new FormControl('', [Validators.required, Validators.minLength(10)]),
    checkboxInput: new FormControl(false)
  });
  

  setBorderColor() {
    this.setVariable();
    if (this.contactForm.controls['emailInput'].hasError('pattern') ) {
      this.myEmail.nativeElement.style.borderColor = 'red';
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

      if(this.email.value.endsWith('.de') || this.email.value.endsWith('.com') || this.email.value.endsWith('.net')){
        let fd = new FormData();
        fd.append('name',this.name.value);
        fd.append('email',this.email.value);
        fd.append('massage',this.massage.value);
        //senden
        await fetch('https://formspree.io/f/mdorbjdk',
          {
            method: 'POST',
            body: fd,
          }
        )
        this.setVariableFalse()

      }else{ 
        alert('Bitte Richtige Email angeben')
        this.setVariableFalse()
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
      this.checkbox.checked = false;
      this.name.disabled = false;
      this.email.disabled = false;
      this.massage.disabled = false;
    
  }
}
