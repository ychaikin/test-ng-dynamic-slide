import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  random: number;

  constructor() { }

  ngOnInit() {
    this.random = Math.random();
    console.log(this.random);
  }

}
