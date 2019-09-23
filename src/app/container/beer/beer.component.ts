import { Component, OnInit } from '@angular/core';
import {Beer} from '../../model/beer';
import {BeersService} from '../../service/beers.service';
import {ActivatedRoute} from '@angular/router';
import {ElementsService} from '../../service/elements.service';
import {forkJoin} from 'rxjs';
import {Element} from '../../model/element';
import {BreweriesService} from '../../service/breweries.service';
import {flatMap, tap} from 'rxjs/operators';
import {Brewery} from '../../model/brewery';
import {LoadingEnum} from '../../enum/loading.enum';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  public loading: string = LoadingEnum.pending;
  public beer: Beer = null;
  public brewery: Brewery;
  public elements: Element[];

  constructor(
    private route: ActivatedRoute,
    private beersService: BeersService,
    private elementsService: ElementsService,
    private breweriesService: BreweriesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const result = forkJoin(
        this.beersService.findById(+params.id),
        this.elementsService.findAll()
      );

      result.pipe(
        flatMap(([beer, elements]: [Beer, Element[]]) => {
          this.beer = beer;
          this.elements = elements.filter((e: Element) => beer.elementsId.find(id => id === e.id));
          return this.breweriesService.findById(beer.breweryId);
        }),
        tap((brewery: Brewery) => {
          this.brewery = brewery;
          this.loading = LoadingEnum.success;
        })
      ).subscribe();
    });
  }
}
