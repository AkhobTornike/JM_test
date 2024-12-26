import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import usersInfo from '../../../../public/json/users.json';
import * as allOrders from '../../../../public/json/orders.json';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyReservationsComponent } from "./my-reservations/my-reservations.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, DashboardComponent, MyReservationsComponent, AccountSettingsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  orders = (allOrders as any).default;
  public user: any = null;
  public userReservations: any[] = [];
  currentPage = 'dashboard';


  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const currentUser = sessionStorage.getItem('currentUser');
      this.user = usersInfo['userInfos'].find(user => user.id === Number(currentUser));

      if (this.user) {
        this.userReservations = this.orders.filter((order: any) => order.userId === this.user.id);
      }
    }
  }

  changeTab(tab: string): void {
    this.currentPage = tab;
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('currentUser');
      window.location.href = '/';
    }
  }
}
