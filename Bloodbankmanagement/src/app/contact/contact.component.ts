import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    firstname: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]+$")]),
    lastname: new FormControl("",[ Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl("",[Validators.email,Validators.required]),
    mobile: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    message: new FormControl("",[Validators.required]),
    
  })

  get firstname() {
    return this.contactForm.get('firstname'); 
  }

  get lastname() {
    return this.contactForm.get('lastname'); 
  }

  get email() {
    return this.contactForm.get('email'); 
  }

  get mobile(){
    return this.contactForm.get('mobile')
  }

  get message(){
    return this.contactForm.get('message')
  }

        


  onSubmit() {
    console.log(this.contactForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
