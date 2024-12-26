import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as cars from '../../../../../public/json/cars.json';
@Component({
  selector: 'app-my-reservations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-reservations.component.html',
  styleUrl: './my-reservations.component.scss'
})
export class MyReservationsComponent {
  @Input() reservations!: any[];
  cars = (cars as any).default;

  getCarInfo (carId: number) {
    return this.cars.find((car: any) => car.id === carId);
  }
}
