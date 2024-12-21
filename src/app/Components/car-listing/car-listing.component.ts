import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-car-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-listing.component.html',
  styleUrl: './car-listing.component.scss'
})
export class CarListingComponent {
  cars = [
    { name: 'Mercedes-Benz E 63', passengers: 4, transmission: 'Auto', year: 2011, price: 750, image: 'Images/Cars/car1.jpg' },
    { name: 'BMW M5', passengers: 4, transmission: 'Auto', year: 2012, price: 700, image: 'Images/Cars/car2.jpg' },
    { name: 'Audi RS 7', passengers: 4, transmission: 'Auto', year: 2013, price: 650, image: 'Images/Cars/car3.jpg' },
    { name: 'Porsche Panamera', passengers: 4, transmission: 'Auto', year: 2014, price: 600, image: 'Images/Cars/car4.jpg' },
    { name: 'Tesla Model S', passengers: 4, transmission: 'Auto', year: 2015, price: 550, image: 'Images/Cars/car5.jpg' },
    { name: 'Chevrolet Camaro', passengers: 4, transmission: 'Auto', year: 2016, price: 500, image: 'Images/Cars/car6.jpg' },
    { name: 'Ford Mustang', passengers: 4, transmission: 'Auto', year: 2017, price: 450, image: 'Images/Cars/car7.jpg' },
    { name: 'Dodge Challenger', passengers: 4, transmission: 'Auto', year: 2018, price: 400, image: 'Images/Cars/car8.jpg' },
    { name: 'Nissan GT-R', passengers: 4, transmission: 'Auto', year: 2018, price: 350, image: 'Images/Cars/car9.jpg' },
    { name: 'Toyota Supra', passengers: 4, transmission: 'Auto', year: 2018, price: 300, image: 'Images/Cars/car10.jpg' },
    { name: 'Mercedes-Benz E 63', passengers: 4, transmission: 'Auto', year: 2011, price: 750, image: 'Images/Cars/car1.jpg' },
    { name: 'BMW M5', passengers: 4, transmission: 'Auto', year: 2012, price: 700, image: 'Images/Cars/car2.jpg' },
    { name: 'Audi RS 7', passengers: 4, transmission: 'Auto', year: 2013, price: 650, image: 'Images/Cars/car3.jpg' },
    { name: 'Porsche Panamera', passengers: 4, transmission: 'Auto', year: 2014, price: 600, image: 'Images/Cars/car4.jpg' },
    { name: 'Tesla Model S', passengers: 4, transmission: 'Auto', year: 2015, price: 550, image: 'Images/Cars/car5.jpg' },
    { name: 'Chevrolet Camaro', passengers: 4, transmission: 'Auto', year: 2016, price: 500, image: 'Images/Cars/car6.jpg' },
    { name: 'Ford Mustang', passengers: 4, transmission: 'Auto', year: 2017, price: 450, image: 'Images/Cars/car7.jpg' },
    { name: 'Dodge Challenger', passengers: 4, transmission: 'Auto', year: 2018, price: 400, image: 'Images/Cars/car8.jpg' },
    { name: 'Nissan GT-R', passengers: 4, transmission: 'Auto', year: 2018, price: 350, image: 'Images/Cars/car9.jpg' },
    { name: 'Toyota Supra', passengers: 4, transmission: 'Auto', year: 2018, price: 300, image: 'Images/Cars/car10.jpg' },
    { name: 'Porsche Panamera', passengers: 4, transmission: 'Auto', year: 2014, price: 600, image: 'Images/Cars/car4.jpg' },
    { name: 'Tesla Model S', passengers: 4, transmission: 'Auto', year: 2015, price: 550, image: 'Images/Cars/car5.jpg' },
    { name: 'Chevrolet Camaro', passengers: 4, transmission: 'Auto', year: 2016, price: 500, image: 'Images/Cars/car6.jpg' },
    { name: 'Ford Mustang', passengers: 4, transmission: 'Auto', year: 2017, price: 450, image: 'Images/Cars/car7.jpg' },
    { name: 'Dodge Challenger', passengers: 4, transmission: 'Auto', year: 2018, price: 400, image: 'Images/Cars/car8.jpg' },
    { name: 'Nissan GT-R', passengers: 4, transmission: 'Auto', year: 2018, price: 350, image: 'Images/Cars/car9.jpg' },
    { name: 'Toyota Supra', passengers: 4, transmission: 'Auto', year: 2018, price: 300, image: 'Images/Cars/car10.jpg' },
    { name: 'Mercedes-Benz E 63', passengers: 4, transmission: 'Auto', year: 2011, price: 750, image: 'Images/Cars/car1.jpg' },
    { name: 'BMW M5', passengers: 4, transmission: 'Auto', year: 2012, price: 700, image: 'Images/Cars/car2.jpg' },
    { name: 'Audi RS 7', passengers: 4, transmission: 'Auto', year: 2013, price: 650, image: 'Images/Cars/car3.jpg' },
    { name: 'Porsche Panamera', passengers: 4, transmission: 'Auto', year: 2014, price: 600, image: 'Images/Cars/car4.jpg' },
    { name: 'Tesla Model S', passengers: 4, transmission: 'Auto', year: 2015, price: 550, image: 'Images/Cars/car5.jpg' },
    { name: 'Chevrolet Camaro', passengers: 4, transmission: 'Auto', year: 2016, price: 500, image: 'Images/Cars/car6.jpg' },
    { name: 'Ford Mustang', passengers: 4, transmission: 'Auto', year: 2017, price: 450, image: 'Images/Cars/car7.jpg' },
    { name: 'Dodge Challenger', passengers: 4, transmission: 'Auto', year: 2018, price: 400, image: 'Images/Cars/car8.jpg' },
    { name: 'Nissan GT-R', passengers: 4, transmission: 'Auto', year: 2018, price: 350, image: 'Images/Cars/car9.jpg' },
    { name: 'Toyota Supra', passengers: 4, transmission: 'Auto', year: 2018, price: 300, image: 'Images/Cars/car10.jpg' },
  
  ];

  currentPage = 1;
  itemsPerPage = 4;

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
}
