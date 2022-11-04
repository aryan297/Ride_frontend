import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'assignment';
  name=''
  memberId=''
  objectNew={}
  data:any=[]
  membersData:any=[]
  priorityData:any=[]
  constructor(private main:MainService){

  }

  ngOnInit(): void {  
    this.getAll()
    this.main.getPriority().subscribe(res=>{
      this.priorityData=res
    })
    this.main.getOnlyMembers().subscribe(res=>{
      this.membersData=res
    })

    console.log(this.data);
  
    
  }

 save(){
console.log(this.name);
const resp= this.getRandomItem(this.priorityData)
console.log(resp);


const obj={
  member_name:this.name,
  priority:resp['_id']
}
this.main.postData(obj).subscribe(res=>{
  console.log(res);
  this.getAll()
})

  }

  priority(event:any){

    console.log(event);
    
    const resp= this.getRandomItem(this.priorityData)
       this.memberId=event
     
        this.objectNew={
          priority:resp['_id']
      }
  
    console.log(this.objectNew);
    

  }

  savePriority(){
    this.main.priorityUpdate(this.memberId,this.objectNew).subscribe(res=>{console.log(res)
    })
     this.objectNew={}
     this.memberId=''
     this.getAll()
  }

  getRandomItem(arr:any) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
  
    // get random item
   
    const item = arr[randomIndex];
  
    return item;
  }

  getAll(){
    this.main.getData().subscribe(res=>{
      this.data=res
    })
  }
}
