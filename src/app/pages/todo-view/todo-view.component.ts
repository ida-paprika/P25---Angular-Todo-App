import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  public item!: any;

  constructor() { }

  ngOnInit(): void {
  }

  public addItem(event: any) {
    this.item = event;
  }

}
