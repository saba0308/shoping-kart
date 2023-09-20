import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


import { NavigationEnd, Router, Event } from '@angular/router';

import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
  tabs: any[] = [
    {
      title: 'Sign Up',
      route: './sign-up',
    },
    {
      title: 'Sign In',
      route: './log-in',
    },
  ]
  message!: string;
  constructor(public router: Router) {
    // path match
    router.events
      .pipe(filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((res: NavigationEnd) => {
        if (res.url == '/auth/sign-up') {
          this.message = "Sign Up"

        }
        else if (res.url == '/auth/log-in') {
          this.message = "Sign In"

        }
        else {
          this.message = "Password Recovery"

        }

      });
  }

  ngOnInit(): void {
  }

}
