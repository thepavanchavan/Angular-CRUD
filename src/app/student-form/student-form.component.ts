import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../appService/student-data.service';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  studentInfo: any = [
    { id: 1, name: 'John', city: 'Pune', subject: 'Math', gender: 'Male' },
    { id: 2, name: 'Julie', city: 'Florida', subject: 'Chemistry', gender: 'Female' },
    { id: 3, name: 'Vivian', city: 'Mumbai', subject: 'Math', gender: 'Male' },
  ];
  private _value: any;

  constructor(public service: StudentDataService) {}

  ngOnInit() {
    //this.studentInfo = this.service.this.studentInfo;
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

  onSubmit(data: {name: any; city: any; subject: any; gender: any }) {
     var id2 = Math.round(Math.random()*100000);
    this.studentInfo.push({
      id:id2,
      name: data.name,
      city: data.city,
      subject: data.subject,
      gender: data.gender,
    });
    console.log(this.studentInfo);
    this.service.form.reset();
  }

  onDelete(data: { id: any; }){
    var updated_array = this.studentInfo.filter((element: { id: any; })=> {
    return element.id != data.id;
    });
    this.studentInfo = updated_array;
  }

  onEdit(data: any){
    console.log(data)
  }

  task: Task = {
    name: 'Select All',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Physics', completed: false, color: 'primary' },
      { name: 'Chemistry', completed: false, color: 'accent' },
      { name: 'Math', completed: false, color: 'warn' },
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t: { completed: any; }) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t: { completed: any; }) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t: { completed: any; }) => (t.completed = completed));
  }
}
