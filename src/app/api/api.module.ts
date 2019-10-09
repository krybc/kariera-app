import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BeersService} from './service/beers.service';
import {ElementsService} from './service/elements.service';
import {BreweriesService} from './service/breweries.service';
import {CategoriesService} from './service/categories.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BeersService,
    ElementsService,
    BreweriesService,
    CategoriesService,
  ]
})
export class ApiModule { }
