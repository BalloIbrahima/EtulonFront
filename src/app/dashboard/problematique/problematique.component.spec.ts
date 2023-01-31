import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblematiqueComponent } from './problematique.component';

describe('ProblematiqueComponent', () => {
  let component: ProblematiqueComponent;
  let fixture: ComponentFixture<ProblematiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblematiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
