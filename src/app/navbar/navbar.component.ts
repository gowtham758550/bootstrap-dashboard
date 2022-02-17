import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  charts = [
    {
      name: "Weekly Analysis",
      maticon: "bar_chart",
      imgsrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.googleapis.com%2Ffplsblog%2F1%2F2020%2F04%2FArea-Chart.png&f=1&nofb=1",
    },
    {
      name :"Monthly Analysis",
      maticon: "pie_chart",
      imgsrc :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.googleapis.com%2Ffplsblog%2F1%2F2020%2F04%2FArea-Chart.png&f=1&nofb=1"
    },
    {
      name: "Employee Data",
      maticon: "table_chart",
      table: [
        {name: "ram"}
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
