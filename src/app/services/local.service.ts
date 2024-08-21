import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class LocalService{
    isbrowser!:boolean;
    constructor(@Inject(PLATFORM_ID) private platformId: Object)
    {
          this.isbrowser = isPlatformBrowser(this.platformId);
    }

    getItem(key:string)
    {   
        try{
            return localStorage.getItem(key);
        }
        catch{
            console.log("localStorage is not present");
            return null;
        }
    }
    setItem(key:string, value:string)
    {   
        
        try{
            return localStorage.setItem(key,value);
        }
        catch{
            console.log("localStorage is not present");
            return null;
        }
    }
}