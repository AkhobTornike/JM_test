import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.scss'
})
export class AccountSettingsComponent implements OnInit {
  @Input() user: any;
  isPasswordVisible: boolean = false;
  isPasswordRepeatVisible: boolean = false;
  isPasswordChangeVissible: boolean = false;
  accountForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.accountForm = this.fb.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, Validators.required],
      dob: [this.user.dateOfBirth, Validators.required],
      phone: [this.user.phone, Validators.required],
      humanId: [this.user.humanId, Validators.required],
      driverLicense: [this.user.driverLicense, Validators.required],
      oldPassword: [''],
      newPassword: ['']
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.accountForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  markAsTouched(controlName: string) {
    const control = this.accountForm.get(controlName);
    if (control) {
      control.markAsTouched();
    }
  }

  showPassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  showRepeatPassword() {
    this.isPasswordRepeatVisible = !this.isPasswordRepeatVisible;
  }

  showPasswordChange() {
    this.isPasswordChangeVissible = !this.isPasswordChangeVissible;
  }
}
