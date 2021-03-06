import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { StudentDataService } from './../app/appService/student-data.service';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentTableComponent } from './student-table/student-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router'
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { ApiIntergrationComponent } from './api-intergration/api-intergration.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LibraryModule } from './library/library.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
// import { Observable } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentTableComponent,
    HomeComponent,
    AssignmentOneComponent,
    ApiIntergrationComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    MatTabsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    MatPaginatorModule,
    LibraryModule,
  ],
  providers: [StudentDataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
