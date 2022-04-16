import { Component, OnInit } from '@angular/core';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { DataService } from '../services/data.service';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';
import * as Aos from 'aos';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faCertificate = faCertificate;
  faPaintBrush = faPaintBrush;
  faHeart = faHeart;
  faLaptopCode = faLaptopCode;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  itemsSkill = [
    {
      img: '../../assets/html_logo.png'
    },
    {
      img: '../../assets/css_logo.png'
    },
    {
      img: '../../assets/js_logo.png'
    },
    {
      img: '../../assets/angular_logo.png'
    },
    {
      img: '../../assets/sass_logo.png'
    },
    {
      img: '../../assets/ts_logo.png'
    },
  ]

  config: SwiperOptions = {
    spaceBetween: 24,
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
      1400: { slidesPerView: 6 }
    },
    navigation: true,
    pagination: { clickable: true },
  };
  constructor(public ds: DataService) { }

  ngOnInit(): void {
    Aos.init();
  }

}
