import { Component } from '@angular/core';
import { features } from 'src/constants';
import { styles, layout } from 'src/style';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
})
export class BusinessComponent {
  features = features;
  styles = styles;
  layout = layout;
}
