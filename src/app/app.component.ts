import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <app-header [cart]='cart'></app-header>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  cart: Cart = { items: []}
  cartSubscription: Subscription | undefined;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSubscription =  this.cartService.cart.subscribe((_cart) => this.cart = _cart);
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
