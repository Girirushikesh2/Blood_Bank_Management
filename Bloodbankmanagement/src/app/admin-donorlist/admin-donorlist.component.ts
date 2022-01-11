import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DonorService } from 'src/app/services/donor.service';
import { CustomerModel } from './donor.model';

@Component({
  selector: 'app-admin-donorlist',
  templateUrl: './admin-donorlist.component.html',
  styleUrls: ['./admin-donorlist.component.css']
})
export class AdminDonorlistComponent implements OnInit {

  formValue !: FormGroup;
  customerModelObj : CustomerModel = new CustomerModel();
  customerData!:any;
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
    this.getAllCustomer();
  }

  clickAddCust(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;

  }

  postCustomerDetails(){
    this.customerModelObj.firstName = this.formValue.value.firstName;
    this.customerModelObj.lastName = this.formValue.value.lastName;
    this.customerModelObj.email = this.formValue.value.email;
    this.customerModelObj.mobile = this.formValue.value.mobile;
    this.customerModelObj.age = this.formValue.value.age;
    
    this.customerModelObj.gender = this.formValue.value.gender;
    this.customerModelObj.address = this.formValue.value.address;
    this.customerModelObj.state = this.formValue.value.state;
    this.customerModelObj.city = this.formValue.value.city;
    this.customerModelObj.bloodgroup = this.formValue.value.bloodgroup;
    this.customerModelObj.health = this.formValue.value.health;
    

    this.donor.postCust(this.customerModelObj)
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
    this.donor.getCustomer()
    .subscribe(res=>{
      this.customerData = res;
    })
  }
  deleteCustomer(row : any){
    this.donor.deleteCustomer(row.id)
    .subscribe(res=>{
      alert("Customer Deleted")
      this.getAllCustomer();
    })
  }

 

}
