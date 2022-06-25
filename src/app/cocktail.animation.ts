import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


export const listAnimation = trigger('listAnimation', [
    transition('* <=> *', [
      query(':enter',
        [style({ opacity: 0 }), stagger('250ms', animate('1000ms ease-out', style({ opacity: 1 })))],
        { optional: true }
      ),
      query(':leave',
        animate('1000ms', style({ opacity: 0 })),
        { optional: true}
      )
    ])
  ]);


  export const fadeAnimation = trigger('fadeAnimation', [
    transition(':enter', [
      style({ opacity: 0 }), animate('1000ms', style({ opacity: 1 }))]
    ),
    transition(':leave',
      [style({ opacity: 1 }), animate('600ms', style({ opacity: 0 }))]
    )
  ]);