import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitallistService } from '../services/hospitallist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  message:boolean=false;

  constructor(private service: HospitallistService, private router : Router) { }

  ngOnInit(): void {
    this.service.recievedStatus().subscribe((data)=>{
      this.message=data;});
  }

  logout()
  {
    
    sessionStorage.removeItem('hospitalregistration');
    
    sessionStorage.clear();
    this.service.subject.next(false);
    
    //this.message=false;
    this.router.navigate(['user-login']); 
  }

}
