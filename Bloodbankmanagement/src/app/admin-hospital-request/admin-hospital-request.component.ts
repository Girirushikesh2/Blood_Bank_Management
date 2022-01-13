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
  requestData!:any;
  showAdd!:boolean;
  showUpdate !:boolean;
  info!:any[];

  constructor(private formbuilder: FormBuilder, private requestblood:RequestService) { }

  ngOnInit(): void {
    this.requestblood.getRequest().subscribe((res)=>{
      console.log(res);
      this.info=res;
      console.log(this.info);
    })
    this.formValue = this.formbuilder.group({
      
      HospitalId:[''],
      bloodbank:[''],
      quantity:[''],
      status:[''],
              
    })
    this.getAllRequest();
  }

  deleteRequest(row : any){
    this.requestblood.deleteRequest(row.id)
    .subscribe(res=>{
      alert("Request Deleted")
      this.getAllRequest();
    })
  }

  

  getAllRequest(){
    this.requestblood.getRequest()
    .subscribe(res=>{
      this.requestData = res;
    })
  }

  approve(id:number){
  
    this.requestblood.getRequestid(id).subscribe((data)=>{
      console.log(data);
      data.status="approved"
      this.requestblood.updateRequest(id,data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
      })
    })
  }
  reject(id:number){
    this.requestblood.getRequestid(id).subscribe((data)=>{
      console.log(data);
      data.status="rejected"
      this.requestblood.updateRequest(id,data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
      })
    })
  }

  
  

  

}
