import { animate, AnimationMetadata, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const showAnimation = (duration: number = 1000): AnimationTriggerMetadata => {
  const definitions: AnimationMetadata[] = [
    transition(':enter', [style({ opacity: 0 }), animate(`${duration}ms ease-out`, style({ opacity: 1 }))]),
  ];

  return trigger('show', definitions);
};

export const entranceAnimation = (duration: number = 500): AnimationTriggerMetadata => {
  const definitions: AnimationMetadata[] = [
    transition(':enter', [
      style({
        'box-shadow': '0 0 0.1rem 0.1rem var(--bs-info)',
        filter: 'blur(10px)',
        transform: 'scale(0.8)',
        opacity: 0,
      }),
      animate(
        `${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        style({
          'box-shadow': '0 0 0.3rem 0.3rem var(--bs-info)',
          filter: 'blur(0)',
          transform: 'scale(1)',
          opacity: 1,
        }),
      ),
    ]),
  ];

  return trigger('entrance', definitions);
};

export const showAndSlide = (duration: number = 500): AnimationTriggerMetadata =>
  trigger('show', [
    state(
      'hidden',
      style({
        opacity: 0,
        transform: 'translateX(-20px)',
        pointerEvents: 'none',
      }),
    ),
    state(
      'visible',
      style({
        opacity: 1,
        transform: 'translateX(0)',
        pointerEvents: 'auto',
      }),
    ),
    transition('hidden => visible', animate(`${duration}ms ease-out`)),
    transition('visible => hidden', animate(`${duration}ms ease-in`)),
  ]);
