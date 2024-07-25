import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
  userForm!: FormGroup; // Added ! to indicate it will be initialized
  registrationError: any;

  constructor(
    private router: Router,
    private userRegistrationService: UserdataService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mnumber: ['', Validators.required],
    });
  }

  addUser() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      const user = {
        firstName: formData.fname,
        lastName: formData.lname,
        emailId: formData.email,
        password: formData.password,
        mobileNo: formData.mnumber
      };

      this.userRegistrationService.adduser(user).subscribe(
        (data: any) => {
          console.log(data);
          // Display a confirmation message
          alert('User registered successfully.');
          // Redirect to login page after registration
          this.router.navigate(['/userlogin']);
        },
        error => {
          console.error('Error registering user:', error);
          // Handle registration error
          this.registrationError = 'An error occurred during registration. Please try again later.';
        }
      );
    } else {
      // Mark all fields as touched to display validation errors
      this.markFormGroupTouched(this.userForm);
    }
  }

  // Function to mark all form controls as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
