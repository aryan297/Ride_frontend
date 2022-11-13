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
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.scss']
})
export class CreateDriverComponent implements OnInit {
  // @ts-ignore
   Form:FormGroup;
  newArray:Driver[]=[]
  constructor( private fb: FormBuilder, private mainService:MainService,private _snackBar: MatSnackBar) {

   }

  ngOnInit(): void {
    this.Form= this.fb.group({
      driverName:[''],
      driverPhone:['']
    })
  }

  save(){
    console.log(this.Form.value);
    this.mainService.postData(this.Form.value).subscribe(res=>{
      console.log(res);
      this._snackBar.open("Added Successfully ", "close");
      this.Form.reset()
    })
  }

}
