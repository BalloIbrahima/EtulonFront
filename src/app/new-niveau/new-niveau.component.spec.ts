import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNiveauComponent } from './new-niveau.component';

describe('NewNiveauComponent', () => {
  let component: NewNiveauComponent;
  let fixture: ComponentFixture<NewNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNiveauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
