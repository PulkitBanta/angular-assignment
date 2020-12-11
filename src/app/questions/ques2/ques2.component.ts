import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ques2',
  templateUrl: './ques2.component.html',
  styleUrls: ['./ques2.component.css'],
})
export class Ques2Component implements OnInit {
  constructor() {}

  list = []

  ngOnInit(): void {}

  addPanel(): void {
    this.list.push({
      name: 'component X' + (this.list.length + 1),
    })
  }
}
