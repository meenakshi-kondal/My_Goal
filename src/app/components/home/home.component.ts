import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { UserReviewsComponent } from './components/user-reviews/user-reviews.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductsComponent, AboutComponent, UserReviewsComponent,FooterComponent, CompanyInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
