import { DrawerComponent } from './../drawer/drawer.component';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-drawer-container',
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.css']
})
export class DrawerContainerComponent implements OnInit {

  lastDrawerRef: ComponentRef<DrawerComponent>[] = [] ;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(DrawerComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    this.lastDrawerRef.push(ref);
    ref.changeDetectorRef.detectChanges();
    this.viewContainerRef.detach();
    }
  }

  addDrawer() { }

  removeLastDrawer() {
    this.viewContainerRef.detach(1);
  }

  reAddDrawer() {
    this.viewContainerRef.insert(this.lastDrawerRef[1].hostView);
  }

}
