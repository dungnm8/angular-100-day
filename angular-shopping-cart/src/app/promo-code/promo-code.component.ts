import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-promo-code',
  standalone: true,
  imports: [],
  templateUrl: './promo-code.component.html',
  styleUrl: './promo-code.component.css'
})
export class PromoCodeComponent {
  @Input() numberProduct: number;
  @Input() subTotal: number;
  @Input() tax: number;
}
