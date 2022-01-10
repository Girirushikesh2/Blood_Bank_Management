import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StockService } from '../services/stock.service';
import { StockModel } from './stock.model';

@Component({
  selector: 'app-admin-stock',
  templateUrl: './admin-stock.component.html',
  styleUrls: ['./admin-stock.component.css']
})
export class AdminStockComponent implements OnInit {

  StockModelObj : StockModel = new StockModel();

  stockform = new FormGroup({
    
  })


get bloodgroup() {
  return this.stockform.get('bloodgroup'); 
}

get bagquantity() {
  return this.stockform.get('bagquantity'); 
}




        


  onSubmit() {
    console.log(this.stockform.value);
  }

  constructor(private formbuilder: FormBuilder, private stock: StockService) { }

  ngOnInit(): void {
    this.stockform = this.formbuilder.group({
      bloodgroup : new FormControl("",[Validators.required]),
      bagquantity :new FormControl("",[ Validators.required, Validators.pattern("^[0-9]{2}$")]),
            
    })
  }

  postCustomerDetails(){
    this.StockModelObj.bloodgroup = this.stockform.value.bloodgroup;
    this.StockModelObj.bagquantity = this.stockform.value.bagquantity;

 

    this.stock.postCust(this.StockModelObj)
      .subscribe(res=>{
      console.log(res);
      alert("Stock Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.stockform.reset();
      
    },
    err=>{
      alert("Something went wrong")
    })
  }

}
