import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  constructor(private http : HttpClient) { }

  postDon(data : any){
    return this.http.post<any>("http://localhost:3000/donor",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getDonor(){
    return this.http.get<any>("http://localhost:3000/donor")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateDonor(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/donor/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteDonor(id:number){
    return this.http.delete<any>("http://localhost:3000/donor/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
