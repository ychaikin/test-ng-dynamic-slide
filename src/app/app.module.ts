import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrawerContainerComponent } from './drawer-container/drawer-container.component';
import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawerContainerComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DrawerComponent]
})
export class AppModule { }
