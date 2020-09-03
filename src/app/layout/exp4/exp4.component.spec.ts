import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp4Component } from './exp4.component';

describe('Exp4Component', () => {
  let component: Exp4Component;
  let fixture: ComponentFixture<Exp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
