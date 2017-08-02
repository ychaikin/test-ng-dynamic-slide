import { Component, OnInit, HostBinding } from '@angular/core';
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
      state('hidden', style({ display: 'none' })),
      state('shown', style({ display: 'block' })),
      transition('hidden => shown', sequence([
        style({ transform: 'translateX(-100%)' }),
        animate('500ms', style({ transform: 'translateX(0)'}))
      ])),
      transition('shown => hidden', sequence([
        animate('500ms', style({ transform: 'translateX(-100%)'}))
      ]))
    ])
  ]
})
export class DrawerComponent implements OnInit {

  random: number;

  @HostBinding('@visible')
  state = 'hidden';

  constructor() { }

  show() {
    this.state = 'shown';
  }

  hide() {
    this.state = 'hidden';
  }

  ngOnInit() {
    this.random = Math.random();
    console.log(this.random);
  }

}
