import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAllStudents(){
    return this.http.get('http://localhost:3000/students')
  }

  addstudent(profile:any){
    return this.http.post('http://localhost:3000/addstudent',profile)
  }

  deleteStudent(id:any){
    return this.http.delete('http://localhost:3000/student/'+id)
  }

  updateStudent(id:string,newprofile:any){
    return this.http.patch('http://localhost:3000/student/'+id,newprofile)
  }
  
  getOneStudent(id:any){
    return this.http.get('http://localhost:3000/student/'+id)
  }
}
