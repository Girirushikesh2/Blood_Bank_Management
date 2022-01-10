import { Component, OnInit } from '@angular/core';

import {  FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HospitallistModel } from '../admin-hospital-list/hospital-list.model';
import { HospitallistService } from '../services/hospitallist.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  HospitallistModelObj : HospitallistModel = new HospitallistModel();

  Model:any={};
  
  public loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router, private Service: HospitallistService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      hospitalregistration:['',Validators.required],
      hospitalpass:['',Validators.required],
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/hospitallist")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.hospitalregistration === this.loginForm.value.hospitalregistration && a.hospitalpass === this.loginForm.value.hospitalpass
      });
      if(user){
        alert("Login Success");
        
        this.loginForm.reset();
        sessionStorage.setItem('hospitalregistration',this.HospitallistModelObj.hospitalregistration)
        console.log(this.HospitallistModelObj.hospitalregistration)
        this.Service.subject.next(true);
        this.router.navigate(['/home'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("Something went wrong")
    })


  }


}
