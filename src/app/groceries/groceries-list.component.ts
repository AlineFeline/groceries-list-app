import { Component } from '@angular/core';
import { IGrocery } from './grocery';
import { GroceryService } from './grocery.service';

@Component({
    selector: 'app-groceries',
    templateUrl: 'groceries-list.component.html',
    styleUrls: ['groceries-list.component.css']
})
export class GroceryListComponent{
    pageTitle: string = 'Grocery List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage : boolean = false;
    listFilter: string = 'cart';

    groceries: IGrocery[] = [];

    constructor(private groceryService:GroceryService){}

    ngOnInit():void{
        this.groceryService.getGroceries().subscribe(data=>this.groceries=data);
    }   
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}