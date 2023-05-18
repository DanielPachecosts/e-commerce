import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  isOpen:boolean;
  @Output() close = new EventEmitter();
  @ViewChild('side', { static: true }) sideBar!: ElementRef<HTMLDivElement>;
  @ViewChild('other', { static: true }) other!: ElementRef<HTMLUListElement>;
  @ViewChild('li1', { static: true }) li1!: ElementRef<HTMLLIElement>;
  @ViewChild('li2', { static: true }) li2!: ElementRef<HTMLLIElement>;
  @ViewChild('btn', { static: true }) btn!: ElementRef<HTMLLIElement>;
  @Input() set open(value: boolean) {
    this.isOpen = value;
    if (this.sideBar && this.isOpen) {
      gsap.to([this.sideBar.nativeElement, this.other.nativeElement], {
        x: '0',
        duration: 0.7,
        ease: 'circ.inOut',
      });
      gsap.to([this.sideBar.nativeElement, this.other.nativeElement], {
        duration: 0.8,
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        ease: 'circ.inOut',
      });
      gsap.from(this.li1.nativeElement, {
        x: '-100%',
        duration: 0.8,
        ease: 'circ.inOut',
      });
      gsap.from(this.li2.nativeElement, {
        x: '-100%',
        duration: 0.8,
        ease: 'circ.inOut',
      });
      gsap.from(this.btn.nativeElement, {
        x: '-100%',
        duration: 0.8,
        ease: 'circ.inOut',
      });
    } else {
      gsap.to([this.sideBar.nativeElement, this.other.nativeElement], {
        x: '-100%',
        duration: 0.5,
        ease: 'circ.in',
      });
      gsap.to([this.sideBar.nativeElement, this.other.nativeElement], {
        duration: 0.8,
        ease: 'circ.inOut',
        borderTopRightRadius: '80%',
        borderBottomRightRadius: '80%',
      });
    }
  }

  

  constructor() {
    this.isOpen = false
  }

  toggleSidebar() {
    this.close.emit();
  }
}
