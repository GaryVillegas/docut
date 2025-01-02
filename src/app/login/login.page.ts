import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  constructor() {}

  ngOnInit() {
    register();
  }

  goNext() {
    const swiperEl = this.swiperRef?.nativeElement;
    swiperEl?.swiper?.slideNext();
  }

  skip() {
    const swiperEl = this.swiperRef?.nativeElement;
    swiperEl?.swiper?.slideTo(3);
  }
}
