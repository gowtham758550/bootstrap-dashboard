import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  basicForm!: FormGroup;
  careerList: String[] = ['Full stack developer', 'Database Administrator', 'Blockchain developer']

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.basicForm = this.fb.group({
      email: '',
      message: 'Default message',
      career: ''
    })
    
    // this.basicForm.valueChanges.subscribe(console.log)
  }

}
