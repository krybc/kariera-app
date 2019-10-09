import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BreweryDataProvider} from '../../data-provider/brewery.data-provider';
import {BreweryViewModel} from '../../model/brewery/brewery.view.model';
import {LoadingEnum} from '../../enum/loading.enum';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.scss']
})
export class BreweryComponent implements OnInit {
  public loading: string = LoadingEnum.pending;
  public brewery: BreweryViewModel = null;

  constructor(
    private route: ActivatedRoute,
    private dataProvider: BreweryDataProvider
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataProvider
        .getById(+params.id)
        .subscribe((brewery: BreweryViewModel) => {
          this.brewery = brewery;
          this.loading = LoadingEnum.success;
        });
    });
  }

}
