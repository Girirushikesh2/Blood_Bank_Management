import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminCampComponent } from './admin-camp/admin-camp.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminDonorlistComponent } from './admin-donorlist/admin-donorlist.component';
import { AdminHomeMainComponent } from './admin-home-main/admin-home-main.component';
import { AdminHospitalListComponent } from './admin-hospital-list/admin-hospital-list.component';

import { ContactComponent } from './contact/contact.component';
import { DonorRegisterComponent } from './donor-register/donor-register.component';
import { HomeComponent } from './home/home.component';
import { HospitalRegisterComponent } from './hospital-register/hospital-register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'donor-register',component:DonorRegisterComponent},
  {path:'hospital-register',component:HospitalRegisterComponent},
   
  {path:'admin',component:AdminHomeMainComponent,
  children:
  [
    {path:'', redirectTo:'/admin/admin-dash',pathMatch:'full'},
    {path:'admin-dash',component:AdminDashComponent},
    {path:'admin-camp',component:AdminCampComponent},
    {path:'admin-hospital-list',component:AdminHospitalListComponent},
    {path:'admin-donorlist',component:AdminDonorlistComponent},
    {path:'admin-contact',component:AdminContactComponent},

  ]  
  },

//   {path:'Scheme',component:SchemeComponent,
// children:
// [{path:'',redirectTo:'/StudentHomePage/Scheme/Scheme1', pathMatch:'full'},
// {path:'Scheme1',component: Scheme1Component},
// {path:'Scheme2',component: Scheme2Component},
// {path:'Scheme3',component: Scheme3Component}]},
// {path:'Scholarship',component: ScholarshipComponent},
// {path: 'CheckStudentStatus', component: CheckStudentStatusComponent},
// {path:'Studentprofile',component:StudentprofileComponent}]
// },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
