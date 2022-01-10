import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DonorService } from '../services/donor.service';
import { CustomerModel } from '../admin-donorlist/donor.model';

@Component({
  selector: 'app-donor-register',
  templateUrl: './donor-register.component.html',
  styleUrls: ['./donor-register.component.css']
})
export class DonorRegisterComponent implements OnInit {

  customerModelObj : CustomerModel = new CustomerModel();

  contactForm = new FormGroup({
    // firstName: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]+$")]),
    // lastName: new FormControl("",[ Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]),
    // email: new FormControl("",[Validators.email,Validators.required]),
    // mobile: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    // location: new FormControl("",[Validators.required]),
    // members: new FormControl("",[Validators.required]),
    // startdate: new FormControl("",[Validators.required]),
    // enddate: new FormControl("",[Validators.required]),
  })


get firstName() {
  return this.contactForm.get('firstName'); 
}

get lastName() {
  return this.contactForm.get('lastName'); 
}

get email() {
  return this.contactForm.get('email'); 
}


get mobile(){
  return this.contactForm.get('mobile')
}
get age(){
  return this.contactForm.get('age')
}

get gender(){
  return this.contactForm.get('gender')
}

get address(){
  return this.contactForm.get('address')
}

get state(){
  return this.contactForm.get('state')
}
get city(){
  return this.contactForm.get('city')
}

get bloodgroup(){
  return this.contactForm.get('bloodgroup')
}

get health(){
  return this.contactForm.get('health')
}



        


  onSubmit() {
    console.log(this.contactForm.value);
  }

  constructor(private formbuilder: FormBuilder, private donor : DonorService) { }

  ngOnInit(): void {
    this.contactForm = this.formbuilder.group({
      firstName : new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]+$")]),
      lastName :new FormControl("",[ Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]),
      email :  new FormControl("",[Validators.email,Validators.required]),
      mobile: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
      age: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{2}$")]),

      
      gender:new FormControl("",[Validators.required]),
      address:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
      state:new FormControl("",[Validators.required]),
      city:new FormControl("",[Validators.required]),
      bloodgroup:new FormControl("",[Validators.required]),
      health :new FormControl("",[ Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
      



    })
  }
  postCustomerDetails(){
    this.customerModelObj.firstName = this.contactForm.value.firstName;
    this.customerModelObj.lastName = this.contactForm.value.lastName;
    this.customerModelObj.email = this.contactForm.value.email;
    this.customerModelObj.mobile = this.contactForm.value.mobile;
    this.customerModelObj.age = this.contactForm.value.age;
    
    this.customerModelObj.gender = this.contactForm.value.gender;
    this.customerModelObj.address = this.contactForm.value.address;
    this.customerModelObj.state = this.contactForm.value.state;
    this.customerModelObj.city = this.contactForm.value.city;
    this.customerModelObj.bloodgroup = this.contactForm.value.bloodgroup;
    this.customerModelObj.health = this.contactForm.value.health;
 

    this.donor.postCust(this.customerModelObj)
      .subscribe(res=>{
      console.log(res);
      alert("Customer Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.contactForm.reset();
      
    },
    err=>{
      alert("Something went wrong")
    })
  }



}
