import { Component } from '@angular/core';
import { stats } from '../../../constants';
import { styles } from 'src/style';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
})
export class StatsComponent {
  styles = styles;
  stats = stats;
}
