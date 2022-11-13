import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { CreateRideComponent } from './create-ride/create-ride.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'ride',component:CreateRideComponent},
  {path:'driver',component:CreateDriverComponent},
  {path:'',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
