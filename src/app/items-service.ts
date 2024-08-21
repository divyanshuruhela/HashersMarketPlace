import { Injectable } from "@angular/core";
import { LocalService } from "./services/local.service";


export interface Item{
    'id' : string,
    'name':string,
    'description' : string,
    'price' : number,
    'image' : string,
    'userId': string
}  

@Injectable({
  providedIn : 'root'
})  
export class ItemService{
  private DUMMY_ITEMS: Item[]  = [
    {
      id: '12',
      name: 'SG Cricket Bat',
      description: 'SG Thunder Plus Short Handle Kashmir Willow Cricket Bat  (990 g)',
      price : 1200,
      image: 'cricketbat.jpg',
      userId: '1'
    },
    {
      id: '13',
      name: 'Boult Z40 Pro',
      description: 'Boult Z40 Pro with 100H Battery, Quad Mic ENC, Scratch Proof, Rubber Grip Design, 5.3v Bluetooth Headset',
      price : 1300,
      image: 'earbuds.jpg',
      userId: '2'
    },
    {
      id: '14',
      name: 'Blue Star 2023 Model 1.5 Ton AC',
      description: 'Blue Star 2023 Model 1.5 Ton 3 Star Split Inverter AC with Wi-fi Connect - White',
      price : 25000,
      image: 'AC.jpg',
      userId: '2'
    },
    {
      id: '15',
      name: 'HP Laptop',
      description: 'AMD Ryzen 3 Quad Core 5300U - (8 GB/512 GB SSD/Windows 11 Home) 15s-eq2143au Thin and Light Laptop',
      price : 20000,
      image: 'laptop.jpeg',
      userId: '2'
    },
    {
      id: '16',
      name: 'Mi TV',
      description: 'Mi A series 108 cm (43 inch) Full HD LED Smart Google TV with FHD',
      price : 15000,
      image: 'LedTv.jpg',
      userId: '1'
    }
  ];
  constructor(private localService: LocalService)
  {
    let items = this.localService.getItem('items');
    if(items)
    {
          this.DUMMY_ITEMS = JSON.parse(items);
    }
  }

  getItems()
     {
        return this.DUMMY_ITEMS;
     }

     addItems(item : Item){
          
         this.DUMMY_ITEMS.unshift(item);
         this.localService.setItem('items', JSON.stringify(this.DUMMY_ITEMS));

     }
}