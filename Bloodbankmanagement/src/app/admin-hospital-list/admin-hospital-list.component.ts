import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HospitallistService } from 'src/app/services/hospitallist.service'; 
import { Hospital } from './hospital-list.model'; 

@Component({
  selector: 'app-admin-hospital-list',
  templateUrl: './admin-hospital-list.component.html',
  styleUrls: ['./admin-hospital-list.component.css']
})
export class AdminHospitalListComponent implements OnInit {

  formValue !: FormGroup;
  HospitallistModelObj : Hospital = new Hospital();
  hospitalData!:any;
  

  constructor(private formbuilder: FormBuilder, private hospitallist:HospitallistService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      HospitalName : [''],
      Email : [''],
      PhoneNo: [''],
      HospitalId:[''],
      Address:[''],
      State:[''],
      City:[''],
      hospitalpass:[''],
      

      
     



    })
    this.getAllHospital();
  }

  

  postHospitalDetails(){
    this.HospitallistModelObj.HospitalName = this.formValue.value.HospitalName;
    this.HospitallistModelObj.Email = this.formValue.value.Email;
    this.HospitallistModelObj.PhoneNo = this.formValue.value.PhoneNo;
    this.HospitallistModelObj.HospitalId = this.formValue.value.HospitalId;
    this.HospitallistModelObj.Address = this.formValue.value.Address;
    this.HospitallistModelObj.State = this.formValue.value.State;
    this.HospitallistModelObj.City = this.formValue.value.City;
 

    this.hospitallist.postHosp(this.HospitallistModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Hospital Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllHospital();
    },
    err=>{
      alert("Something went wrong")
    })
  }

  getAllHospital(){
    this.hospitallist.getHospital()
    .subscribe(res=>{
      this.hospitalData = res;
    })
  }
  deleteHospital(row : any){
    this.hospitallist.deleteHospital(row.id)
    .subscribe(res=>{
      alert("Hospital Deleted")
      this.getAllHospital();
    })
  }

  onEdit(row:any){
    
    this.HospitallistModelObj.id = row.id;
    this.formValue.controls['HospitalName'].setValue(row.HospitalName);
    this.formValue.controls['Email'].setValue(row.Email);
    this.formValue.controls['PhoneNo'].setValue(row.PhoneNo);
    this.formValue.controls['HospitalId'].setValue(row.HospitalId);
    this.formValue.controls['Address'].setValue(row.Address);
    this.formValue.controls['State'].setValue(row.State);
    this.formValue.controls['City'].setValue(row.City);
    
 
    
  }

  updateHospitalDetails(){
    this.HospitallistModelObj.HospitalName = this.formValue.value.HospitalName;
   
    this.HospitallistModelObj.Email = this.formValue.value.Email;
    this.HospitallistModelObj.PhoneNo = this.formValue.value.PhoneNo;
    this.HospitallistModelObj.HospitalId = this.formValue.value.HospitalId;
    this.HospitallistModelObj.Address = this.formValue.value.Address;
    this.HospitallistModelObj.State = this.formValue.value.State;
    this.HospitallistModelObj.City = this.formValue.value.City;
        
    this.hospitallist.updateHospital(this.HospitallistModelObj, this.HospitallistModelObj.id)
    .subscribe(res=>{
      alert("Updated successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllHospital();
    })
  }

}
