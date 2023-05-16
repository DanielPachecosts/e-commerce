import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() buttonType: 'button' | 'submit' = 'button';
  @Input() color: 'primary' | 'load' | 'secundary' | 'remove' | 'login' = 'primary';

  colorMap = {
    primary: {
      'hover:bg-neutral-100': true,
      'py-4':true ,
      'rounded-xl': true
    },
    load: {
      'bg-neutral-100': true,
      'hover:bg-neutral-200': true,
      'text-lg': true,
      'mb-5': true,
      'py-4':true ,
      'rounded-xl': true
    },
    secundary: {
      'hover:bg-zinc-700': true,
      'text-white':true,
      'py-4':true,
      'rounded-xl': true
    },
    remove: {
      'bg-neutral-400':true,
      'hover:bg-neutral-500':true,
      'text-white':true,
      'py-1':true,
      'rounded-md':true,
      
    },
    login: {
      'bg-blue-500':true,
      'hover:bg-blue-400':true,
      'text-white':true,
      'py-1':true,
      'px-2':true,
      'rounded-md':true,
    }
  };

  get style() {
    const styles = this.colorMap[this.color];
    if (styles) {
      return styles;
    }
    return {};
  }
}
