import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http : HttpClient) { }

  postCust(data : any){
    return this.http.post<any>("http://localhost:3000/request",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCustomer(){
    return this.http.get<any>("http://localhost:3000/request")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getCustomerid(id:number){
    return this.http.get<any>("http://localhost:3000/request/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getstatus(hospitalregistration:string){
    return this.http.get<any>("http://localhost:3000/request/"+hospitalregistration)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  

  updateCustomer(id:number,data:any){
    return this.http.put<any>("http://localhost:3000/request/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteCustomer(id:number){
    return this.http.delete<any>("http://localhost:3000/request/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  
}
