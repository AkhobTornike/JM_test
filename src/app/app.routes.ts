import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CarListingComponent } from './Components/car-listing/car-listing.component';
import { DetailsComponent } from './Components/car-listing/details/details.component';
import { BookingComponent } from './Components/car-listing/details/booking/booking.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'cars-listing', component: CarListingComponent, title: 'Cars'},
    {path: 'cars-listing/details/:id', component: DetailsComponent, title: 'Car Details'},
    {path: 'cars-listing/details/booking', component: BookingComponent, title: 'Car Details'},
    {path: 'profile', component: ProfileComponent, title: 'Profile'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'register', component: RegisterComponent, title: 'Register'}
];
