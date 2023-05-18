import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css'],
})
export class TransitionComponent implements AfterViewInit {
  @ViewChild('transition', { static: true })
  transition!: ElementRef<HTMLDivElement>;
  
  ngAfterViewInit(): void {
    gsap.from(this.transition.nativeElement, {
      y: '100%',
      duration: 2,
      ease: 'circ.inOut',
    });
   
    gsap.to(this.transition.nativeElement, {
      y: '-100%',
      duration: 2,
      ease: 'circ.inOut',
      delay:2
    });
  }
  ngOnInit(): void {
    
  }
}
