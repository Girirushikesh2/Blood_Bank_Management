import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HospitallistModel } from '../admin-hospital-list/hospital-list.model';
import { HospitallistService } from 'src/app/services/hospitallist.service'; 

@Component({
  selector: 'app-hospital-register',
  templateUrl: './hospital-register.component.html',
  styleUrls: ['./hospital-register.component.css']
})
export class HospitalRegisterComponent implements OnInit {

  HospitallistModelObj: HospitallistModel = new HospitallistModel();

  contactForm = new FormGroup({
    // firstName: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]+$")]),
    // lastName: new FormControl("",[ Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]),
    // email: new FormControl("",[Validators.email,Validators.required]),
    // mobile: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
   
  })


  get hospitalname() {
    return this.contactForm.get('hospitalname'); 
  }
  
  get hospitalmobile(){
    return this.contactForm.get('hospitalmobile')
  }
  
  get hospitalemail() {
    return this.contactForm.get('hospitalemail'); 
  }
  
  get hospitalregistration(){
    return this.contactForm.get('hospitalregistration'); 
  }
  
  get hospitaladdress(){
    return this.contactForm.get('hospitaladdress'); 
  }
  
  get hospitalstate(){
    return this.contactForm.get('hospitalstate'); 
  }
  
  get hospitalcity(){
    return this.contactForm.get('hospitalcity'); 
  }
  
  get hospitalpass(){
    return this.contactForm.get('hospitalpass'); 
  }
  
  get hospitalconpass(){
    return this.contactForm.get('hospitalconpass'); 
  }
  
  
  
  
  
          
  
  
    onSubmit() {
      console.log(this.contactForm.value);
    }

  constructor(private formbuilder: FormBuilder, private hospitallist: HospitallistService) { }

  ngOnInit(): void {

    this.contactForm = this.formbuilder.group({
      hospitalname : new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]+$")]),
      hospitalemail :  new FormControl("",[Validators.email,Validators.required]),
      hospitalmobile: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
      hospitalregistration: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{5}$")]),
      hospitaladdress:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
      hospitalstate:new FormControl("",[Validators.required]),
      hospitalcity:new FormControl("",[Validators.required]),
      hospitalpass:new FormControl("",[Validators.required]),
      hospitalconpass:new FormControl("",[Validators.required]),
      
     



    })
  }

  postCustomerDetails(){
    this.HospitallistModelObj.hospitalname = this.contactForm.value.hospitalname;
    this.HospitallistModelObj.hospitalemail = this.contactForm.value.hospitalemail;
    this.HospitallistModelObj.hospitalmobile = this.contactForm.value.hospitalmobile;
    this.HospitallistModelObj.hospitalregistration = this.contactForm.value.hospitalregistration;
    this.HospitallistModelObj.hospitaladdress = this.contactForm.value.hospitaladdress;
    this.HospitallistModelObj.hospitalstate = this.contactForm.value.hospitalstate;
    this.HospitallistModelObj.hospitalcity = this.contactForm.value.hospitalcity;
    this.HospitallistModelObj.hospitalpass = this.contactForm.value.hospitalpass;
    
  

    this.hospitallist.postCust(this.HospitallistModelObj)
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
