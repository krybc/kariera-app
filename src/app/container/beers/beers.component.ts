import { Component, OnInit } from '@angular/core';
import {BeersService} from '../../service/beers.service';
import {Beer} from '../../model/beer';
import {CategoriesService} from '../../service/categories.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {
  beers: Beer[];

  constructor(
    private beersService: BeersService,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit() {
    this.beersService.getList().subscribe(result => {
      this.beers = result;
    });
  }

}
