import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeersComponent } from './container/beers/beers.component';
import {LayoutComponent} from './shared/layout/layout.component';
import {BeerComponent} from './container/beer/beer.component';
import {BreweriesComponent} from './container/breweries/breweries.component';
import {BreweryComponent} from './container/brewery/brewery.component';
import {BeerEditComponent} from './container/beer-edit/beer-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: BeersComponent
      },
      {
        path: 'beers/:id',
        component: BeerComponent
      },
      {
        path: 'beers/:id/edit',
        component: BeerEditComponent
      },
      {
        path: 'breweries',
        component: BreweriesComponent
      },
      {
        path: 'breweries/:id',
        component: BreweryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
