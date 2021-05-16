import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScategoryComponent } from './create-scategory.component';

describe('CreateScategoryComponent', () => {
  let component: CreateScategoryComponent;
  let fixture: ComponentFixture<CreateScategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateScategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
