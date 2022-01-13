import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http : HttpClient) { }

  postSt(data : any){
    return this.http.post<any>("http://localhost:3000/stock",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getStock(){
    return this.http.get<any>("http://localhost:3000/stock")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateStock(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/stock/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteStock(id:number){
    return this.http.delete<any>("http://localhost:3000/stock/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
