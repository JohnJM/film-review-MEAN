import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnereviewComponent } from './onereview.component';

describe('OnereviewComponent', () => {
  let component: OnereviewComponent;
  let fixture: ComponentFixture<OnereviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnereviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnereviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
