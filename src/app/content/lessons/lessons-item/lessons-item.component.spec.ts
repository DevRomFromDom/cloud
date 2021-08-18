import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsItemComponent } from './lessons-item.component';

describe('LessonsItemComponent', () => {
  let component: LessonsItemComponent;
  let fixture: ComponentFixture<LessonsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
