import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproblemaComponent } from './editproblema.component';

describe('EditproblemaComponent', () => {
  let component: EditproblemaComponent;
  let fixture: ComponentFixture<EditproblemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproblemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditproblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
