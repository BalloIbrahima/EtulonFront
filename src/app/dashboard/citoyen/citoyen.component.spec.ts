import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitoyenComponent } from './citoyen.component';

describe('CitoyenComponent', () => {
  let component: CitoyenComponent;
  let fixture: ComponentFixture<CitoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitoyenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
