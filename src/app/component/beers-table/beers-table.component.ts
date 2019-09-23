import {Component, Input, OnInit} from '@angular/core';
import {Beer} from '../../model/beer';

@Component({
  selector: 'app-beers-table',
  templateUrl: './beers-table.component.html',
  styleUrls: ['./beers-table.component.scss']
})
export class BeersTableComponent implements OnInit {
  @Input() beers: Beer[];
  beersTableColumns: string[] = ['name', 'alcohol', 'pasteurized', 'elementsCount'];

  constructor() { }
  ngOnInit() {}
}
