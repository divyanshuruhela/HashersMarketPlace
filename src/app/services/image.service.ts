import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ImageService{
    private imageUrlSource = new BehaviorSubject<string>('');
    currentImageUrl = this.imageUrlSource.asObservable();
    constructor(){}

    changeImageUrl(url: string)
    {
        this.imageUrlSource.next(url);
    }
}