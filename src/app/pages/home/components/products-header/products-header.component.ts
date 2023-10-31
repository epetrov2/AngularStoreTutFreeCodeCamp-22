import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html'
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = 'desc';
  itemsShowCount =  12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(newCount: number): void {
    this.itemsShowCount = newCount;
    this.itemsCountChange.emit(newCount);
  }

  onColumnsUpdated(colNum: number): void {
    this.columnsCountChange.emit(colNum);
  }

}
