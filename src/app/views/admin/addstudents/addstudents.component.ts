import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {

  msgErr=''
  constructor(private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    console.log(data)
    this.ds.addstudent(data).subscribe(response=>{
      console.log(response)
      this.route.navigate(['/admin/allstudents'])
    },(err:HttpErrorResponse)=>{
      this.msgErr = 'status :' + err.status
      console.log(err.error)
      console.log(err.status)
    }
      
    )
  }


}
