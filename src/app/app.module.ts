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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptor} from './interceptor/request.interceptor';
import { BeerComponent } from './container/beer/beer.component';
import { BreweriesComponent } from './container/breweries/breweries.component';
import { BreweryComponent } from './container/brewery/brewery.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BeersTableComponent } from './component/beers-table/beers-table.component';
import { BooleanPipe } from './pipe/boolean.pipe';
import {ApiModule} from './api/api.module';
import {BeerDataProvider} from './data-provider/beer.data-provider';
import {BreweryDataProvider} from './data-provider/brewery.data-provider';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    LayoutComponent,
    BeerComponent,
    BreweriesComponent,
    BreweryComponent,
    BeersTableComponent,
    BooleanPipe
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
    ApiModule,
  ],
  providers: [
    BeerDataProvider,
    BreweryDataProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
