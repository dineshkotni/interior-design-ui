

import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector: 'app-bid-details',
    templateUrl: './bid-details.component.html',
    styleUrls: ['./bid-details.component.css']
})
export class BidDetailsComponent implements OnInit {
    bidDetails = {
        'id': 'bid1', 'customer': 'test456',
        'price': 30, 'img': 'https://designmodo.com/wp-content/uploads/2014/07/Gratisography.jpg'
    };

    price: any;
    name: any;
    constructor() {

    }
    submit() {
        console.log('s', this.price);
        console.log('name', this.name);
    }


    ngOnInit(): void {
        const self = this;


    }






}
