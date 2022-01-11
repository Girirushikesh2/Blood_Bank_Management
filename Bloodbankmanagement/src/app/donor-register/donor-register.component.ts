import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DonorService } from '../services/donor.service';
import { DonorModel } from '../admin-donorlist/donor.model';

@Component({
  selector: 'app-donor-register',
  templateUrl: './donor-register.component.html',
  styleUrls: ['./donor-register.component.css']
})
export class DonorRegisterComponent implements OnInit {

  DonorModelObj : DonorModel = new DonorModel();

  donorForm = new FormGroup({
    
  })


get firstName() {
  return this.donorForm.get('firstName'); 
}

get lastName() {
  return this.donorForm.get('lastName'); 
}

get email() {
  return this.donorForm.get('email'); 
}


get mobile(){
  return this.donorForm.get('mobile')
}
get age(){
  return this.donorForm.get('age')
}

get gender(){
  return this.donorForm.get('gender')
}

get address(){
  return this.donorForm.get('address')
}

get state(){
  return this.donorForm.get('state')
}
get city(){
  return this.donorForm.get('city')
}

get bloodgroup(){
  return this.donorForm.get('bloodgroup')
}

get health(){
  return this.donorForm.get('health')
}



        


  onSubmit() {
    console.log(this.donorForm.value);
  }

  constructor(private formbuilder: FormBuilder, private donor : DonorService) { }

  ngOnInit(): void {
    this.donorForm = this.formbuilder.group({
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
  postDonorDetails(){
    this.DonorModelObj.firstName = this.donorForm.value.firstName;
    this.DonorModelObj.lastName = this.donorForm.value.lastName;
    this.DonorModelObj.email = this.donorForm.value.email;
    this.DonorModelObj.mobile = this.donorForm.value.mobile;
    this.DonorModelObj.age = this.donorForm.value.age;
    
    this.DonorModelObj.gender = this.donorForm.value.gender;
    this.DonorModelObj.address = this.donorForm.value.address;
    this.DonorModelObj.state = this.donorForm.value.state;
    this.DonorModelObj.city = this.donorForm.value.city;
    this.DonorModelObj.bloodgroup = this.donorForm.value.bloodgroup;
    this.DonorModelObj.health = this.donorForm.value.health;
 

    this.donor.postDon(this.DonorModelObj)
      .subscribe(res=>{
      console.log(res);
      alert("Donor Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.donorForm.reset();
      
    },
    err=>{
      alert("Something went wrong")
    })
  }



}
