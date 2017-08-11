import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {

  @Output() onAddNewTaskHandler = new EventEmitter();

  constructor(private dataService: DataService) { }

  addNewTask(task){
    this.dataService.add( {line: task.value, isCompleted: false} )
      .then( () => {
        this.onAddNewTaskHandler.emit()
        task.value = '';
      })

  }

}
