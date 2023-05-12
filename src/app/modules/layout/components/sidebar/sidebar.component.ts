import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Output() close = new EventEmitter();

  closeSidebar() {
    this.close.emit();
  }
}
