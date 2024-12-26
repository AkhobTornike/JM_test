import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements AfterViewInit{
  @Input() sellectedCar: any;
  @Input() modalVisible!: boolean;
  @Output() modalVisibleChange = new EventEmitter<boolean>();

  closeModal() {
    this.modalVisible = false;
    this.modalVisibleChange.emit(this.modalVisible);
  }
  
  ngAfterViewInit() {
    console.log('BookingComponent ngAfterViewInit');
    flatpickr("#pickupDate", {
      enableTime: false,
      dateFormat: "Y-m-d",
    });

    flatpickr("#returnDate", {
      enableTime: false,
      dateFormat: "Y-m-d",
    });
  }
}
