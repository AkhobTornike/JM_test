import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../../Services/language.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import footerJson from '../../../../public/json/footer.json';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  currentLang!: string;
  currentNav = footerJson['foter_nav_links_en'];
  currentContent = footerJson['footer-content-en'][0];

  constructor(public languageService: LanguageService, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = sessionStorage.getItem('currentLang');
      if (savedLang) {
        this.languageService.setCurrentLang(savedLang);
        this.updateContent(savedLang);
      } else {
        this.updateContent(this.languageService.getCurrentLang());
      }
    }

    this.languageService.getCurrentLangObservable().subscribe((lang) => {
      this.updateContent(lang);
    });
  }

  private updateContent(lang: string): void {
    this.currentContent = lang === 'en' ? footerJson['footer-content-en'][0] : footerJson['footer-content-geo'][0];
    this.currentNav = lang === 'en' ? footerJson['foter_nav_links_en'] : footerJson['foter_nav_links_geo'];
  }

  copyNumber() {
    const numberToCopy = "999999999"

    navigator.clipboard.writeText(numberToCopy).then(() => {
      console.log('Number copied to clipboard')
    }).catch(err => {
      console.error('Could not copy text: ', err)
    })
  }

  copyMail() {
    const mailToCopy = this.currentContent.mail

    navigator.clipboard.writeText(mailToCopy).then(() => {
      console.log('Mail copied to clipboard')
    }).catch(err => {
      console.error('Could not copy Mail: ', err)
    })
  }

  copyAddres() {
    const addresToCopy = this.currentContent.address

    navigator.clipboard.writeText(addresToCopy).then(() => {
      console.log('Mail copied to clipboard')
    }).catch(err => {
      console.error('Could not copy Mail: ', err)
    })
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}