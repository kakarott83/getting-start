import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { Productservice } from "./product.service";

@Component({
    templateUrl: './product-list.compontent.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle = 'Product List'
    imageWidth = 50;
    imageMargin = 2;
    errorMessage: any;
    sub!: Subscription;

    constructor(private _productService: Productservice) { }
    
    private _listFilter = '';
    
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter ' + this._listFilter)
        this.filteredProduct = this.performFilter(value);
    }

    filteredProduct: IProduct[] = [];

    showImage = false;
    products: IProduct[] = [];

    ngOnInit(): void {
        this.sub = this._productService.getProduct().subscribe({
            next: products => {
                this.products = products,
                this.filteredProduct = this.products;
            },
            error: err => this.errorMessage = err
        });
        
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    onRatingClicked(message: string) {
        this.pageTitle = 'Product List' + ' ' + message
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
        
    }

}