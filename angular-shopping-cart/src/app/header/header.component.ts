import {Component, Input, input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title = 'Angular Shopping Cart';

  menu_products: any = ["Home", "Shopping Cart"];

  @Input() numer_items: number;

  ngOnInit(): void {
  }


}
