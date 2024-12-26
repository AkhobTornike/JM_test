import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { LanguageService } from '../../../Services/language.service';

import * as cars from '../../../../../public/json/cars.json';
import carDetailsInfo from '../../../../../public/json/car-listing.json';
import { BookingComponent } from "./booking/booking.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, BookingComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  modalVisible: boolean = false;
  showDLASSection: boolean = false;
  showCADSection: boolean = false;
  showPaymentSection: boolean = false;
  car: any;
  currentCarInfo = carDetailsInfo["listing-cart-en"][0]

  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    const carId = +this.route.snapshot.paramMap.get('id')!;
    this.car = (cars as any).default.find((car: { id: number; }) => car.id === carId);
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
    this.currentCarInfo = lang === 'en' ? carDetailsInfo['listing-cart-en'][0] : carDetailsInfo['listing-cart-geo'][0];
  }

  openModal() {
    this.modalVisible = true;
  }
}
