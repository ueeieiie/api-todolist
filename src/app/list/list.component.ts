import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  _list: any;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getList();
  }

  onListChangeHandler(){
    console.log('working')
    this.getList();
  }

  getList(){

    this.dataService.get()
      .then( data => {
        console.log('data:', data);

        this._list = data;
      })
  }

}