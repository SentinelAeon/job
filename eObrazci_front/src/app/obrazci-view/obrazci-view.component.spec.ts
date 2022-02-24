import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrazciViewComponent } from './obrazci-view.component';

describe('ObrazciViewComponent', () => {
  let component: ObrazciViewComponent;
  let fixture: ComponentFixture<ObrazciViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrazciViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrazciViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
