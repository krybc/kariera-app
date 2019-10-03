import { Component, OnInit } from '@angular/core';
import {Beer} from '../../model/beer';
import {BeersService} from '../../service/beers.service';
import {ActivatedRoute} from '@angular/router';
import {forkJoin} from 'rxjs';
import {Element} from '../../model/element';
import {BreweriesService} from '../../service/breweries.service';
import {flatMap, tap} from 'rxjs/operators';
import {Brewery} from '../../model/brewery';
import {LoadingEnum} from '../../enum/loading.enum';
import {Comment} from '../../model/comment';

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
  public comments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private beersService: BeersService,
    private breweriesService: BreweriesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const result = forkJoin(
        this.beersService.getById(+params.id),
        this.beersService.getComments(+params.id),
        this.beersService.getElements(+params.id)
      );

      result.pipe(
        flatMap(([beer, comments, elements]: [Beer, Comment[], Element[]]) => {
          this.beer = beer;
          this.comments = comments;
          this.elements = elements;
          return this.breweriesService.getById(beer.breweryId);
        }),
        tap((brewery: Brewery) => {
          this.brewery = brewery;
          this.loading = LoadingEnum.success;
        })
      ).subscribe();
    });
  }
}
