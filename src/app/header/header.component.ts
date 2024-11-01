import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSearchOpen = false;

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  closeSearch() {
    this.isSearchOpen = false;
  }
}
