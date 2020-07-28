import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectsFormComponentComponent } from './filter-projects-form-component.component';

describe('FilterProjectsFormComponentComponent', () => {
  let component: FilterProjectsFormComponentComponent;
  let fixture: ComponentFixture<FilterProjectsFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProjectsFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProjectsFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
