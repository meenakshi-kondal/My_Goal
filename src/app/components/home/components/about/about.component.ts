import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    const targetElement = this.elementRef.nativeElement.querySelector('.typing-effect');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
          console.log('8909');
          targetElement.classList.add('active');  // Add active class when in view
        } else {
          targetElement.classList.remove('active'); // Remove active class when out of view (optional)
        }
      });
    });

    observer.observe(targetElement);  // Observe the element with the typing effect
  }
}
