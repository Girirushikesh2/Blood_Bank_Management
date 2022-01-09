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
  showAdd!:boolean;
  showUpdate !:boolean;

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
    this.showAdd=true;
    this.showUpdate=false;

  }

  postCustomerDetails(){
    this.ContactModelObj.contactfName = this.formValue.value.contactfName;
    this.ContactModelObj.contactlName = this.formValue.value.contactlName;
    this.ContactModelObj.contactemail = this.formValue.value.contactemail;
    this.ContactModelObj.contactmobile = this.formValue.value.contactmobile;
    this.ContactModelObj.contactmessage = this.formValue.value.contactmessage;
    
    
    

    this.contact.postCust(this.ContactModelObj)
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

  onEdit(row:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.ContactModelObj.id = row.id;
    this.formValue.controls['contactfName'].setValue(row.contactfName);
    this.formValue.controls['contactlName'].setValue(row.contactlName);
    this.formValue.controls['contactemail'].setValue(row.contactemail);
    this.formValue.controls['contactmobile'].setValue(row.contactmobile);
    this.formValue.controls['contactmessage'].setValue(row.contactmessage);
    

    
    
  }

  updateCustomerDetails(){
    this.ContactModelObj.contactfName = this.formValue.value.contactfName;
    this.ContactModelObj.contactlName = this.formValue.value.contactlName;
    this.ContactModelObj.contactemail = this.formValue.value.contactemail;
    this.ContactModelObj.contactmobile = this.formValue.value.contactmobile;
    this.ContactModelObj.contactmessage = this.formValue.value.contactmessage;
    
  
    

    this.contact.updateCustomer(this.ContactModelObj, this.ContactModelObj.id)
    .subscribe(res=>{
      alert("Updated successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCustomer();
    })
  }

}
