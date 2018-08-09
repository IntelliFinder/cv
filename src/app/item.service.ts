import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Item } from './item-template';
import { ITEMS } from './item-data';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('ItemService: fetched items');
    return of(ITEMS);
  }

  getItem(id: number): Observable<Item> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`ItemService: fetched item id=${id}`);
    return of(ITEMS.find(item => item.id === id));
  }
}
