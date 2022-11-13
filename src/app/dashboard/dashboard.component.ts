
import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import { MainService } from '../main.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Ride } from '../interface/ride';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit  {
  displayedColumns: string[] = ['Driver' ,'Rider' ,'PickUp' ,'DropOff','Ride State','Payment'];
      // @ts-ignore
  dataSource:MatTableDataSource<Ride[]>=[];
  // @ts-ignore
  dataSourceWithPageSize:MatTableDataSource<Ride[]>=[];
    // @ts-ignore
  @ViewChild('paginator') paginator: MatPaginator;
   // @ts-ignore
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;

  constructor(private mainService:MainService,private _snackBar: MatSnackBar){
    this.mainService.getRide().subscribe(res=>{
      this.dataSource= new MatTableDataSource<Ride[]>(res)
      this.dataSourceWithPageSize=new MatTableDataSource<Ride[]>(res)
    })

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }

  someMethod(state:any, id:any){
    console.log(state);
    console.log(id);
    const obj={
      _id:id,
      rideState:state
    }

    this.mainService.updateRide(obj).subscribe(res=>{
      this._snackBar.open("changed Successfully ", "close");
      
    })
  }
}


