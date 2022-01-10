import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {

  info!:any;

  constructor(private requestblood:RequestService) { }

  ngOnInit(): void {
    this.requestblood.getstatus((sessionStorage.getItem('hospitalregistration')!)).subscribe((res:any)=>{
      console.log(res);
       this.info=res;
    })
  }

}
