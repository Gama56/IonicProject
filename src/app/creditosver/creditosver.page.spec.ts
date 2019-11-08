import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosverPage } from './creditosver.page';

describe('CreditosverPage', () => {
  let component: CreditosverPage;
  let fixture: ComponentFixture<CreditosverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditosverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditosverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
