import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  selectSortOptions='';
  @Output() sortEvent = new EventEmitter<string>();
  options = [
    {value: 'nameAsc', label : 'Name (A-Z)'},
    {value: 'nameDesc', label : 'Name (Z-A)'},
    {value: 'priceAsc', label : 'Low to High'},
    {value: 'priceDesc', label : 'High to Low'}
  ];

  onSortChange(){
    this.sortEvent.emit(this.selectSortOptions);
  }
}
