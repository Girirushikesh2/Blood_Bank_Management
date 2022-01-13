import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminCampComponent } from './admin-camp/admin-camp.component';
import { AdminDonorlistComponent } from './admin-donorlist/admin-donorlist.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { DonorRegisterComponent } from './donor-register/donor-register.component';
import { AdminHospitalListComponent } from './admin-hospital-list/admin-hospital-list.component';
import { HospitalRegisterComponent } from './hospital-register/hospital-register.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { HomemainComponent } from './homemain/homemain.component';
import { AdminHomeMainComponent } from './admin-home-main/admin-home-main.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { StatusComponent } from './status/status.component';
import { RequestComponent } from './request/request.component';
import { AdminHospitalRequestComponent } from './admin-hospital-request/admin-hospital-request.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { AdminStockComponent } from './admin-stock/admin-stock.component';
import {  LightboxModule } from 'ngx-lightbox';
import { PaginationComponent } from './pagination/pagination.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AdminformComponent } from './adminform/adminform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AdminCampComponent,
    AdminDonorlistComponent,
    AdminNavComponent,
    DonorRegisterComponent,
    AdminHospitalListComponent,
    HospitalRegisterComponent,
    AdminDashComponent,
    AdminContactComponent,
    HomemainComponent,
    AdminHomeMainComponent,
    AdminLoginComponent,
    UserLoginComponent,
    StatusComponent,
    RequestComponent,
    AdminHospitalRequestComponent,
    GalleryComponent,
    FaqsComponent,
    KnowmoreComponent,
    AdminStockComponent,
    PaginationComponent,
    AddadminComponent,
    AdminformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
