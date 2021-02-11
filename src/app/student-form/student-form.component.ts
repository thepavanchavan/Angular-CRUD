import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../appService/student-data.service';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  isEdit = false;
  isSave = false;
  editId:any;
  editName:any;
  editCity:any;
  editGender:any;
  studentInfo: any; 

  constructor(public service: StudentDataService) {}

  ngOnInit() {
    this.studentInfo = this.service.information;
  }
  studentCity = [
    { id: 1, value: 'Pune' },
    { id: 2, value: 'Delhi' },
    { id: 3, value: 'Mumbai' },
    { id: 4, value: 'Hydrabad' },
  ]; 

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit(data: {name: string; city: string; gender: string }) {
    if(this.isEdit){
     // console.log(this.editId);
      var objIndex = this.studentInfo.findIndex(((obj: { id: any; }) => obj.id == this.editId));
      //console.log(objIndex);
      this.studentInfo[objIndex].name = this.editName;
      this.studentInfo[objIndex].city = this.editCity;
      this.studentInfo[objIndex].gender = this.editGender;
      this.onClear();
      this.isEdit = false;
    }
    else{
     var id2 = Math.round(Math.random()*100000);
    this.studentInfo.push({
      id:id2,
      name: data.name,
      city: data.city,
      gender: data.gender,
    });
    console.log(this.studentInfo);
    this.service.form.reset();
  }
  }

  onDelete(data: { id: any; }){
    var updated_array = this.studentInfo.filter((element: { id: any; })=> {
    return element.id != data.id;
    });
    this.studentInfo = updated_array;
    this.isEdit=false;
  }

  onEdit(data: any){
    this.isEdit = true;
    this.editId = data.id;
   console.log(data)
   this.service.form.setValue({
    $key: null,
    name: data.name,
    city: data.city,
    gender: data.gender,
   })
  }
  update(updatedValue: any){
    this.editName = updatedValue.name;
    this.editCity = updatedValue.city;
    this.editGender = updatedValue.gender;
  }
}
