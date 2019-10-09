import {Component, Input, OnInit} from '@angular/core';
import {BeerViewModel} from '../../model/shared/beer.view.model';

@Component({
  selector: 'app-beers-table',
  templateUrl: './beers-table.component.html',
  styleUrls: ['./beers-table.component.scss']
})
export class BeersTableComponent implements OnInit {
  @Input() beers: BeerViewModel[];
  beersTableColumns: string[] = ['name', 'alcohol', 'pasteurized', 'elementsCount'];

  constructor() { }
  ngOnInit() {}
}
