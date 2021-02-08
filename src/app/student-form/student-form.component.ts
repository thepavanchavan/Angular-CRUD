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
    { name: 'Pavan', city: 'Balsur', subject: 'Math', gender: 'Male' },
  ];

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

  onSubmit(data: { name: any; city: any; subject: any; gender: any }) {
    var id = Math.round(Math.random()*100000);
    this.studentInfo.push({
      id:id,
      name: data.name,
      city: data.city,
      subject: data.subject,
      gender: data.gender,
    });
    console.log(this.studentInfo);
    this.service.form.reset();
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
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }
}
