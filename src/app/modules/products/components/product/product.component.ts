import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

import { Product } from 'src/app/modules/products/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  @ViewChild('arrow', { static: true }) arrow!: ElementRef<HTMLButtonElement>;
  @ViewChild('imageInfo', { static: true })
  imageInfo!: ElementRef<HTMLDivElement>;
  @ViewChild('imageContent') imageContent!: ElementRef<HTMLDivElement>;
  @ViewChild('imageContent2') imageContent2!: ElementRef<HTMLDivElement>;
  initAnimation = true;

  tl1 = gsap.timeline({ paused: true, reversed: true });
  @Input() product: Product = {
    id: 0,
    description: '',
    price: 0,
    title: '',
    images: [''],
    category: { id: 0, name: '', image: '' },
  };
  faChevronRight = faChevronRight;

  @Output() showDetail = new EventEmitter();

  constructor(private cartService: CartService) {}
  ngOnInit(): void {}

  add(product: Product) {
    this.cartService.addToCart(product);
  }

  details(product: Product) {
    this.showDetail.emit(product);
  }

  animate() {
    this.tl1.to(this.arrow.nativeElement, {
      rotation: 90,
      duration: 0.5,
      ease: 'power1.inOut',
    });

    this.tl1.to(this.imageInfo.nativeElement, {
      display: 'block',
      height: '100%',
      duration: 0.5,
      ease: 'power1.inOut',
    });

    this.tl1.from(this.imageContent.nativeElement, {
      opacity: 0,
      duration: 0.7,
      ease: 'power1',
      delay: 0.3,
    });

    this.tl1.from(
      this.imageContent2.nativeElement,
      {
        opacity: 0,
        scaleX: 2,
        duration: 0.7,
        ease: 'power1.inOut',
      },
      '<'
    );

    if (this.initAnimation) {
      this.tl1.play();
    } else {
      this.tl1.reverse();
    }
    this.initAnimation = !this.initAnimation;
  }
}
