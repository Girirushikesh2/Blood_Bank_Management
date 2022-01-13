import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Admin } from '../addadmin/addadmin.model';
import { AddadminService } from '../services/addadmin.service';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit {

  AdminObj: Admin = new Admin();
 
  AdminForm = new FormGroup({
    
   
  })


  get AdminName() {
    return this.AdminForm.get('AdminName'); 
  }
  
  get AdminEmail(){
    return this.AdminForm.get('AdminEmail')
  }
  
  get AdminPassword() {
    return this.AdminForm.get('AdminPassword'); 
  }
  
      
             
  
  
    onSubmit() {
      console.log(this.AdminForm.value);
    }

  constructor(private formbuilder: FormBuilder, private addadmin: AddadminService) { }

  ngOnInit(): void {
    this.AdminForm = this.formbuilder.group({
      AdminName : new FormControl("",[Validators.required,Validators.minLength(5),Validators.pattern("^[a-z A-Z]+$")]),
      AdminEmail :  new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,3}")]),
      AdminPassword:new FormControl("",[Validators.required]),
      
            

    })
  }


  postAdminDetails(){
    this.AdminObj.AdminName = this.AdminForm.value.AdminName;
    this.AdminObj.AdminEmail = this.AdminForm.value.AdminEmail;
    this.AdminObj.AdminPassword = this.AdminForm.value.AdminPassword;
    
   
    
  

    this.addadmin.postAd(this.AdminObj)
      .subscribe(res=>{
      console.log(res);
      alert("Admin Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.AdminForm.reset();
      
    },
    err=>{
      alert("Something went wrong")
    })
  }

}
