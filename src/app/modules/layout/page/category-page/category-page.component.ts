import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent implements OnInit,OnDestroy{

  isDestroy = false;

  constructor(
    
  ){
    
  }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {


  }
}
