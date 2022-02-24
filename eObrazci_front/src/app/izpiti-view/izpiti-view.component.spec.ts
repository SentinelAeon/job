import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzpitiViewComponent } from './izpiti-view.component';

describe('IzpitiViewComponent', () => {
  let component: IzpitiViewComponent;
  let fixture: ComponentFixture<IzpitiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzpitiViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzpitiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
