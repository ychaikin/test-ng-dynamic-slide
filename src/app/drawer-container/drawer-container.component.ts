import { DrawerComponent } from './../drawer/drawer.component';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ComponentRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawer-container',
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.css']
})
export class DrawerContainerComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef;

  currentDrawerIndex = -1;
  maxDrawerIndex = 20;
  drawers: ComponentRef<DrawerComponent>[] = [] ;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


  private nextDrawerIndex(): number {
    this.currentDrawerIndex++;
    if (this.currentDrawerIndex > this.maxDrawerIndex) {
      this.currentDrawerIndex = 0;
    }

    return this.currentDrawerIndex;
  }

  ngOnInit() {
    // for (let i = 0; i < this.maxDrawerIndex + 1; i++) {
    //   const factory = this.componentFactoryResolver.resolveComponentFactory(DrawerComponent);
    //   const ref = this.container.createComponent(factory);
    //   this.drawers.push(ref);
    //   ref.changeDetectorRef.detectChanges();
    //   this.container.detach();
    // }
  }

  removeLastDrawer() {
    // this.drawers[1].instance.hide();
    // setTimeout(() => {
    //   this.container.detach(1);
    // }, 600);
    // // this.currentDrawerIndex--;
  }

  addDrawer(drawer: DrawerComponent) {

    drawer.open();

    // if (this.currentDrawerIndex === this.maxDrawerIndex) {
    //   return;
    // }

    // const factory = this.componentFactoryResolver.resolveComponentFactory(DrawerComponent);
    // const ref = this.container.createComponent(factory);
    // this.drawers.push(ref);
    // ref.changeDetectorRef.detectChanges();
    // ref.instance.show();
    // this.currentDrawerIndex++;

    // const index = this.nextDrawerIndex();
    // this.container.insert(this.drawers[index].hostView);
    // this.drawers[index].instance.show();
  }

}
