import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../_shared/cards.service';

@Component({
    selector: 'app-cat-details',
    templateUrl: './cat-details.component.html',
    styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {
    public catName = '';
    public catInformation: any;
    public dataLoaded = false;

    constructor( private cardsService: CardsService,
                 private activatedRoute: ActivatedRoute) {

        if (this.activatedRoute.snapshot.params['catName']) {
            this.catName = this.activatedRoute.snapshot.params['catName'];
        }
    }

    ngOnInit() {
        this.grabCatDetails();
    }

    public grabCatDetails() {
        this.cardsService.grabCatInformation(this.catName).subscribe((response) => {
            this.catInformation = response;
            this.dataLoaded = true;
        });
    }

    public refreshData() {
        this.grabCatDetails();
    }

    public goBack() {
        window.open(`/home`, '_self');
    }
}
