import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { OverlayRef } from '@angular/cdk/overlay';

import { gsap } from 'gsap';
import { faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/modules/products/models/category.model';
import { TokenService } from 'src/app/services/token.service';
import { CartService } from 'src/app/services/cart.service';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, AfterViewInit {
  faSearch = faSearch;
  faUser = faUser;
  faBars = faBars;
  isOpen = false;
  isOpenCategoriesOverlay = false;
  isOpenUserOverlay = false;
  categories: Category[] = [];
  overlayRef: OverlayRef | null = null;
  user: User | null = null;
  @ViewChild('logo', { static: true }) logo!: ElementRef<HTMLHeadElement>;
 
  constructor(
    private categoryService: CategoryService,
    private tokenService: TokenService,
    private cartService: CartService,
    private userService: UserService,
    private routerService: Router
  ) {}

  ngAfterViewInit(): void {
    gsap.from(this.logo.nativeElement, {
      y: '-200%',
      // opacity: 0.5,
      duration: 2,
      ease: 'elastic.inOut(1, 0.3)',
    });
  }

  ngOnInit(): void {
    this.userService.user$.subscribe((data) => {
      this.user = data;
    });

    this.categoryService.categories$.subscribe((data) => {
      this.categories = data;
    });
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.tokenService.removeToken();
    this.cartService.cleanStorage();
    this.routerService.navigate(['/']);
    location.reload();
  }

  toggleCategory(){
    this.isOpenCategoriesOverlay = !this.isOpenCategoriesOverlay
  }
}
