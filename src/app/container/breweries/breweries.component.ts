import { Component, OnInit } from '@angular/core';
import {Brewery} from '../../model/brewery';
import {BreweriesService} from '../../service/breweries.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {
  public breweries: Brewery[];
  breweriesTableColumns: string[] = ['name', 'beersCount'];

  constructor(
    private breweriesService: BreweriesService,
  ) { }

  ngOnInit() {
    this.breweriesService.findAll().subscribe(breweries => this.breweries = breweries);
  }

}
