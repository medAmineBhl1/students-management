import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:UserLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule )},
    {path:'register',loadChildren:()=>import('./views/user/register/register.module').then(m=>m.RegisterModule)}

  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'allstudents',loadChildren:()=>import('./views/admin/allstudents/allstudents.module').then(m=>m.AllstudentsModule)},
    {path:'addstudent',loadChildren:()=>import('./views/admin/addstudents/addstudents.module').then(m=>m.AddstudentsModule)},
    {path:'studentdetails/:id',loadChildren:()=>import('./views/admin/studentdetails/studentdetails.module').then(m=>m.StudentdetailsModule)},
    {path:'loginadmin',loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)}

  ]},
  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
