import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appShine]',
})
export class ShineDirective {
  @Input() shineDuration = '2s';

  @HostBinding('style.animation') get animation() {
    return `shine ${this.shineDuration} linear infinite`;
  }

  @HostBinding('style.mask-image')
  @HostBinding('style.-webkit-mask-image')
  maskImage = 'linear-gradient(-75deg, rgba(0, 0, 0, 0.6) 30%, #000 50%, rgba(0, 0, 0, 0.6) 70%)';

  @HostBinding('style.mask-size')
  @HostBinding('style.-webkit-mask-size')
  maskSize = '200%';

  @HostBinding('style.display')
  display = 'inline-block';
}
