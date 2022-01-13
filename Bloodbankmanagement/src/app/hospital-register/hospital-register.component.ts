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
 
  hospitalForm = new FormGroup({
    
   
  })


  get hospitalname() {
    return this.hospitalForm.get('hospitalname'); 
  }
  
  get hospitalmobile(){
    return this.hospitalForm.get('hospitalmobile')
  }
  
  get hospitalemail() {
    return this.hospitalForm.get('hospitalemail'); 
  }
  
  get hospitalregistration(){
    return this.hospitalForm.get('hospitalregistration'); 
  }
  
  get hospitaladdress(){
    return this.hospitalForm.get('hospitaladdress'); 
  }
  
  get hospitalstate(){
    return this.hospitalForm.get('hospitalstate'); 
  }
  
  get hospitalcity(){
    return this.hospitalForm.get('hospitalcity'); 
  }
  
 
  
  get hospitalpass(){
    return this.hospitalForm.get('hospitalpass'); 
  }
  
  
  
  
  
  
  
          
  
  
    onSubmit() {
      console.log(this.hospitalForm.value);
    }

  constructor(private formbuilder: FormBuilder, private hospitallist: HospitallistService) { }

  ngOnInit(): void {

    this.hospitalForm = this.formbuilder.group({
      hospitalname : new FormControl("",[Validators.required,Validators.minLength(5),Validators.pattern("^[a-z A-Z]+$")]),
      hospitalemail :  new FormControl("",[Validators.email,Validators.required]),
      hospitalmobile: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
      hospitalregistration: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{5}$")]),
      hospitaladdress:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
      hospitalstate:new FormControl("",[Validators.required]),
      hospitalcity:new FormControl("",[Validators.required]),
      hospitalpass:new FormControl("",[Validators.required]),
      
     
      
     



    })
  }

  postHospitalDetails(){
    this.HospitallistModelObj.hospitalname = this.hospitalForm.value.hospitalname;
    this.HospitallistModelObj.hospitalemail = this.hospitalForm.value.hospitalemail;
    this.HospitallistModelObj.hospitalmobile = this.hospitalForm.value.hospitalmobile;
    this.HospitallistModelObj.hospitalregistration = this.hospitalForm.value.hospitalregistration;
    this.HospitallistModelObj.hospitaladdress = this.hospitalForm.value.hospitaladdress;
    this.HospitallistModelObj.hospitalstate = this.hospitalForm.value.hospitalstate;
    this.HospitallistModelObj.hospitalcity = this.hospitalForm.value.hospitalcity;
    this.HospitallistModelObj.hospitalpass = this.hospitalForm.value.hospitalpass;
   
    
  

    this.hospitallist.postHosp(this.HospitallistModelObj)
      .subscribe(res=>{
      console.log(res);
      alert("Hospital Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.hospitalForm.reset();
      
    },
    err=>{
      alert("Something went wrong")
    })
  }

}
