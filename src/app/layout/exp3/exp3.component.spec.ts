import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp3Component } from './exp3.component';

describe('Exp3Component', () => {
  let component: Exp3Component;
  let fixture: ComponentFixture<Exp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
