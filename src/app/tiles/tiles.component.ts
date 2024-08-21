import { Component, Input } from '@angular/core';
import { DUMMY_ITEMS, Item } from '../items-service';
import { TileComponent } from "./tile/tile.component";
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tiles',
  standalone: true,
  imports: [TileComponent,NgFor],
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.css'
})
export class TilesComponent {
   
  @Input() tiles!: Item[];
  showUpdateItem = false;
  constructor(private router: ActivatedRoute)
  {
  }

  ngOnInit(): void {
    if(this.tiles===undefined)
    {
      this.tiles = DUMMY_ITEMS;
    }
    this.showUpdateItem = this.router.snapshot.params['userId'] != undefined ? true : false;
  }

}
