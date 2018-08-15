import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidaFamiliarComponent } from './vida-familiar.component';

describe('VidaFamiliarComponent', () => {
  let component: VidaFamiliarComponent;
  let fixture: ComponentFixture<VidaFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidaFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidaFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
