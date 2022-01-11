import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StockModel } from '../admin-stock/stock.model';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  formValue !: FormGroup;
  StockModelObj : StockModel = new StockModel();
  customerData!:any;

  constructor(private formbuilder: FormBuilder, private stock: StockService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      bloodgroup : [''],
      bagquantity :[''],
        

    })
    this.getAllCustomer();
  }

  getAllCustomer(){
    this.stock.getCustomer()
    .subscribe(res=>{
      this.customerData = res;
    })
  }
  deleteCustomer(row : any){
    this.stock.deleteCustomer(row.id)
    .subscribe(res=>{
      alert("Customer Deleted")
      this.getAllCustomer();
    })
  }

}
