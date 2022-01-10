import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitallistService {

  public subject=new Subject<boolean>();
  
  constructor(private http : HttpClient) { }

  postCust(data : any){
    return this.http.post<any>("http://localhost:3000/hospitallist",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCustomer(){
    return this.http.get<any>("http://localhost:3000/hospitallist")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateCustomer(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/hospitallist/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteCustomer(id:number){
    return this.http.delete<any>("http://localhost:3000/hospitallist/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }

}
