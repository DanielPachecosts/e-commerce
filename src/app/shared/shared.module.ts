import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/components/button/button.component';
import { TransitionComponent } from './transition/transition.component';


@NgModule({
  declarations: [
    ButtonComponent,
    TransitionComponent,
    
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent, TransitionComponent
    
  ],
})
export class SharedModule {}
