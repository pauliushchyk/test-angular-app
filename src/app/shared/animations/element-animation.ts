import {
  trigger,
  animate,
  style,
  query,
  transition,
  stagger,
} from '@angular/animations';

export const elementAnimation = trigger('elementAnimation', [
  transition('* => *', [
    query(
      '.block',
      [
        style({ opacity: 0, transform: 'translateY(-15px)' }),
        stagger(200, [
          animate(
            '0.3s ease-in-out',
            style({ opacity: 1, transform: 'translateY(0)' }),
          ),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);
