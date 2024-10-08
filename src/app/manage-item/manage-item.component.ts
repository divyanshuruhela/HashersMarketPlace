import { Component, Input } from '@angular/core';
import { AddItemComponent } from "./add-item/add-item.component";
import { NgIf } from '@angular/common';
import { TilesComponent } from "../tiles/tiles.component";
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { UserService } from '../user-service';
import { ItemService } from '../items-service';

@Component({
  selector: 'app-manage-item',
  standalone: true,
  imports: [AddItemComponent, NgIf, TilesComponent, RouterModule],
  templateUrl: './manage-item.component.html',
  styleUrl: './manage-item.component.css'
})
export class ManageItemComponent {
      userId = '';
      showAddItem = false;
      updateItem:any = null;

      constructor(private router: ActivatedRoute, 
        private route: Router,
        private commonService : CommonService,
        private userService: UserService,
      private itemService: ItemService){
           this.userId = this.router.snapshot.params['userId'];
      }

      get TilesByUser(){
        return this.itemService.getItems().filter(x=>x.userId === this.userId);
      }

      back()
      {
        let userName = this.userService.getUser().find(x=>x.id == this.userId)?.name ?? '';
        this.commonService.changeData(userName);
        this.route.navigate(
          ['/dashboard',userName.toString()]
        )
      }
}
