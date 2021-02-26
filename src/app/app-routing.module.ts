import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiIntergrationComponent } from './api-intergration/api-intergration.component';
import { AppComponent } from './app.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParamRoutingComponent } from './param-routing/param-routing.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'Home', component: HomeComponent ,children:[
    {path:'', component:AssignmentOneComponent},
    {path:'Assignment-1', component:AssignmentOneComponent},
    {path:'Assignment-2', component:ApiIntergrationComponent},
    {path:'Assignment-3/:id/:name', component:ParamRoutingComponent},
  ]},
  { path: '404', component:PagenotfoundComponent },
  { path: '**', redirectTo: '404' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
