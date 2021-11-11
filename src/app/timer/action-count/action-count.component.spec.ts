import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCountComponent } from './action-count.component';

describe('ActionCountComponent', () => {
  let component: ActionCountComponent;
  let fixture: ComponentFixture<ActionCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
