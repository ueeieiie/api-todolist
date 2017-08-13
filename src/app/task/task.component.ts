import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/DataService/data.service';

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

  /**
   * setting edit mode
   */
  setEditMode(){
    this.editMode = true;
  }

  /**
   * saving the the task's text
   * @param editedTask 
   */
  saveEditedTask(editedTask: HTMLInputElement){
    this.dataService.edit(this.index, editedTask.value)
      .then( () => {
        this.editMode = false;
        this.onTaskChangeHandler.emit();
      })
  }

  /**
   * removing specific task by index
   */
  removeTask(){
    this.dataService.remove(this.index)
      .then( () => {
        this.onTaskChangeHandler.emit();
      })
  }
  
  /**
   * sends a request to the dataService
   * to toggele the "isComplete" state
   * of the indexed task in the list data
   */
  toggleCompleted(){
    this.dataService.toggleCompleted(this.index)
      .then( ()=> {
        this.onTaskChangeHandler.emit();
      })
  }
}
