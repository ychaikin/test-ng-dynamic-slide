import { DrawerComponent } from './../drawer/drawer.component';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ComponentRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawer-container',
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.css']
})
export class DrawerContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  removeLastDrawer(drawer: DrawerComponent) {
    drawer.close();
  }

  addDrawer(drawer: DrawerComponent) {
    drawer.open();
  }

}
