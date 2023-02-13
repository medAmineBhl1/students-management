import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {

  // ProfilAdmin={
  //   username:'',
  //   role:''
  // }

  IsLoggedIn:boolean=false

  constructor(private http:HttpClient) { }
  
  login(data:any){

    return this.http.post('http://localhost:3000/admin/login',data)

  }

  SaveDataProfil(token:any,username:any,role:any){
    localStorage.setItem('token',token)
    localStorage.setItem('role',role)
    localStorage.setItem('username',username)
    // this.ProfilAdmin.username = username
    // this.ProfilAdmin.role = role
    // this.IsLoggedIn = true
  }
}

 