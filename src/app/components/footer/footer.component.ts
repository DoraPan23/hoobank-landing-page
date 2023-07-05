import { Component } from '@angular/core';
import { styles } from 'src/style';
import { footerLinks, socialMedia } from 'src/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  styles = styles;
  footerLinks = footerLinks;
  socialMedia = socialMedia;
}
