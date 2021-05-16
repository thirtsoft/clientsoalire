import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatedialogComponent } from './matedialog.component';

describe('MatedialogComponent', () => {
  let component: MatedialogComponent;
  let fixture: ComponentFixture<MatedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
