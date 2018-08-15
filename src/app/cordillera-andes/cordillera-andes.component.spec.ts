import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordilleraAndesComponent } from './cordillera-andes.component';

describe('CordilleraAndesComponent', () => {
  let component: CordilleraAndesComponent;
  let fixture: ComponentFixture<CordilleraAndesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordilleraAndesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordilleraAndesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
