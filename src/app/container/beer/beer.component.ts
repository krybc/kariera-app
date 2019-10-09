import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoadingEnum} from '../../enum/loading.enum';
import {BeerDataProvider} from '../../data-provider/beer.data-provider';
import {BeerViewModel} from '../../model/beer/beer.view.model';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  public loading: string = LoadingEnum.pending;
  public beer: BeerViewModel = null;

  constructor(
    private route: ActivatedRoute,
    private dataProvider: BeerDataProvider,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataProvider
        .getById(+params.id)
        .subscribe((beer: BeerViewModel) => {
          this.beer = beer;
          this.loading = LoadingEnum.success;
        });
    });
  }
}
