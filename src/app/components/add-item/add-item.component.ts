import { Component, OnInit, VERSION, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  @Output() item = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(dataForm: any) {
    this.item.emit(dataForm.value);
    dataForm.reset();
  }

}
