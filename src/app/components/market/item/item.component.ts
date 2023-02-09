import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() changeQuantity: boolean = false;
  @Input() quantity: number = 0;
  @Input() description: string = '';
  @Input() name: string = '';
  @Input() supplierName: string = '';
}
