import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCitoyenComponent } from './detail-citoyen.component';

describe('DetailCitoyenComponent', () => {
  let component: DetailCitoyenComponent;
  let fixture: ComponentFixture<DetailCitoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCitoyenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
