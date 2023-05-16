import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/modules/products/models/category.model';

import { faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { OverlayRef } from '@angular/cdk/overlay';
import { TokenService } from 'src/app/services/token.service';
import { CartService } from 'src/app/services/cart.service';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faUser = faUser;
  faBars = faBars;
  isOpen = false;
  isOpenCategoriesOverlay = false;
  isOpenUserOverlay = false;
  categories: Category[] = [];
  overlayRef: OverlayRef | null = null;
  user: User | null = null;

  constructor(
    private categoryService: CategoryService,
    private tokenService: TokenService,
    private cartService: CartService,
    private userService: UserService,
    private routerService: Router
  ) {}

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
}
