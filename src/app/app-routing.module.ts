import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiIntergrationComponent } from './api-intergration/api-intergration.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { HomeComponent } from './home/home.component';
import { ParamRoutingComponent } from './param-routing/param-routing.component';

const routes: Routes = [
  {path:'Assignment-1', component:AssignmentOneComponent},
  {path:'Assignment-2', component:ApiIntergrationComponent},
  {path:'Assignment-3/:id/:name', component:ParamRoutingComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
