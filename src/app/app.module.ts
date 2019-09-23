import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersComponent } from './container/beers/beers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './shared/layout/layout.component';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatListModule,
  MatMenuModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {BeersService} from './service/beers.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptor} from './interceptor/request.interceptor';
import { BeerComponent } from './container/beer/beer.component';
import {ElementsService} from './service/elements.service';
import {BreweriesService} from './service/breweries.service';
import { BreweriesComponent } from './container/breweries/breweries.component';
import { BreweryComponent } from './container/brewery/brewery.component';
import {CategoriesService} from './service/categories.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BeersTableComponent } from './component/beers-table/beers-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    LayoutComponent,
    BeerComponent,
    BreweriesComponent,
    BreweryComponent,
    BeersTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatListModule,
    MatChipsModule,
  ],
  providers: [
    BeersService,
    ElementsService,
    BreweriesService,
    CategoriesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
