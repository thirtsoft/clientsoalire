import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommandeComponent } from './add-commande.component';

describe('AddCommandeComponent', () => {
  let component: AddCommandeComponent;
  let fixture: ComponentFixture<AddCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
