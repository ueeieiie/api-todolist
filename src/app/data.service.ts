import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  _list: {line: string, isCompleted: boolean}[] = [];
  list: {line: string, isCompleted: boolean}[] = [];

  constructor() { }

  get(){
    console.log('DataService getting all list...');
    
    this.list = JSON.parse(JSON.stringify(this._list));

    return new Promise( (res, rej) => {
      setTimeout( () => {
        console.log('new list is:', this.list)
        res(this.list);
      }, 500);
    })
  }

  add(task){
    // console.log('DataService added:', task);

    return new Promise( (res, rej) => {
      setTimeout( () => {
        this._list.push(task);
        res();
      }, 500)
    })
  }

  remove(id){
    // console.log('DataService removed:', this._list[id]);

    return new Promise( (res, rej) => {
      setTimeout( () => {
        this._list.splice(id, 1);
        res();
      }, 500)
    })

  }

  edit(id, editedTask){
    // console.log('DataService this task:', this._list[id].line, 'was changed to ', editedTask);

    return new Promise( (res, rej) => {
      setTimeout( () => {
        this._list[id].line = editedTask;
        res();
      }, 500)
    })
  }

  setComplete(id){
    let { isCompleted } = this._list[id];

    return new Promise( (res, rej) => {
      setTimeout( () => {
        this._list[id].isCompleted = !isCompleted;
        res();
      }, 500)
    })
  }

}
