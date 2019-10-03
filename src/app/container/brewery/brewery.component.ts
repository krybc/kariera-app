import { Component, OnInit } from '@angular/core';
import {Brewery} from '../../model/brewery';
import {BreweriesService} from '../../service/breweries.service';
import {ActivatedRoute} from '@angular/router';
import {Beer} from '../../model/beer';
import {BeersService} from '../../service/beers.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.scss']
})
export class BreweryComponent implements OnInit {
  public brewery: Brewery = null;
  public beers: Beer[];

  constructor(
    private route: ActivatedRoute,
    private breweriesService: BreweriesService,
    private beersService: BeersService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const result = forkJoin(
        this.breweriesService.getById(+params.id),
        this.breweriesService.getBeers(+params.id)
      );

      result.subscribe(([brewery, beers]: [Brewery, Beer[]]) => {
        this.brewery = brewery;
        this.beers = beers;
      });
    });
  }

}
