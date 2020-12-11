import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ques3',
  templateUrl: './ques3.component.html',
  styleUrls: ['./ques3.component.css'],
})
export class Ques3Component implements OnInit {
  constructor(private fb: FormBuilder) {}

  userForm: FormGroup;

  ngOnInit(): void {
    this.userForm = this.fb.group({
      number: '',
      phones: this.fb.array([]),
    });
  }

  get phones() {
    return this.userForm.get('phones') as FormArray;
  }

  addNumber(): void {
    this.phones.push(this.fb.control(''));
  }

  submitForm(): void {
    console.log(this.phones.controls);
  }
}
