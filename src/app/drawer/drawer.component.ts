import { Component, OnInit, HostBinding, AfterContentChecked, AfterContentInit, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition, sequence } from '@angular/animations';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  // animations: [
  //   trigger('slideInOut', [
  //     state('in', style({ transform: 'translateX(-100%)'})),
  //     transition('void => *', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate(700)
  //     ]),
  //     transition('* => void', [
  //       animate(700, style({ transform: 'translateX(100%)' }))
  //     ])
  //   ])
  // ]
  animations: [
    trigger('visible', [
      // state('hidden', style({ transform: 'translateX(-100%)'})),
      // state('shown', style({ transform: 'translateX(0)'})),
      // transition('hidden => shown', animate('500ms')),
      // transition('shown => hidden', animate('500ms', style({ transform: 'translateX(-100%)'})))
      // transition('shown => hidden', animate('500ms'))
      state('hidden', style({ display: 'block', transform: 'translateX(-400px)' })),
      state('shown', style({ display: 'block', transform: 'translateX(0)' })),
      transition('hidden <=> shown', [ animate('200ms') ])
    // ])

    // state('hidden', style({ width: '0' })),
      // state('shown', style({ width: 'initial' })),
      // transition('hidden => shown', sequence([
      //   animate('500ms', style({ opacity: '1'})),
      //   animate('500ms')
      // ])),
      // transition('shown => hidden', sequence([
      //   animate('500ms', style({ opacity: '0'})),
      //   animate('500ms')
      // ]))
    ])
  ]
})
export class DrawerComponent implements OnInit, AfterContentChecked {

  random: number;

  hostWidth: number;

  @HostBinding('@visible')
  state = 'hidden';

  @HostBinding('style.left')
  hostLeft = '0';

  ngAfterContentChecked(): void {
    console.log('width in ngAfterContentChecked: ', this.hostEl.nativeElement.offsetWidth);

    this.hostWidth = this.hostEl.nativeElement.offsetWidth;
    // this.hostLeft = '-' + this.hostWidth + 'px';
  }

  constructor(private hostEl: ElementRef) {
    console.log('width in constructor: ', hostEl.nativeElement.offsetWidth);
  }

  ngOnInit() {
    this.random = Math.random();
    console.log(this.random);
  }

  open(): void {
    this.state = 'shown';
  }

  close(): void {
    this.state = 'hidden';
  }

  moveRight(): void {
    this.hostLeft = '200px';
  }

}
