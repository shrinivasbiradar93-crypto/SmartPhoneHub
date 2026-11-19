import { Component, OnInit } from '@angular/core';
import { IMobile } from 'src/app/model/mobile.interface';
import { mobileProducts } from 'src/app/const/mobileData';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {

  mobileArr: Array<IMobile> = mobileProducts;

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: number, mobile: IMobile): number {
    return mobile.id;
  }

}
