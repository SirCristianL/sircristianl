import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wave2Component } from './wave2.component';

describe('Wave2Component', () => {
  let component: Wave2Component;
  let fixture: ComponentFixture<Wave2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wave2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wave2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
