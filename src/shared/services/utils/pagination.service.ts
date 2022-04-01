import { Injectable } from '@angular/core';
import { Pagination } from 'src/shared/interfaces/pagination.interface';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {

  constructor() {}

  // public getNextPage(): number {
  //   return (this.pagination.current_page += 1);
  // }
}
