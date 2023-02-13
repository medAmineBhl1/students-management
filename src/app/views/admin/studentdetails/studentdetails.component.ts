import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent  implements OnInit{
  id=''
  dataObject:any
  messageErr = ''
  constructor(private route:ActivatedRoute , private ds : DataService){
    this.route.params.subscribe(params=>this.id = params['id'])

    this.ds.getOneStudent(this.id).subscribe(
      response=>this.dataObject = response,
      (err:HttpErrorResponse)=>{
        this.messageErr= 'we dont found this message in our data base'

  })
  }
  
  ngOnInit(): void {
    
  }

}
