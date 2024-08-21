import { Routes } from '@angular/router';
import { TilesComponent } from './tiles/tiles.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { TileComponent } from './tiles/tile/tile.component';
import { AddItemComponent } from './manage-item/add-item/add-item.component';

export const routes: Routes = [
    {
        path : '',
        component : LogInComponent
    },
    {
        path : 'login',
        component : LogInComponent
    },
    {
        path: 'signUp',
        component: AddUserComponent
    },
    {
        path : 'dashboard/:username',
        component: TilesComponent
    },
    {
        path: 'dashboard/manageItem/:userId',
        component: ManageItemComponent,
        pathMatch: 'full'
    },
    {
        path: 'dashboard/manageItem/updateItem/:itemId',
        component : AddItemComponent
    },
    {
        path: 'dashboard/manageItem/addItem/:userId',
        component : AddItemComponent
    }

];
