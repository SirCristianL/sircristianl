import { Component } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  faMoon = faMoon;
  faSun = faSun;
  faHeart = faHeart;
  faBars = faBars;

  constructor(private wowService: NgwWowService,
    ) {
    this.wowService.init();
  }

  toggleTheme() {
    let theme = document.querySelector('body');
    theme?.classList.toggle("dark-mode")
    let btns = document.querySelectorAll('.btn-theme');
    btns.forEach(item => {
      item.classList.toggle('show');
    });
  }

  toggleMenu() {
    let menu = document.querySelector('.list-nav-1');
    menu?.classList.toggle('show');
  }
}
