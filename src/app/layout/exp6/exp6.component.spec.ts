import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp6Component } from './exp6.component';

describe('Exp6Component', () => {
  let component: Exp6Component;
  let fixture: ComponentFixture<Exp6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exp6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
