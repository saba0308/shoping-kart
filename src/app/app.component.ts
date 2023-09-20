import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  id!:any;
  ngOnInit(): void{
    this.id = localStorage.getItem('currentuser'); 
  }
}
