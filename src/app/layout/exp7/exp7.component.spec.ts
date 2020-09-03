import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp7Component } from './exp7.component';

describe('Exp7Component', () => {
  let component: Exp7Component;
  let fixture: ComponentFixture<Exp7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exp7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exp7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
