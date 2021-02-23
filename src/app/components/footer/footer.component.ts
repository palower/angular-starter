import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
  // styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logoAlt = "Oltiva Logo";
  logoPath = "/assets/images/Oltiva_LOGO.png";
  copyRight = "© 2017-2018";

  footerData = [
    { 
      name: "Features",
      url: "",
      children: [
        {name:"Cool stuff", url: "/#"},
        {name:"Random feature", url: "/#"},
        {name:"Team feauture", url: "/#"},
        {name:"Stuff for developers", url: "/#"},
        {name:"Another one", url: "/#"}
      ]
    },
    {
      name: "Resources",
      url: "",
      children: [
        {name:"Resource", url: "/#"},
        {name:"Resource name", url: "/#"},
        {name:"Another resource", url: "/#"},
        {name:"Final resource", url: "/#"}
      ]
    },
    {
      name: "About",
      url: "",
      children: [
        {name:"Team", url: "/#"},
        {name:"Locations", url: "/#"},
        {name:"Privacy", url: "/#"},
        {name:"Terms", url: "/#"}
      ]
    }
  ]
}
