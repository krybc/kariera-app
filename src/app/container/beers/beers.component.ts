import { Component, OnInit } from '@angular/core';
import {BeerDataProvider} from '../../data-provider/beer.data-provider';
import {BeerViewModel} from '../../model/shared/beer.view.model';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {
  beers: BeerViewModel[];

  constructor(
    private dataProvider: BeerDataProvider,
  ) { }

  ngOnInit() {
    this.dataProvider
      .getList()
      .subscribe(result => this.beers = result);
  }
}
