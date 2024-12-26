import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { LanguageService } from '../../Services/language.service';
import { AuthService } from '../../Services/auth.service';

import headerInfo from '../../../../public/json/header.json';
import { BookNowComponent } from "../book-now/book-now.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    BookNowComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isToggleShow: boolean = false;
  currentNav = headerInfo['nav-link-en'];
  currentContact = headerInfo['contact-en'][0];
  modalVisible: boolean = false;


  constructor(
    public languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: object,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {
      const savedLang = sessionStorage.getItem('currentLang');

      if (savedLang) {
        this.languageService.setCurrentLang(savedLang);
        this.updateLanguage(savedLang);
      } else {
        this.updateLanguage(this.languageService.getCurrentLang());
      }
    }
  }

  switchLanguage() {
    const newLang = this.languageService.toggleLanguage();
    sessionStorage.setItem('currentLang', newLang);
    this.updateLanguage(newLang);
  }

  updateLanguage(lang: string) {
    this.currentNav =
      lang === 'en'
        ? headerInfo['nav-link-en']
        : headerInfo['nav-link-geo'];
    this.currentContact =
      lang === 'en'
        ? headerInfo['contact-en'][0]
        : headerInfo['contact-geo'][0];
  }

  copyNumber() {
    const numberToCopy = '999999999';

    navigator.clipboard
      .writeText(numberToCopy)
      .then(() => {
        console.log('Number copied to clipboard');
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  }

  navigateToLogin() {
    // const userToken = this.authService.getToken();
    const userToken = sessionStorage.getItem('currentUser');
    if (!userToken) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/profile']);
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
    this.toggleNavLinks();
  }
  
  toggleNavLinks() {
    this.isToggleShow = !this.isToggleShow;
  }

  openModal() {
    this.modalVisible = true;
  }
}
