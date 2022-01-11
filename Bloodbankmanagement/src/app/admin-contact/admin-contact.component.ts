import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { ContactModel } from './contact.model';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {

  formValue !: FormGroup;
  ContactModelObj : ContactModel = new ContactModel();
  customerData!:any;
 

  constructor(private formbuilder: FormBuilder, private contact :ContactService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      contactfName : [''],
      contactlName :[''],
      contactemail : [''],
      contactmobile: [''],
      contactmessage: [''],
      
      
      



    })
    this.getAllCustomer();
  }

  clickAddCust(){
    this.formValue.reset();
   

  }

  

  getAllCustomer(){
    this.contact.getCustomer()
    .subscribe(res=>{
      this.customerData = res;
    })
  }
  deleteCustomer(row : any){
    this.contact.deleteCustomer(row.id)
    .subscribe(res=>{
      alert("Customer Deleted")
      this.getAllCustomer();
    })
  }

  

}
