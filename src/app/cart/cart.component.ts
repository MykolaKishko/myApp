import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProduct =  JSON.parse(localStorage.getItem('cardProducts'));
  totalPrice = 0;

  constructor() {}

  ngOnInit() {
    this.cartProduct.forEach( e => {
      this.totalPrice += e.price;
    })
  }

  remove(id) {
    this.cartProduct.forEach((element, i) => {
      if(element.id === id) {
        this.cartProduct.splice(i, 1)
        localStorage.setItem('cardProducts', JSON.stringify(this.cartProduct)); 
        this.totalPrice -= element.price;
      }
    });
  }
}