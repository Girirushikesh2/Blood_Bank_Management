import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http : HttpClient) { }
  postCust(data : any){
    return this.http.post<any>("http://localhost:3000/gallery",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCustomer(){
    return this.http.get<any>("http://localhost:3000/gallery")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateCustomer(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/gallery/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteCustomer(id:number){
    return this.http.delete<any>("http://localhost:3000/gallery/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
