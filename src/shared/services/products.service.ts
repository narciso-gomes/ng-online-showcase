import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  /**
   * API URL
   */
  private readonly api = environment.api;

  /**
   * Constructor
   *
   * @param httpClient
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * Get all products
   * @returns
   */
  public index(): Observable<any> {
    return this.httpClient.get(`${this.api}/produtos`);
  }
}
