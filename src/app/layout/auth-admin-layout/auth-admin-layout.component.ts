import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {
    
  dataReceived:any
  constructor(private asd:AuthadminService,private route:Router){}

  ngOnInit(): void {
  }

  loginadmin(f:any){
    let data = f.value
    //console.log(data)
    this.asd.login(data).subscribe((response)=>{
    this.dataReceived = response
    this.asd.SaveDataProfil(this.dataReceived.token,this.dataReceived.username,this.dataReceived.role)
    this.route.navigate(['/admin'])

    },err=>console.log(err))
  }  
}
