import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit {

  constructor() { }

  @Output() changeEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  notify(val: string): void {
    console.log(val)
    this.changeEvent.emit(val);
  }

}
