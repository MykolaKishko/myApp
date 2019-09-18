import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = this.ProductsService.products;
 
  constructor( private ProductsService: ProductsService) { }

  ngOnInit() {}

  addToCart(id) {
    let cartProduct: any  = JSON.parse(localStorage.getItem('cardProducts'));
    this.products.forEach(element => {
      if(element.id == id) {
        if (cartProduct === null) {
          const x = [];
          x.push(element);
          cartProduct = x;
          localStorage.setItem('cardProducts', JSON.stringify(cartProduct));
        }
        else {
          cartProduct.push(element);
          localStorage.setItem('cardProducts', JSON.stringify(cartProduct));
        }
      }
    });
  }
}
