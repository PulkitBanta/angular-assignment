import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ques1',
  templateUrl: './ques1.component.html',
  styleUrls: ['./ques1.component.css'],
})
export class Ques1Component implements OnInit {
  constructor() {}

  list: number[] = [2, 3, 10, 15, 26, 35, 50, 36];

  index: number;
  selectedValue: number;

  ngOnInit(): void {}

  showVal(): void {
    this.selectedValue = this.list[this.index];
  }
}
