import { Component, inject, Input, PLATFORM_ID } from '@angular/core';
import { Item } from '../../items-service';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Inject } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {
    
  @Input() tile!: Item;
  @Input() showUpdateItem !: boolean;
  constructor(private localService: LocalService)
  {
      
  }

  
  get imagePath()
  {
       const storedImage = this.localService.getItem(this.tile.image);
      return storedImage? storedImage : 'assets/' + this.tile.image;
  }
  
}
