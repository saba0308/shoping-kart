import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmDialogService } from '@tmlib/ui-sdk/dialog';
import { TmDialogRef } from '@tmlib/ui-sdk/dialog';
@Component({
  selector: 'app-dialog-auth',
  templateUrl: './dialog-auth.component.html',
  styleUrls: ['./dialog-auth.component.scss']
})
export class DialogAuthComponent implements OnInit {


  constructor(protected ref: TmDialogRef<DialogAuthComponent>,private router:Router) { }

  ngOnInit(): void {
  }
  dismiss() {
    this.ref.close();
  }
  logIn(){
    this.router.navigate(['/auth/log-in']);
    this.ref.close();
    
   }
}
