import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { ContactModel } from '../admin-contact/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ContactModelObj : ContactModel = new ContactModel();

  contactForm = new FormGroup({ 
    
  })


get contactfName() {
  return this.contactForm.get('contactfName'); 
}

get contactlName() {
  return this.contactForm.get('contactlName'); 
}

get contactemail() {
  return this.contactForm.get('contactemail'); 
}


get contactmobile(){
  return this.contactForm.get('contactmobile')
}
get contactmessage(){
  return this.contactForm.get('contactmessage')
}





        


  onSubmit() {
    console.log(this.contactForm.value);
  }

  constructor(private formbuilder: FormBuilder, private contact : ContactService) { }

  ngOnInit(): void {
    this.contactForm = this.formbuilder.group({
      contactfName : new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]+$")]),
      contactlName :new FormControl("",[ Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]),
      contactemail :  new FormControl("",[Validators.email,Validators.required]),
      contactmobile: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
      contactmessage: new FormControl("",[Validators.required,Validators.maxLength(100)]),

                             
    })
  }
  postCustomerDetails(){
    this.ContactModelObj.contactfName = this.contactForm.value.contactfName;
    this.ContactModelObj.contactlName = this.contactForm.value.contactlName;
    this.ContactModelObj.contactemail = this.contactForm.value.contactemail;
    this.ContactModelObj.contactmobile = this.contactForm.value.contactmobile;
    this.ContactModelObj.contactmessage = this.contactForm.value.contactmessage;
    
    
 

    this.contact.postCust(this.ContactModelObj)
      .subscribe(res=>{
      console.log(res);
      alert("We will contact you soon. Thank you!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.contactForm.reset();
      
    },
    err=>{
      alert("Something went wrong")
    })
  }

}
