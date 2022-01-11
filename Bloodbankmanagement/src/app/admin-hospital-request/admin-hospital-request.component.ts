import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestService } from '../services/request.service'; 
import { RequestModel } from './request.module';

@Component({
  selector: 'app-admin-hospital-request',
  templateUrl: './admin-hospital-request.component.html',
  styleUrls: ['./admin-hospital-request.component.css']
})
export class AdminHospitalRequestComponent implements OnInit {

  formValue !: FormGroup;
  RequestModelObj : RequestModel = new RequestModel();
  customerData!:any;
  showAdd!:boolean;
  showUpdate !:boolean;
  info!:any[];

  constructor(private formbuilder: FormBuilder, private requestblood:RequestService) { }

  ngOnInit(): void {
    this.requestblood.getCustomer().subscribe((res)=>{
      console.log(res);
      this.info=res;
      console.log(this.info);
    })
    this.formValue = this.formbuilder.group({
      hospitalname : [''],
      hospitalregistration:[''],
      bloodbank:[''],
      quantity:[''],
      status:[''],
              
    })
    this.getAllCustomer();
  }

  deleteCustomer(row : any){
    this.requestblood.deleteCustomer(row.id)
    .subscribe(res=>{
      alert("Customer Deleted")
      this.getAllCustomer();
    })
  }

  

  getAllCustomer(){
    this.requestblood.getCustomer()
    .subscribe(res=>{
      this.customerData = res;
    })
  }

  approve(id:number){
  
    this.requestblood.getCustomerid(id).subscribe((data)=>{
      console.log(data);
      data.status="approved"
      this.requestblood.updateCustomer(id,data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
      })
    })
  }
  reject(id:number){
    this.requestblood.getCustomerid(id).subscribe((data)=>{
      console.log(data);
      data.status="rejected"
      this.requestblood.updateCustomer(id,data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
      })
    })
  }

  
  

  

}