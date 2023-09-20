import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  // products list
  products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      image:'../../../../../assets/productsImage/phone-1.jpeg'
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      image:'../../../../../assets/productsImage/phone-2.jpeg'
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: 'A small phone with one of the best screens',
      image:'../../../../../assets/productsImage/phone-3.jpeg'
    
    }
  ];
  
  ngOnInit(): void {
  }

}
