import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RequestService } from '../services/request.service';
import { RequestModel } from '../admin-hospital-request/request.module';
import { HospitallistService } from '../services/hospitallist.service';



@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
 

  RequestModelObj : RequestModel = new RequestModel();

  requestform = new FormGroup({
    
    
  })

  get hospitalregistration() {
    return this.requestform.get('hospitalregistration'); 
  }
    
  get bloodgroup() {
    return this.requestform.get('bloodgroup'); 
  }

  get quantity() {
    return this.requestform.get('quantity'); 
  }

  onSubmit() {
    console.log(this.requestform.value);
  }

  constructor(private formbuilder: FormBuilder, private requestblood : RequestService) { }

  ngOnInit(): void {
    this.requestform = this.formbuilder.group({

      hospitalregistration:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{5}$")]),
      bloodgroup :new FormControl("",[ Validators.required]),
      quantity :  new FormControl("",[Validators.required,Validators.pattern("^[0-9]{2}$")]),
      
     
                             
    })
  }

  postRequestDetails(){
    
    this.RequestModelObj.hospitalregistration = this.requestform.value.hospitalregistration;
    this.RequestModelObj.bloodgroup = this.requestform.value.bloodgroup;
    this.RequestModelObj.quantity = this.requestform.value.quantity;
  
    
    
 

    this.requestblood.postRequ(this.RequestModelObj)
      .subscribe(res=>{
      
      console.log(res);
      alert("Request Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.requestform.reset();
      
    },
    err=>{
      alert("Something went wrong")
    })
  }

}
