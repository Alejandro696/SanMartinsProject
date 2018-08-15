import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximasComponent } from './maximas.component';

describe('MaximasComponent', () => {
  let component: MaximasComponent;
  let fixture: ComponentFixture<MaximasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaximasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
