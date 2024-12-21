import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input() sliderContent: any;
  
  checkButton() {
    console.log('Button clicked');
  }
}
