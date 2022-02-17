import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  personalInfo!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const mobile = this.fb.group({
      countryCode: [],
      number: []
    })

    this.personalInfo = this.fb.group({
      name: '',
      mobileNumber: mobile,
      alternativeMobileNumber: mobile
    })
  }

}
