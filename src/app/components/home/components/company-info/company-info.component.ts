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
    { count: 45, title: 'Customers', image:'/company_info/customers.png' },
    { count: 100, title: 'Orders', image:'/company_info/orders.png' },
    { count: 2, title: 'Partners',image:'/company_info/partners.png' },
    { count: 4, title: 'Investors', image:'/company_info/investors.png' },
  ];
}
