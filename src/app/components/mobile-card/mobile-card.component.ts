import { Component, Input } from '@angular/core';
import { IMobile } from 'src/app/model/mobile.interface';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss']
})
export class MobileCardComponent {

  @Input() mobileObj!: IMobile;

  imageFailed: boolean = false;

  onImageError(): void {
    this.imageFailed = true;
  }

  getDiscountedPrice(): number {
    return this.mobileObj.price * 0.90;
  }



}

