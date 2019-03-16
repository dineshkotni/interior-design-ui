

import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector: 'app-bid-list',
    templateUrl: './bid-list.component.html',
    styleUrls: ['./bid-list.component.css']
})
export class BidListComponent implements OnInit {
    bidInfo = [
        { 'id': 'bid1', 'img': 'https://designmodo.com/wp-content/uploads/2014/07/Gratisography.jpg', 'customer': 'test123', 'price': 10 },
        { 'id': 'bid2', 'img': 'https://designmodo.com/wp-content/uploads/2014/07/Gratisography.jpg', 'customer': 'test345', 'price': 20 },
        { 'id': 'bid3', 'img': 'https://designmodo.com/wp-content/uploads/2014/07/Gratisography.jpg', 'customer': 'test456', 'price': 30 },

    ];

    constructor() {

    }


    ngOnInit(): void {
        const self = this;


    }






}
