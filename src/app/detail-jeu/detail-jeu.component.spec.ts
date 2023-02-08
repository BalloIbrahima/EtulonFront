import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJeuComponent } from './detail-jeu.component';

describe('DetailJeuComponent', () => {
  let component: DetailJeuComponent;
  let fixture: ComponentFixture<DetailJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailJeuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
