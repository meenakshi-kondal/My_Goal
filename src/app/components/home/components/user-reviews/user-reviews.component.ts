import { Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-user-reviews',
  standalone: true,
  imports: [],
  templateUrl: './user-reviews.component.html',
  styleUrl: './user-reviews.component.css',
})
export class UserReviewsComponent {
  reviewsList = [
    {
      image: '/reviews/girl.jpg',
      name: 'Meenakshi',
      description:
        'The website has a clean, modern design that makes browsing products enjoyable. Navigation is intuitive, and I found it easy to find what I was looking for with the well-categorized product sections',
    },
    {
      image: '/reviews/girl2.jpg',
      name: 'Diksha',
      description:
        'The pricing was competitive, and I appreciated the frequent sales and discount offers. Their loyalty program is also a plus, allowing frequent buyers to earn rewards and save even more on future purchases.',
    },
    {
      image: '/reviews/girl3.jpg',
      name: 'Ruchika',
      description:
        'The checkout process was smooth and straightforward. They offer various payment options, including credit/debit cards, PayPal, and even cash-on-delivery, which makes it convenient for all users. I particularly liked the ability to save my details for a faster checkout next time.',
    },
    {
      image: '/reviews/boy4.jpg',
      name: 'Abhishek',
      description:
        'I received my order within the promised time frame, and the packaging was excellent. The tracking updates kept me informed throughout the process, and the product arrived in perfect condition',
    },
    {
      image: '/reviews/boy5.webp',
      name: 'Aniket',
      description:
        'I am thoroughly satisfied with my shopping experience. It’s a great platform that offers an easy-to-navigate interface, an impressive range of products, and a hassle-free checkout process. I would highly recommend it to anyone looking for a reliable online shopping destination.',
    },
  ];
  currentSlide = 0;
  mediumSizeSlides = 0;
  carousel: any;

  ngOnInit() {
    // Initialize the carousel after view is ready
    setTimeout(() => {
      const element = document.getElementById('carouselExampleIndicators');
      this.carousel = new bootstrap.Carousel(element, {
        interval: 3000,
        wrap: true,
        ride: 'carousel',
      });
    });
  }

  moveSlide(direction: 'next' | 'previous') {
    if (direction === 'next') {
      this.carousel.next();
      this.currentSlide = (this.currentSlide + 1) % this.reviewsList.length;
    } else {
      this.carousel.prev();
      this.currentSlide =
        (this.currentSlide - 1 + this.reviewsList.length) %
        this.reviewsList.length;
    }
  }
  moveMediumSizeSlide(direction: 'next' | 'previous') {
    this.mediumSizeSlides += direction === 'next' ? 1 : -1;
  }
}
