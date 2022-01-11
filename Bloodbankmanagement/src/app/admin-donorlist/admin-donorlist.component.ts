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
