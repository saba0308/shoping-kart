import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { TmDialogService } from '@tmlib/ui-sdk/dialog';
import { AuthService } from '../services/auth.service';
import { userData } from '../userData';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  signInForm!: FormGroup;
  submitted = false;
  userdata:userData;

  id:any;
  constructor(private formBuilder: FormBuilder, private router: Router, private _http: HttpClient,private apiService:AuthService) {
    
   }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]
      }
    )

  }
  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  signIn() {
    this.submitted = true;

    if (this.signInForm.invalid) {
      return;
    }

    else {
      this.router.navigate(['user']);
    }
    this._http.get<userData[]>("http://localhost:3000/usersData")
      .subscribe(res => {
        const user = res.find((a: userData) => {
          return a.email === this.signInForm.value.email && a.password === this.signInForm.value.password
        });

        
        if (user) {
          alert('you are successfully login');
          const uservalue = user;
          user.status='online';
       
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('currentuser', JSON.stringify(uservalue));
         
          this.signInForm.reset();
          console.log(user.id);
          console.log(user.status);
          this.router.navigate(['/user/products']);
        }
        else if (this.f.email.value == 'admin123@gmail.com' && this.f.password.value == 'admin@123') {
          const uservalue = this.signInForm.value.email;
          localStorage.setItem('isAdminLoggedIn', "true");
          localStorage.setItem('adminValue', uservalue);
          this.signInForm.reset();
          this.router.navigate(['/admin/dashboard'])
        } else {
          alert('User Not Found');
          this.router.navigate(['auth/log-in']);
        }

      }, err => {
        alert('Something was wrong');
      })


  }

  get f(): { [key: string]: AbstractControl } {
    return this.signInForm.controls;
  }



}
