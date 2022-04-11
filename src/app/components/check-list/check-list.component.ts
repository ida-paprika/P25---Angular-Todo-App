import { Component, VERSION, Input, OnChanges, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { CheckItem } from 'src/app/utils/check-item.model';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit, OnChanges {
  name = 'Angular ' + VERSION.major;

  @Input() newItem!: any;

  public checkList: CheckItem[] = [];
  private listCopy: CheckItem[] = [];

  constructor(private Location: Location) {
    this.getData();
    console.table(this.checkList);
    if (this.checkList.length != 0) {
      this.filterData(this.checkList);
      console.log('test');
      console.table(this.checkList);
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.checkList.push(new CheckItem(this.newItem.addItem));
    this.listCopy = this.checkList;

    this.removeData('CheckList');
    this.storeData('CheckList');
  }

  checkedItem(item: CheckItem) {
    if (item.checked == true) {
      item.checked = false;
    } else {
      item.checked = true;
    }


    this.listCopy = this.checkList;

    this.removeData('CheckList');
    this.storeData('CheckList');
  }

  storeData(key: string) {
    localStorage.setItem(key, JSON.stringify(this.checkList));
  }

  getData() {
    let data: string | null = localStorage.getItem('CheckList');

    if (data) {
      console.log('data');
      this.checkList = JSON.parse(data) as CheckItem[];
      console.table(this.checkList);
    }
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  filterData(array: CheckItem[]) {
    switch (this.Location.path()) {
      case '/active':
        this.checkList = array.filter(item => item.checked == false);
        break;
      case '/completed':
        this.checkList = array.filter(item => item.checked == true);
        break;
      default:
        this.checkList = array;
        break;
    }

  }

}
