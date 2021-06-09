import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealWeekComponent } from './deal-week.component';

describe('DealWeekComponent', () => {
  let component: DealWeekComponent;
  let fixture: ComponentFixture<DealWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
