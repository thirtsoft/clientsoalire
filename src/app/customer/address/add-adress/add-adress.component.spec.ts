import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdressComponent } from './add-adress.component';

describe('AddAdressComponent', () => {
  let component: AddAdressComponent;
  let fixture: ComponentFixture<AddAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
