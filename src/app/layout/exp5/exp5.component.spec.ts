import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp5Component } from './exp5.component';

describe('Exp5Component', () => {
  let component: Exp5Component;
  let fixture: ComponentFixture<Exp5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exp5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
