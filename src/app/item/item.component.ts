import { Component, OnInit } from '@angular/core';

import { Item } from '../item-template';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void{
    this.itemService.getItems()
    .subscribe(items=> this.items = items);
  }

}
