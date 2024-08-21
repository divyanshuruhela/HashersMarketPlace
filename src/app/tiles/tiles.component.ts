import { Component, Input } from '@angular/core';
import {  Item, ItemService } from '../items-service';
import { TileComponent } from "./tile/tile.component";
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { SortComponent } from "../sort/sort.component";

@Component({
  selector: 'app-tiles',
  standalone: true,
  imports: [TileComponent, NgFor, SearchComponent, SortComponent],
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.css'
})
export class TilesComponent {
   
  @Input() tiles!: Item[];
  showUpdateItem = false;
  constructor(private router: ActivatedRoute, private itemService : ItemService)
  {
  }

  ngOnInit(): void {
    if(this.tiles===undefined)
    {
      this.tiles = this.itemService.getItems();
    }
    this.showUpdateItem = this.router.snapshot.params['userId'] != undefined ? true : false;
  }

  getItemBySearch(serachedItem : string)
  {
    if(serachedItem)
    {
     this.tiles = this.itemService.getItems().filter(item=>item.name.toLowerCase().includes(serachedItem.toLowerCase()) || item.description.toLowerCase().includes(serachedItem.toLowerCase()));
    }
    else{
      this.tiles = this.itemService.getItems();
    }
  }

  sortEvent(sortBy : string)
  {
      switch(sortBy)
      {
        case 'nameAsc':
          this.tiles = this.tiles.sort((a,b)=> a.name.localeCompare(b.name));
          break;
        case 'nameDesc':
          this.tiles = this.tiles.sort((a,b)=> b.name.localeCompare(a.name));
          break;
        case 'priceAsc':
          this.tiles = this.tiles.sort((a,b)=> a.price - b.price);
          break;
        case 'priceDesc':
          this.tiles = this.tiles.sort((a,b)=> b.price - a.price);
          break; 
      }
  }

}
