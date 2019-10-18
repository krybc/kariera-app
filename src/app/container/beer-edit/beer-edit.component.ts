import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadingEnum} from '../../enum/loading.enum';
import {BeerDataProvider} from '../../data-provider/beer.data-provider';
import {BeerViewModel} from '../../model/beer/beer.view.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-beer-edit',
  templateUrl: './beer-edit.component.html',
  styleUrls: ['./beer-edit.component.scss']
})
export class BeerEditComponent implements OnInit {
  public loading: string = LoadingEnum.pending;
  public beer: BeerViewModel = null;
  public form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataProvider: BeerDataProvider,
    private messages: MatSnackBar,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataProvider
        .getById(+params.id)
        .subscribe((beer: BeerViewModel) => {
          this.beer = beer;
          this.createForm();
          this.form.patchValue(this.beer);
          this.loading = LoadingEnum.success;
        });
    });
  }

  createForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      alcohol: new FormControl(null, [Validators.required]),
      pasteurized: new FormControl(false),
      description: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.dataProvider
        .update(this.beer.applyFormValue(this.form.value))
        .subscribe(result => {
          this.router.navigate(['/beers', this.beer.id]);
        });
    } else {
      this.messages.open('Formularz wypełniony błędnie');
    }
  }
}
