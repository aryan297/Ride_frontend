import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from './interface/driver';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  driver:string ="http://localhost:3000/driver"
  ride:string ="http://localhost:3000/ride"
  members:string="http://localhost:3000/getMember"

  constructor(private http:HttpClient ) { 

  }

  postData(data:any):Observable<any>{
    console.log(data);

    return this.http.post(this.driver, data);
  }

  getData():Observable<any>{
    console.log();
    
    return this.http.get(this.driver);
  }

  priorityUpdate(id:any,data:any){

    return this.http.patch(this.driver+"/"+id,data)
  }

 getPriority(){
  return this.http.get(this.ride);

  }

  postRide(data:any){
    return this.http.post(this.ride+'/add_ride',data);
  }

  updateRide(data:any){
    return this.http.patch(this.ride+'/update_ride/'+data._id,data)

  }

  getRide():Observable<any>{
    return this.http.get(this.ride)
  }


}
