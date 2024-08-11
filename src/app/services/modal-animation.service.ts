import { Injectable } from '@angular/core';
import { AnimationController } from '@ionic/angular/standalone';
@Injectable({
  providedIn: 'root',
})
export class ModalAnimationService {
  constructor() {}

  enterAnimation = (
    baseEl: HTMLElement,
    animationCtrl: AnimationController
  ) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .fromTo('transform', 'translateX(100%)', 'translateX(0)')
      .fromTo('opacity', '0', '1');

    return animationCtrl
      .create()
      .addElement(baseEl)
      .easing('cubic-bezier(0.36,0.66,0.04,1)')
      .duration(400)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (
    baseEl: HTMLElement,
    animationCtrl: AnimationController
  ) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', 'var(--backdrop-opacity)', '0');

    const wrapperAnimation = animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .fromTo('transform', 'translateX(0)', 'translateX(100%)')
      .fromTo('opacity', '1', '0');

    return animationCtrl
      .create()
      .addElement(baseEl)
      .easing('cubic-bezier(0.36,0.66,0.04,1)')
      .duration(400)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };
}
