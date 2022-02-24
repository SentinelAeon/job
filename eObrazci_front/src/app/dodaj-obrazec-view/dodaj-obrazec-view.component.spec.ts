import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajObrazecViewComponent } from './dodaj-obrazec-view.component';

describe('DodajObrazecViewComponent', () => {
  let component: DodajObrazecViewComponent;
  let fixture: ComponentFixture<DodajObrazecViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajObrazecViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajObrazecViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
