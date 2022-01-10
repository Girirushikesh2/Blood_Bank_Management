import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HospitallistService } from 'src/app/services/hospitallist.service'; 
import { HospitallistModel } from './hospital-list.model'; 

@Component({
  selector: 'app-admin-hospital-list',
  templateUrl: './admin-hospital-list.component.html',
  styleUrls: ['./admin-hospital-list.component.css']
})
export class AdminHospitalListComponent implements OnInit {

  formValue !: FormGroup;
  HospitallistModelObj : HospitallistModel = new HospitallistModel();
  customerData!:any;
  showAdd!:boolean;
  showUpdate !:boolean;

  constructor(private formbuilder: FormBuilder, private hospitallist:HospitallistService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      hospitalname : [''],
      
      hospitalemail : [''],
      hospitalmobile: [''],
      hospitalregistration:[''],
      hospitaladdress:[''],
      hospitalstate:[''],
      hospitalcity:[''],
      hospitalpass:['']
      
     



    })
    this.getAllCustomer();
  }

  clickAddCust(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;

  }

  postCustomerDetails(){
    this.HospitallistModelObj.hospitalname = this.formValue.value.hospitalname;
    
    this.HospitallistModelObj.hospitalemail = this.formValue.value.hospitalemail;
    this.HospitallistModelObj.hospitalmobile = this.formValue.value.hospitalmobile;
    this.HospitallistModelObj.hospitalregistration = this.formValue.value.hospitalregistration;
    this.HospitallistModelObj.hospitaladdress = this.formValue.value.hospitaladdress;
    this.HospitallistModelObj.hospitalstate = this.formValue.value.hospitalstate;
    this.HospitallistModelObj.hospitalcity = this.formValue.value.hospitalcity;
 

    this.hospitallist.postCust(this.HospitallistModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Customer Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCustomer();
    },
    err=>{
      alert("Something went wrong")
    })
  }

  getAllCustomer(){
    this.hospitallist.getCustomer()
    .subscribe(res=>{
      this.customerData = res;
    })
  }
  deleteCustomer(row : any){
    this.hospitallist.deleteCustomer(row.id)
    .subscribe(res=>{
      alert("Customer Deleted")
      this.getAllCustomer();
    })
  }

  onEdit(row:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.HospitallistModelObj.id = row.id;
    this.formValue.controls['hospitalname'].setValue(row.hospitalname);
    this.formValue.controls['hospitalemail'].setValue(row.hospitalemail);
    this.formValue.controls['hospitalmobile'].setValue(row.hospitalmobile);
    this.formValue.controls['hospitalregistration'].setValue(row.hospitalregistration);
    this.formValue.controls['hospitaladdress'].setValue(row.hospitaladdress);
    this.formValue.controls['hospitalstate'].setValue(row.hospitalstate);
    this.formValue.controls['hospitalcity'].setValue(row.hospitalcity);
    
 
    
  }

  updateCustomerDetails(){
    this.HospitallistModelObj.hospitalname = this.formValue.value.hospitalname;
   
    this.HospitallistModelObj.hospitalemail = this.formValue.value.hospitalemail;
    this.HospitallistModelObj.hospitalmobile = this.formValue.value.hospitalmobile;
    this.HospitallistModelObj.hospitalregistration = this.formValue.value.hospitalregistration;
    this.HospitallistModelObj.hospitaladdress = this.formValue.value.hospitaladdress;
    this.HospitallistModelObj.hospitalstate = this.formValue.value.hospitalstate;
    this.HospitallistModelObj.hospitalcity = this.formValue.value.hospitalcity;
        
    this.hospitallist.updateCustomer(this.HospitallistModelObj, this.HospitallistModelObj.id)
    .subscribe(res=>{
      alert("Updated successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCustomer();
    })
  }

}
