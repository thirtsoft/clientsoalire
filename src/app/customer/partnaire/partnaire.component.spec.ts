import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnaireComponent } from './partnaire.component';

describe('PartnaireComponent', () => {
  let component: PartnaireComponent;
  let fixture: ComponentFixture<PartnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
