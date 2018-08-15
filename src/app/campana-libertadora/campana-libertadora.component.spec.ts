import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanaLibertadoraComponent } from './campana-libertadora.component';

describe('CampanaLibertadoraComponent', () => {
  let component: CampanaLibertadoraComponent;
  let fixture: ComponentFixture<CampanaLibertadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanaLibertadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanaLibertadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
