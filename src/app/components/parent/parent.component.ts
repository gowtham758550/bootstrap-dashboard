import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child [message]="message"></app-child>
  `,
  // templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message:string = 'I am from parent component'

  constructor() { }

  ngOnInit(): void {
  }

}
