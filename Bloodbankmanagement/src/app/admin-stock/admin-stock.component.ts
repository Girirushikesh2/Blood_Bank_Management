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

  get date() {
    return this.stockform.get('date'); 
  }

  get Ap() {
    return this.stockform.get('Ap'); 
  }

  get An() {
    return this.stockform.get('An'); 
  }

  get Bp() {
    return this.stockform.get('Bp'); 
  }

  get Bn() {
    return this.stockform.get('Bn'); 
  }

  get Op() {
    return this.stockform.get('Op'); 
  }

  get On() {
    return this.stockform.get('On'); 
  }

  get ABp() {
    return this.stockform.get('ABp'); 
  }
  
  get ABn() {
    return this.stockform.get('ABn'); 
  }
  



        


  onSubmit() {
    console.log(this.stockform.value);
  }

  constructor(private formbuilder: FormBuilder, private stock: StockService) { }

  ngOnInit(): void {
    this.stockform = this.formbuilder.group({
      Ap :new FormControl("",[ Validators.required, Validators.pattern("^[0-9]{2}$")]),
      An :new FormControl("",[ Validators.required, Validators.pattern("^[0-9]{2}$")]),
      Bp :new FormControl("",[ Validators.required, Validators.pattern("^[0-9]{2}$")]),
      Bn :new FormControl("",[ Validators.required, Validators.pattern("^[0-9]{2}$")]),
      Op :new FormControl("",[ Validators.required, Validators.pattern("^[0-9]{2}$")]),
      On :new FormControl("",[ Validators.required, Validators.pattern("^[0-9]{2}$")]),
      ABp :new FormControl("",[ Validators.required, Validators.pattern("^[0-9]{2}$")]),
      ABn :new FormControl("",[ Validators.required, Validators.pattern("^[0-9]{2}$")]),
      date :new FormControl("",[ Validators.required]),
      
            
    })
  }

  postCustomerDetails(){
    this.StockModelObj.Ap = this.stockform.value.Ap;
    this.StockModelObj.An = this.stockform.value.An;
    this.StockModelObj.Bp = this.stockform.value.Bp;
    this.StockModelObj.Bn = this.stockform.value.Bn;
    this.StockModelObj.Op = this.stockform.value.Op;
    this.StockModelObj.On = this.stockform.value.On;
    this.StockModelObj.ABp = this.stockform.value.ABp;
    this.StockModelObj.ABn = this.stockform.value.ABn;
    this.StockModelObj.date = this.stockform.value.date;
 
 

    this.stock.postSt(this.StockModelObj)
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
