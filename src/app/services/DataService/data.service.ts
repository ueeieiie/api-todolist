import { cloneDeep } from 'lodash';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  list: {text: string, isCompleted: boolean}[] = [];

  constructor() { }

  /**
   * sends back the list of tasks
   */
  get(){
    return new Promise( (res, rej) => {
      setTimeout( () => {
        res( cloneDeep(this.list) );
      }, 500);
    })
  }

/**
 * adds a new task to the list
 * @param task 
 */
  add(task){
    return new Promise( (res, rej) => {
      setTimeout( () => {
        this.list.push(task);
        res();
      }, 500)
    })
  }

  /**
   * removes the indexed task from the list
   * @param index 
   */
  remove(index){
    return new Promise( (res, rej) => {
      setTimeout( () => {
        this.list.splice(index, 1);
        res();
      }, 500)
    })
  }

  /**
   * edits the indexed task and assign to it a new text
   * @param index 
   * @param editedTask 
   */
  edit(index, editedTask){
    return new Promise( (res, rej) => {
      setTimeout( () => {
        this.list[index].text = editedTask;
        res();
      }, 500)
    })
  }

  /**
   * toggles the task's "isComplete" state
   * @param index 
   */
  toggleCompleted(index){
    let { isCompleted } = this.list[index];

    return new Promise( (res, rej) => {
      setTimeout( () => {
        this.list[index].isCompleted = !isCompleted;
        res();
      }, 500)
    })
  }
}
