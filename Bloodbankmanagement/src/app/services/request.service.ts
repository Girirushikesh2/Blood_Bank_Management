import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http : HttpClient) { }

  postRequ(data : any){
    return this.http.post<any>("http://localhost:3000/request",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getRequest(){
    return this.http.get<any>("http://localhost:3000/request")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getRequestid(id:number){
    return this.http.get<any>("http://localhost:3000/request/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getstatus(HospitalId:string){
    return this.http.get<any>("http://localhost:3000/request/"+HospitalId)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  

  updateRequest(id:number,data:any){
    return this.http.put<any>("http://localhost:3000/request/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteRequest(id:number){
    return this.http.delete<any>("http://localhost:3000/request/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  
}
