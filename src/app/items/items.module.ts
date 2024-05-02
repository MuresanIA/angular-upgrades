import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ViewItemComponent } from './view-item/view-item.component';

@NgModule({
  declarations: [ItemsComponent, ItemsListComponent, ViewItemComponent],
  imports: [CommonModule],
  exports: [ItemsComponent, ItemsListComponent, ViewItemComponent],
})
export class ItemsModule {}
