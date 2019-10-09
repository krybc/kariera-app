import { Component, OnInit } from '@angular/core';
import {BreweryDataProvider} from '../../data-provider/brewery.data-provider';
import {BreweryViewModel} from '../../model/shared/brewery.view.model';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {
  public breweries: BreweryViewModel[];
  breweriesTableColumns: string[] = ['name', 'beersCount'];

  constructor(
    private dataProvider: BreweryDataProvider,
  ) { }

  ngOnInit() {
    this.dataProvider
      .getList()
      .subscribe(breweries => this.breweries = breweries);
  }

}
