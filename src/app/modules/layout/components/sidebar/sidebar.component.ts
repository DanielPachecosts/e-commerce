import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isOpen: boolean;
  @Output() close = new EventEmitter();
  @ViewChild('side', { static: true }) sideBar!: ElementRef<HTMLDivElement>;
  @ViewChild('other', { static: true }) other!: ElementRef<HTMLUListElement>;
  @ViewChildren('li') li!: QueryList<ElementRef>;
  // @ViewChild('li2', { static: true }) li2!: ElementRef<HTMLLIElement>;
  // @ViewChild('btn', { static: true }) btn!: ElementRef<HTMLLIElement>;
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

      this.li.forEach((liItem: ElementRef<HTMLLIElement>) => {
        gsap.from(liItem, {
          x: '-100%',
          duration: 0.8,
          ease: 'circ.inOut',
        });

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
    this.isOpen = false;
  }

  toggleSidebar() {
    this.close.emit();
  }
}
