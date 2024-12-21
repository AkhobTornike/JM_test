import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CarListingComponent } from './Components/car-listing/car-listing.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'cars-listing', component: CarListingComponent, title: 'Cars'},
    {path: 'profile', component: ProfileComponent, title: 'Profile'},
    {path: 'cars/details/:id', component: ProfileComponent, title: 'Car Details'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'register', component: RegisterComponent, title: 'Register'}
];
