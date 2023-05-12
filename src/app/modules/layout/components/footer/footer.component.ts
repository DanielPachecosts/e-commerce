import { Component } from '@angular/core';

import { faGithub, faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  faGithub = faGithub;
  faAngular = faAngular;

  onScrollTop() {
    window.scrollTo({ top:0, behavior:'smooth'});
  }
}
