import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navData = [
    {
      name: "Home",
      url: "/",
      children:[]
    },
    { 
      name: "Components",
      url: "",
      children: [
        {name: "Header", url: "header"},
        {name: "Footer", url: "footer"},
        {name: "Forms", url: "forms"}

      ]
    },
    {
      name: "Resources",
      url: "/Resources",
      children:[]
    }
  ]

}
