import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminCampComponent } from './admin/admin-camp/admin-camp.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';
import { AdminDonorlistComponent } from './admin/admin-donorlist/admin-donorlist.component';
import { AdminHospitalListComponent } from './admin/admin-hospital-list/admin-hospital-list.component';

import { ContactComponent } from './contact/contact.component';
import { DonorRegisterComponent } from './donor-register/donor-register.component';
import { HomeComponent } from './home/home.component';
import { HospitalRegisterComponent } from './hospital-register/hospital-register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'admin-camp',component:AdminCampComponent},
  {path:'admin-donorlist',component:AdminDonorlistComponent},
  {path:'donor-register',component:DonorRegisterComponent},
  {path:'admin-hospital-list',component:AdminHospitalListComponent},
  {path:'hospital-register',component:HospitalRegisterComponent},
  {path:'admin-dash',component:AdminDashComponent},
  {path:'admin-contact',component:AdminContactComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
