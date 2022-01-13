import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddadminService } from '../services/addadmin.service';
import { Admin } from './addadmin.model';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  adminform !: FormGroup;
  AdminModelObj : Admin = new Admin();
  adminData!:any;

  constructor(private formbuilder: FormBuilder, private addadmin:AddadminService ) { }

  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
      Adminid :[''],
      AdminName : [''],
      AdminEmail:[''],
      AdminPassword:[''],
      IsActive:[''],
      

      
     



    })
    this.getAllAdmin();
  }

  postAdminDetails(){
    this.AdminModelObj.AdminName = this.adminform.value.AdminEmail;
    this.AdminModelObj.AdminEmail = this.adminform.value.AdminEmail;
   
   
 

    this.addadmin.postAd(this.AdminModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Admin Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.adminform.reset();
      this.getAllAdmin();
    },
    err=>{
      alert("Something went wrong")
    })
  }

  getAllAdmin(){
    this.addadmin.getAdmin()
    .subscribe(res=>{
      this.adminData = res;
    })
  }
  deleteAdmin(row : any){
    this.addadmin.deleteAdmin(row.id)
    .subscribe(res=>{
      alert("Admin Deleted")
      this.getAllAdmin();
    })
  }

  onEdit(row:any){
    
    this.AdminModelObj.Adminid = row.id;
    this.adminform.controls['AdminName'].setValue(row.AdminName);
    this.adminform.controls['AdminEmail'].setValue(row.AdminEmail);
  
    
    
 
    
  }

  updateAdminDetails(){
    this.AdminModelObj.AdminName = this.adminform.value.AdminName;
    this.AdminModelObj.AdminEmail = this.adminform.value.AdminEmail;
    
        
    this.addadmin.updateAdmin(this.AdminModelObj, this.AdminModelObj.Adminid)
    .subscribe(res=>{
      alert("Updated successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.adminform.reset();
      this.getAllAdmin();
    })
  }

}
