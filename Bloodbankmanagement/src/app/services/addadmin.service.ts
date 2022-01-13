import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddadminService {

  constructor(private http : HttpClient) { }

  postAd(data : any){
    return this.http.post<any>("http://localhost:3000/addadmin",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getAdmin(){
    return this.http.get<any>("http://localhost:3000/addadmin")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateAdmin(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/addadmin/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteAdmin(id:number){
    return this.http.delete<any>("http://localhost:3000/addadmin/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  
}
