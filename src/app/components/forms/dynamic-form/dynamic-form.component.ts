import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  dynamicForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dynamicForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    })
  }

  // phoneForms() {
  //   return this.dynamicForm.get('phones') as FormArray
  // }

  addPhoneField() {
    const newPhoneField = {
      countryCode: [],
      number: []
    }
  }


}
