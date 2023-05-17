import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  @Input() open = false;
  @Output() close = new EventEmitter();

  closeSidebar() {
    this.close.emit();
  }
}
