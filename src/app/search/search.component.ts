import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchItem = '';
  @Output() serachedValue = new EventEmitter<string>();
  onSearch(){
    this.serachedValue.emit(this.searchItem);
  }
}
