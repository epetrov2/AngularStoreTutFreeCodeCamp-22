import { Component } from '@angular/core';

const ROWS_HEIGHT: { [id: number]: number } = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  cols = 3;
  category: string | undefined;
  rowHeight: number =  ROWS_HEIGHT[this.cols];


  onColumnsCountChange(newColsNumber: number): void {
    this.cols = newColsNumber;
    this.rowHeight =  ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

}
