import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

import * as cars from '../../../../public/json/cars.json';
import carListingInfo from '../../../../public/json/car-listing.json';
import { LanguageService } from '../../Services/language.service';

@Component({
  selector: 'app-car-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-listing.component.html',
  styleUrl: './car-listing.component.scss'
})
export class CarListingComponent implements OnInit {
  cars = (cars as any).default;
  currentFilter = carListingInfo['listing-filter-en'][0];
  currentCart = carListingInfo['listing-cart-en'][0]; 
  currentPage = 1;
  itemsPerPage = 4;

  constructor(
    private router: Router,
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)) {
      const savedLang = sessionStorage.getItem('currentLang');
      if(savedLang) {
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

  updateContent(lang: string) {
    this.currentFilter = lang === 'en' ? carListingInfo['listing-filter-en'][0] : carListingInfo['listing-filter-geo'][0];
    this.currentCart = lang === 'en' ? carListingInfo['listing-cart-en'][0] : carListingInfo['listing-cart-geo'][0];
  }

  get pagedCars() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.cars.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get pages() {
    const totalPages = Math.ceil(this.cars.length / this.itemsPerPage);
    const pages = [];

    if (this.currentPage === 1) {
      pages.push(this.currentPage, this.currentPage + 1, this.currentPage + 2);
    } else if (this.currentPage === totalPages) {
      pages.push(this.currentPage - 2, this.currentPage - 1, this.currentPage);
    } else {
      pages.push(this.currentPage - 1, this.currentPage, this.currentPage + 1);
    }

    return pages.filter(page => page > 0 && page <= totalPages);
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    const totalPages = Math.ceil(this.cars.length / this.itemsPerPage);
    if (this.currentPage < totalPages) this.currentPage++;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  goToDetails(carId: number) {
    console.log(carId);
    this.router.navigate(['cars-listing/details', carId]);
  }
}
