import { Pagination } from './../../shared/interfaces/pagination.interface';
import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
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

  private pagination: any;

  public isLoading = false;

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
      this.pagination.current_page += 1;
      if (
        this.pagination.current_page <= this.pagination.last_page &&
        !this.isLoading
      ) {
        this.getProducts(this.pagination.current_page);
      }
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
  private getProducts(page = 1) {
    this.isLoading = true;
    this.products
      .index(page)
      .pipe(
        take(1),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((response: APIResponse) => {
        this.products$.next(this.products$.value.concat(response.meta.results.data));
        console.log(this.products$.value)
        this.pagination = response.meta.results;
      });
  }
}
