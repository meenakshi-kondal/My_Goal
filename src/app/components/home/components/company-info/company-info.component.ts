import { Component } from '@angular/core';

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [],
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.css',
})
export class CompanyInfoComponent {
  company_info = [
    {
      count: 45,
      title: 'Customers',
      image: '/company_info/customers.png',
      background: '#dc35457a',
    },
    {
      count: 100,
      title: 'Orders',
      image: '/company_info/orders.png',
      background: 'rgb(74 205 191 / 44%)',
    },
    {
      count: 2,
      title: 'Partners',
      image: '/company_info/partners.png',
      background: 'rgb(255 215 0 / 33%)',
    },
    {
      count: 4,
      title: 'Investors',
      image: '/company_info/investors.png',
      background: 'rgb(115 40 3 / 34%)',
    },
  ];
}
