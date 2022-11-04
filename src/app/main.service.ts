import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  result:string ="http://localhost:3000/member"
  priority:string ="http://localhost:3000/priority"
  members:string="http://localhost:3000/getMember"

  constructor(private http:HttpClient ) { 

  }

  postData(data:any):Observable<any>{
    console.log(data);

    return this.http.post(this.result, data);
  }

  getData():Observable<any>{
    console.log();
    
    return this.http.get(this.result);
  }

  priorityUpdate(id:any,data:any){

    return this.http.patch(this.result+"/"+id,data)
  }

 getPriority(){
  return this.http.get(this.priority);

  }

  getOnlyMembers():Observable<any>{
    return this.http.get(this.members)
  }


}
