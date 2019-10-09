import {BreweriesService} from '../api/service/breweries.service';
import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Beer} from '../api/model/beer';
import {Brewery} from '../api/model/brewery';
import {BreweryViewModel as BaseBreweryViewModel} from '../model/shared/brewery.view.model';
import {BreweryViewModel} from '../model/brewery/brewery.view.model';
import {BeerViewModel} from '../model/shared/beer.view.model';

@Injectable()
export class BreweryDataProvider {

  constructor(
    private breweriesService: BreweriesService,
  ) {}

  getList(): Observable<BaseBreweryViewModel[]> {
    return this.breweriesService
      .getList()
      .pipe(
        map(result => result.map((item: Brewery) => {
          console.log(item);
          return new BaseBreweryViewModel(item);
        }))
      );
  }

  getById(id: number): Observable<BreweryViewModel> {
    const result = forkJoin(
      this.breweriesService.getById(id),
      this.breweriesService.getBeers(id),
    );

    return result.pipe(
      map(([brewery, beers]: [Brewery, Beer[]]) => {
        const breweryViewModel = new BreweryViewModel(brewery);
        breweryViewModel.beers = beers.map((beer: Beer) => new BeerViewModel(beer));

        return breweryViewModel;
      })
    );
  }
}
