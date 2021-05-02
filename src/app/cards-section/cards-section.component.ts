import { Component, OnInit } from '@angular/core';
import { CardsService } from '../_shared/cards.service';

@Component({
  selector: 'app-cats-browse',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.scss']
})
export class CardsSectionComponent implements OnInit {
  public listOfCats: any = [];
  public dataLoaded = false;
  public defaultFilters: any = [
    {name: 'Hypoallergenic', value: 'hypoallergenic', checked: true},
    {name: 'Rare', value: 'rare', checked: true},
    {name: 'Hairless', value: 'hairless', checked: true}];

  constructor(private cardsService: CardsService) {
  }

  ngOnInit() {
    this.grabAllCats();
  }

  public grabAllCats(isFilter?) {
    this.cardsService.getAllCats().subscribe((response) => {
      if (response) {
        this.listOfCats = response;
        this.listOfCats = this.listOfCats.filter(cat => this.filterList(cat));
        if (isFilter) {
          this.defaultFilters.forEach((fill, idx) => {
            if (!fill.checked) {
              this.filValue(idx);
            }
          });
        }
        this.dataLoaded = true;
      } else {
        this.dataLoaded = false;
      }
    });
  }

  public filterList(cat) {
    if (cat.image && cat.image.url) {
      return cat;
    }
  }

  public filterNewList(filter, idx) {
    this.dataLoaded = false;
    this.switchValue(idx);
    this.grabAllCats(true);
  }

  public filValue(idx) {
    switch (idx) {
      case 0:
        this.listOfCats = this.listOfCats.filter(cat => cat.hypoallergenic === 0);
        break;
      case 1:
        this.listOfCats = this.listOfCats.filter(cat => cat.rare === 0);
        break;
      case 2:
        this.listOfCats = this.listOfCats.filter(cat => cat.hairless === 0);
        break;
    }
  }

  public switchValue(idx) {
    this.defaultFilters[idx].checked = !this.defaultFilters[idx].checked;
  }

  public showCatDetails(cat, idx) {
    if (idx % 2 === 0) {
      const id = cat.id;
      window.open(`/details/${id}`, '_self');
    }
  }
}
