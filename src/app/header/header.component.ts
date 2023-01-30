import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isDroppedDown = false;
  clickedDropdownOption: string | null = '';

  onListItemClicked(e: Event) {
    this.clickedDropdownOption = (<HTMLDivElement>e.target).textContent;
  }
}
