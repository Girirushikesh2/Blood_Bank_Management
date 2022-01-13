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
  stockData!:any;

  constructor(private formbuilder: FormBuilder, private stock: StockService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id : [''],
      date:[''],
      Ap :[''],
      An :[''],
      Bp :[''],
      Bn :[''],
      Op :[''],
      On :[''],
      ABp :[''],
      ABn :[''],

        

    })
    this.getAllStock();
  }

  getAllStock(){
    this.stock.getStock()
    .subscribe(res=>{
      this.stockData = res;
    })
  }
  deleteStock(row : any){
    this.stock.deleteStock(row.id)
    .subscribe(res=>{
      alert("Stock Deleted")
      this.getAllStock();
    })
  }

}
