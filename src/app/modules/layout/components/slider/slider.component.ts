import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/products/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { SwiperOptions } from 'swiper/types';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {
  products: Partial<Product>[] = [];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService.products$.subscribe((data) => {
      const images = data.map((product) => ({
        title: product.title,
        price: product.price,
        images: product.images,
        id: product.id,
      }));
      this.products = images;
    });
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 100,
    navigation: true,
    autoplay: true,
    scrollbar: { draggable: true },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      990: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
    },
  };
}
