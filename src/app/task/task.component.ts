import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() index;
  @Input() taskData;

  @Output() onTaskChangeHandler = new EventEmitter();

  editMode:boolean = false;

  constructor(private dataService: DataService) { }

  setEditMode(){
    this.editMode = true;
  }

  saveEditedTask(id, editedTask){
    this.dataService.edit(id, editedTask.value)
      .then( () => {
        this.editMode = false;
        this.onTaskChangeHandler.emit();
      })
  }

  removeTask(id){
    this.dataService.remove(id)
      .then( () => {
        this.onTaskChangeHandler.emit();
      })
  }
  
  setComplete(id){
    this.dataService.setComplete(id)
      .then( ()=> {
        this.onTaskChangeHandler.emit();
      })
  }

}
