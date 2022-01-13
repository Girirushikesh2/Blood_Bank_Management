import { Component, OnInit } from '@angular/core';

import {  FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Hospital } from '../admin-hospital-list/hospital-list.model';
import { HospitallistService } from '../services/hospitallist.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  HospitallistModelObj : Hospital = new Hospital();

  Model:any={};
  
  public loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router, private Service: HospitallistService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      HospitalId:['',Validators.required],
      Password:['',Validators.required],
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/hospitallist")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.HospitalId === this.loginForm.value.HospitalId && a.Password === this.loginForm.value.Password
      });
      if(user){
        alert("Login Success");
        
        this.loginForm.reset();
        sessionStorage.setItem('HospitalId',this.HospitallistModelObj.HospitalId)
        console.log(this.HospitallistModelObj.HospitalId)
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
