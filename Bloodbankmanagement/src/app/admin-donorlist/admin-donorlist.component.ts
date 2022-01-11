import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DonorService } from 'src/app/services/donor.service';
import { DonorModel } from './donor.model';

@Component({
  selector: 'app-admin-donorlist',
  templateUrl: './admin-donorlist.component.html',
  styleUrls: ['./admin-donorlist.component.css']
})
export class AdminDonorlistComponent implements OnInit {

  formValue !: FormGroup;
  DonorModelObj : DonorModel = new DonorModel();
  donorData!:any;
  showAdd!:boolean;
  showUpdate !:boolean;

  constructor(private formbuilder: FormBuilder, private donor: DonorService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName :[''],
      email : [''],
      mobile: [''],
      age: [''],
      
      gender:[''],
      address:[''],
      state:[''],
      city:[''],
      bloodgroup:[''],
      health:[''],
      



    })
    this.getAllDonor();
  }

  clickAddDon(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;

  }

  postDonorDetails(){
    this.DonorModelObj.firstName = this.formValue.value.firstName;
    this.DonorModelObj.lastName = this.formValue.value.lastName;
    this.DonorModelObj.email = this.formValue.value.email;
    this.DonorModelObj.mobile = this.formValue.value.mobile;
    this.DonorModelObj.age = this.formValue.value.age;
    
    this.DonorModelObj.gender = this.formValue.value.gender;
    this.DonorModelObj.address = this.formValue.value.address;
    this.DonorModelObj.state = this.formValue.value.state;
    this.DonorModelObj.city = this.formValue.value.city;
    this.DonorModelObj.bloodgroup = this.formValue.value.bloodgroup;
    this.DonorModelObj.health = this.formValue.value.health;
    

    this.donor.postDon(this.DonorModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Customer Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllDonor();
    },
    err=>{
      alert("Something went wrong")
    })
  }

  getAllDonor(){
    this.donor.getDonor()
    .subscribe(res=>{
      this.donorData = res;
    })
  }
  deleteDonor(row : any){
    this.donor.deleteDonor(row.id)
    .subscribe(res=>{
      alert("Donor Deleted")
      this.getAllDonor();
    })
  }

 

}
