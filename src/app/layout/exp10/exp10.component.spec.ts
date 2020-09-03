import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp10Component } from './exp10.component';

describe('Exp10Component', () => {
  let component: Exp10Component;
  let fixture: ComponentFixture<Exp10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exp10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
