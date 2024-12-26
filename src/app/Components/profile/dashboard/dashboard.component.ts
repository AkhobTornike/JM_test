import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import * as cars from '../../../../../public/json/cars.json';
import * as users from '../../../../../public/json/users.json';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  notifications: any[] = [];
  cars = (cars as any).default;
  usersInfo = (users as any).default['userInfos'];
  usersDocs = (users as any).default['userDocs'];

  ngOnInit() {
    const userId = sessionStorage.getItem('currentUser');

    if (userId) {
      this.usersInfo = this.usersInfo.find((user: any) => user.id === parseInt(userId));
      this.usersDocs = this.usersDocs.filter((doc: any) => doc.userId === parseInt(userId));
    }

    console.log(this.usersDocs);

    this.getNotifications();
    console.log(this.notifications);
  }

  getCarInfo(carId: number) {
    return this.cars.find((car: any) => car.id === carId);
  }

  getNotifications() {
    if (!this.usersInfo.firstName) this.notifications.push({ message: 'Please complete your profile (First Name)', type: 'alert' });
    if (!this.usersInfo.lastName) this.notifications.push({ message: 'Please complete your profile (Last Name)', type: 'alert' });
    if (!this.usersInfo.dateOfBirth) this.notifications.push({ message: 'Please complete your profile (Date Of Birth)', type: 'alert' });

    const requiredDocs = ['passport_front', 'passport_back', 'driver_license_front', 'driver_license_back'];
    requiredDocs.forEach((docType) => {
      const doc = this.usersDocs.find((d: any) => d.type === docType);
      if (!doc || !doc.docImage) {
        this.notifications.push({ message: `Please upload your ${docType.replace('_', ' ')} Image`, type: 'warning' });
      }
    });
  }
}
