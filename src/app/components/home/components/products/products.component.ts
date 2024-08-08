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
      url: 'suit.png',
      name: 'Suit-Salwar',
      type: 'Women',
      price: '1200',
      rate: '5'
    },
    {
      url: 'flayer.png',
      name: 'Suit Circular Plazo',
      type: 'Women',
      price: '1200',
      rate: '5'
    },
    {
      url: 'pant-plazo.png',
      name: 'Suit Pant Plazo',
      type: 'Woman',
      price: '1200',
      rate: '5'
    },
    {
      url: 'sharara.png',
      name: 'Suit Sharara',
      type: 'Woman',
      price: '1200',
      rate: '5'
    },
    {
      url: 'open-plazo.png',
      name: 'Suit Open Plazo',
      type: 'Woman',
      price: '1200',
      rate: '5'
    },
    {
      url: 'anarkali.png',
      name: 'Anarkali',
      type: 'Woman',
      price: '1200',
      rate: '5'
    },
    {
      url: 'alia-cut.png',
      name: 'Alia Cut Suit',
      type: 'Woman',
      price: '1200',
      rate: '5'
    },
    {
      url: 'kurti.png',
      name: 'Kurti',
      type: 'Woman',
      price: '1200',
      rate: '5'
    },
    {
      url: 'garara.png',
      name: 'Gharara',
      type: 'Woman',
      price: '1200',
      rate: '5'
    },
    {
      url: 'blouse.png',
      name: 'Blouse',
      type: 'Woman',
      price: '1200',
      rate: '5'
    }
  ];
  getStarsArray(rate: string): number[] {
    const numStars = parseInt(rate, 10);
    return Array(numStars).fill(0).map((_, index) => index + 1);
  }
}
