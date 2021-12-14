import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooerbottomComponent } from './fooerbottom.component';

describe('FooerbottomComponent', () => {
  let component: FooerbottomComponent;
  let fixture: ComponentFixture<FooerbottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooerbottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooerbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
