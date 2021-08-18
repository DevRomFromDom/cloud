import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningIconComponent } from './planning-icon.component';

describe('PlanningIconComponent', () => {
  let component: PlanningIconComponent;
  let fixture: ComponentFixture<PlanningIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
