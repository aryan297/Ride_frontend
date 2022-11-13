import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from "@angular/forms";
import { Driver } from '../interface/driver';
import { MainService } from '../main.service';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.scss']
})
export class CreateRideComponent implements OnInit {
  // @ts-ignore
  Form:FormGroup
  newArray:Driver[]=[]
  
  constructor(private fb:FormBuilder , private mainService:MainService ,private _snackBar: MatSnackBar) { }

  ngOnInit():void {
    this.Form= this.fb.group({
      driverId:[' '],
      driverName:[' '],
      riderName:[' '],
      riderPhone:[' '],
      pickUPAddress:[' '],
      dropAddress:[' '],
      rideType:[''],
      rideState:[''],
      paymentType:[' '],
      amount:[''],
      scheduledTime:['']
    })

    this.mainService.getData().subscribe(res=>{
      this.newArray=res
      console.log(this.newArray);
      
    })
  }

  save(){
    console.log(this.Form.value);
    for(let i=0;i<this.newArray.length;i++){
      if(this.newArray[i]._id===this.Form.value.driverId){
        this.Form.value.driverName=this.newArray[i].driverName
      }
    }
  this.Form.value.rideState="created"
    
this.mainService.postRide(this.Form.value).subscribe(res=>{
      console.log(res);
      this._snackBar.open("Added Successfully ", "close");
      this.Form.reset()
      
    })
    console.log(this.Form.value);
    
  }

}
