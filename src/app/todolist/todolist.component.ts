import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray = [{taskName: 'Brush teeth', isCompleted: false}];
  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

    form.reset();
  }
  onDelete(index: number) {
    

    this.taskArray.splice(index, 1);
  }
  onCheck(index: number) {
    
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    if (this.taskArray[index]) {
      alert("You finished task " + this.taskArray[index].taskName);
      this.onDelete(index);
    }
  }
}
