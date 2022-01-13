import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../addadmin/addadmin.model';
import { AddadminService } from '../services/addadmin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      AdminEmail:['',Validators.required],
      AdminPassword:['',Validators.required],
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/addadmin")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.AdminEmail === this.loginForm.value.AdminEmail && a.AdminPassword === this.loginForm.value.AdminPassword
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['admin'])
      }else{
        alert("admin not found");
      }
    },err=>{
      alert("Something went wrong")
    })


  }

}
