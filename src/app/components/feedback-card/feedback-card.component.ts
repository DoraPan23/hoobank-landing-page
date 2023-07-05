import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
})
export class FeedbackCardComponent {
  @Input() data: any;
}
