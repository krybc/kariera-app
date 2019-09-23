import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersTableComponent } from './beers-table.component';

describe('BeersTableComponent', () => {
  let component: BeersTableComponent;
  let fixture: ComponentFixture<BeersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
