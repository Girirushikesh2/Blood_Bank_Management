import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
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
    AdminHomeMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
