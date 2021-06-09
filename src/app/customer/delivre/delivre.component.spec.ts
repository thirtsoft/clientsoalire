import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivreComponent } from './delivre.component';

describe('DelivreComponent', () => {
  let component: DelivreComponent;
  let fixture: ComponentFixture<DelivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
