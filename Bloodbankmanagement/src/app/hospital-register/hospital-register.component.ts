import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Hospital } from '../admin-hospital-list/hospital-list.model';
import { HospitallistService } from 'src/app/services/hospitallist.service'; 

@Component({
  selector: 'app-hospital-register',
  templateUrl: './hospital-register.component.html',
  styleUrls: ['./hospital-register.component.css']
})
export class HospitalRegisterComponent implements OnInit {

  HospitallistModelObj: Hospital = new Hospital();
 
  hospitalForm = new FormGroup({
    
   
  })


  get HospitalName() {
    return this.hospitalForm.get('HospitalName'); 
  }
  
  get PhoneNo(){
    return this.hospitalForm.get('PhoneNo')
  }
  
  get Email() {
    return this.hospitalForm.get('Email'); 
  }
  
  get HospitalId(){
    return this.hospitalForm.get('HospitalId'); 
  }
  
  get Address(){
    return this.hospitalForm.get('Address'); 
  }
  
  get State(){
    return this.hospitalForm.get('State'); 
  }
  
  get City(){
    return this.hospitalForm.get('City'); 
  }
  
 
  
  get Password(){
    return this.hospitalForm.get('Password'); 
  }
  
  
  
  
  
  
  
          
  
  
    onSubmit() {
      console.log(this.hospitalForm.value);
    }

  constructor(private formbuilder: FormBuilder, private hospitallist: HospitallistService) { }

  ngOnInit(): void {

    this.hospitalForm = this.formbuilder.group({
      HospitalName : new FormControl("",[Validators.required,Validators.minLength(5),Validators.pattern("^[a-z A-Z]+$")]),
      Email :  new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,3}")]),
      PhoneNo: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
      HospitalId: new FormControl("",[Validators.required,Validators.pattern("^[0-9]{5}$")]),
      Address:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
      State:new FormControl("",[Validators.required]),
      City:new FormControl("",[Validators.required]),
      Password:new FormControl("",[Validators.required]),
      
     
      
     



    })
  }

  postHospitalDetails(){
    this.HospitallistModelObj.HospitalName = this.hospitalForm.value.HospitalName;
    this.HospitallistModelObj.Email = this.hospitalForm.value.Email;
    this.HospitallistModelObj.PhoneNo = this.hospitalForm.value.PhoneNo;
    this.HospitallistModelObj.HospitalId = this.hospitalForm.value.HospitalId;
    this.HospitallistModelObj.Address = this.hospitalForm.value.Address;
    this.HospitallistModelObj.State = this.hospitalForm.value.State;
    this.HospitallistModelObj.City = this.hospitalForm.value.City;
    this.HospitallistModelObj.Password = this.hospitalForm.value.Password;
   
    
  

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
