import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';

import { faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { OverlayRef } from '@angular/cdk/overlay';

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

  categories: Category[] = [];

  overlayRef: OverlayRef | null = null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.categories$.subscribe((data) => {
      this.categories = data;
      console.log();
    });
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
