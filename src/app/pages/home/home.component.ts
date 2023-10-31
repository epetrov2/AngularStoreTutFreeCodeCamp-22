import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  cols = 3;
  category: string | undefined;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  productsSubscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  getProducts(): void {
    this.productsSubscription =
      this.storeService.getAllProducts(this.count, this.sort)
        .subscribe((_products) => {
          this.products = _products
        })
  }

  onColumnsCountChange(newColsNumber: number): void {
    this.cols = newColsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onItemsCountChange(newCount: number): void {
    this.count = newCount.toString();
    this.getProducts();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
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
