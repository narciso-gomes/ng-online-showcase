import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products = [1, 2];

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.products = [...this.products, 1, 2, 3];
    }
  }

  private bottomReached(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }
}

