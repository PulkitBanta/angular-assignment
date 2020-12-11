import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  constructor() {}

  @Input() name: string;

  inputList: number[] = [];

  ngOnInit(): void {}

  addInput(): void {
    this.inputList.push(this.inputList.length + 1);
  }
}
