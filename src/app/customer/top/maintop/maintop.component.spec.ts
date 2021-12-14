import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintopComponent } from './maintop.component';

describe('MaintopComponent', () => {
  let component: MaintopComponent;
  let fixture: ComponentFixture<MaintopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
