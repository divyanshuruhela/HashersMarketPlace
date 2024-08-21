import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_ITEMS, Item } from '../../items-service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { readFile } from 'fs';
import { HttpClient } from '@angular/common/http';
import { ImageService } from '../../services/image.service';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
     
  name = '';
  description = '';
  price : number = 0;
  image !: string;
  id = '';
  file!:File;
  @Input() userId !: string;
  
  constructor(private localService: LocalService, private activateRoute: ActivatedRoute, private router: Router, private http: HttpClient ) 
  {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    if(this.activateRoute.snapshot.url[2].path === 'updateItem')
    {
        let item = DUMMY_ITEMS.find(x=>x.id == this.activateRoute.snapshot.params['itemId']);
        this.id = item?.id ?? '';
        this.name = item?.name?? '';
        this.description = item?.description ?? '';
        this.price = item?.price ?? 0;
        this.userId = item?.userId ?? '' ;
        this.image = item?.image??'';
    }

    if(this.activateRoute.snapshot.url[2].path === 'addItem')
    {
      this.userId = this.activateRoute.snapshot.params['userId'];
    }

  }

onSubmit(){ 


if(this.id == '' || this.id == undefined)
{
    DUMMY_ITEMS.unshift({
    id : new Date().getTime().toString(),
    name : this.name,
    description : this.description,
    userId: this.userId,
    image : this.image,
    price: this.price
});
  
}
else{
   let item: Item =
   {
    id  : this.id,
    name : this.name,
    description : this.description,
    userId : this.userId,
    image : this.image,
    price : this.price
   }
   const index = DUMMY_ITEMS.findIndex(x=>x.id == this.id);
   
   DUMMY_ITEMS[index] = item;
}





this.router.navigate(
  ['/dashboard/manageItem',this.userId]
);

}

onClose()
{
  this.router.navigate(
    ['/dashboard/manageItem',this.userId]
  );
}

imageUpload(event:any){

  this.file = event.target.files[0];
  
  this.image = this.file.name;

 let readFile = new FileReader();
 readFile.readAsDataURL(this.file);
 readFile.onload = ()=>{
    this.localService.setItem(this.image, readFile.result as string);
 };
}

}
