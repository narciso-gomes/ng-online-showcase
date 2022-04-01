import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { APIResponse } from 'src/shared/interfaces/api-response.interface';
import { Product } from 'src/shared/interfaces/product.interface';
import { ProductsService } from 'src/shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * List of products for template
   */
  public products$ = new BehaviorSubject<Product[]>([]);

  /**
   * Constructor
   *
   * @param products
   */
  constructor(private products: ProductsService) {}

  /**
   * Initial component
   */
  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * Detect when scroll bottom finish
   */
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.bottomReached()) {
    }
  }

  /**
   * Verify if scroll is in bottom
   * @returns
   */
  private bottomReached(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  /**
   * Get all products
   */
  private getProducts() {
    this.products
      .index()
      .pipe(take(1))
      .subscribe((response: APIResponse) => {
        this.products$.next(response.meta.results.data);
      });
  }
}
