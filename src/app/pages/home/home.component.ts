import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  cols = 3

  onColumnsCountChange(newColsNumber: number): void {
    this.cols = newColsNumber;
  }

}
