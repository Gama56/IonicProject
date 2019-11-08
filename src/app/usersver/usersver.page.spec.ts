import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersverPage } from './usersver.page';

describe('UsersverPage', () => {
  let component: UsersverPage;
  let fixture: ComponentFixture<UsersverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
