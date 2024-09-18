import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  images = [
    {
      url: '/products/suit.png',
      name: 'Suit-Salwar',
      type: 'Women',
      price: '1200',
      rate: '5',
    },
    {
      url: '/products/flayer.png',
      name: 'Suit Circular Plazo',
      type: 'Women',
      price: '1200',
      rate: '5',
    },
    {
      url: '/products/pant-plazo.png',
      name: 'Suit Pant Plazo',
      type: 'Woman',
      price: '1200',
      rate: '5',
    },
    {
      url: '/products/sharara.png',
      name: 'Suit Sharara',
      type: 'Woman',
      price: '1200',
      rate: '5',
    },
    {
      url: '/products/open-plazo.png',
      name: 'Suit Open Plazo',
      type: 'Woman',
      price: '1200',
      rate: '5',
    },
    {
      url: '/products/anarkali.png',
      name: 'Anarkali',
      type: 'Woman',
      price: '1200',
      rate: '5',
    },
    {
      url: '/products/alia-cut.png',
      name: 'Alia Cut Suit',
      type: 'Woman',
      price: '1200',
      rate: '5',
    },
    {
      url: '/products/kurti.png',
      name: 'Kurti',
      type: 'Woman',
      price: '1200',
      rate: '5',
    },
    {
      url: '/products/garara.png',
      name: 'Gharara',
      type: 'Woman',
      price: '1200',
      rate: '5',
    },
    {
      url: '/products/blouse.png',
      name: 'Blouse',
      type: 'Woman',
      price: '1200',
      rate: '5',
    },
  ];
  getStarsArray(rate: string): number[] {
    const numStars = parseInt(rate, 10);
    return Array(numStars)
      .fill(0)
      .map((_, index) => index + 1);
  }
}
