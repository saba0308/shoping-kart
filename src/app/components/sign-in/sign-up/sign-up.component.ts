import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { TmToastrService,TmToastrConfig } from '@tmlib/ui-sdk/toastr';
import { TmGlobalLogicalPosition,TmGlobalPhysicalPosition,TmGlobalPosition, } from '@tmlib/ui-sdk';
import { TmComponentStatus } from '@tmlib/ui-sdk/helpers';
import { AuthService } from '../services/auth.service';
import { TmDialogService } from '@tmlib/ui-sdk/dialog';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router,private apiService:AuthService) { }
  private index: number = 0;
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      { userName:['',Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber:['',Validators.required],
        password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(40)]],
        agree:[false,Validators.requiredTrue]
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
  // user register
  signIn() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.apiService.create(this.signUpForm.value).subscribe((res:any) => {
      this.router.navigate(['/auth/log-in']);
    }) 
    
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.signUpForm.controls;
  }
  
  
}
