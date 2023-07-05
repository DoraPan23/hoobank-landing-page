import { Component } from '@angular/core';
import { styles } from 'src/style';
import { feedback } from 'src/constants';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  styles = styles;
  feedback = feedback;
}
