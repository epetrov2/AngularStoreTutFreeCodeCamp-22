import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  cols = 3;
  category: string | undefined;
  rowHeight: number = ROWS_HEIGHT[this.cols];

  constructor(private cartService: CartService) { }

  onColumnsCountChange(newColsNumber: number): void {
    this.cols = newColsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(newProduct: Product): void {
    this.cartService.addToCart({
      product: newProduct.image,
      name: newProduct.title,
      price: newProduct.price,
      quantity: 1,
      id: newProduct.id
    })
  }

}
