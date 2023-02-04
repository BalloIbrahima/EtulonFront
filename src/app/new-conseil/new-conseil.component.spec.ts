import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConseilComponent } from './new-conseil.component';

describe('NewConseilComponent', () => {
  let component: NewConseilComponent;
  let fixture: ComponentFixture<NewConseilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConseilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewConseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
