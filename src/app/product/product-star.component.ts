import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: './product-star.component.html',
    styleUrls: ['./product-star.component.scss']

})
export class ProductStarComponent implements OnChanges {

    @Input() rating = 0;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); 
    cropWidth = 50;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}