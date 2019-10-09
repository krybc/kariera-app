import {BeersService} from '../api/service/beers.service';
import {BreweriesService} from '../api/service/breweries.service';
import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';
import {Beer} from '../api/model/beer';
import {Comment} from '../api/model/comment';
import {Element} from '../api/model/element';
import {BeerViewModel as BeerListBeer} from '../model/shared/beer.view.model';
import {BeerViewModel} from '../model/beer/beer.view.model';
import {ElementViewModel} from '../model/shared/element.view.model';
import {CommentViewModel} from '../model/shared/comment.view.model';
import {BreweryViewModel} from '../model/shared/brewery.view.model';
import {Brewery} from '../api/model/brewery';

@Injectable()
export class BeerDataProvider {

  constructor(
    private beersService: BeersService,
    private breweriesService: BreweriesService,
  ) {}

  getList(): Observable<BeerListBeer[]> {
    return this
      .beersService
      .getList()
      .pipe(
        map(result => result.map((item: Beer) => new BeerListBeer(item)))
      );
  }

  getById(id: number): Observable<BeerViewModel> {
    const result = forkJoin(
      this.beersService.getById(id),
      this.beersService.getComments(id),
      this.beersService.getElements(id)
    );

    return result.pipe(
      flatMap(([beer, comments, elements]: [Beer, Comment[], Element[]]) => {
        const beerViewModel = new BeerViewModel(beer);
        beerViewModel.comments = comments.map((comment: Comment) => new CommentViewModel(comment));
        beerViewModel.elements = elements.map((element: Element) => new ElementViewModel(element));

        return this.breweriesService
          .getById(beer.breweryId)
          .pipe(
            map((brewery: Brewery) => {
              beerViewModel.brewery = new BreweryViewModel(brewery);
              return beerViewModel;
            })
          );
      })
    );
  }
}
