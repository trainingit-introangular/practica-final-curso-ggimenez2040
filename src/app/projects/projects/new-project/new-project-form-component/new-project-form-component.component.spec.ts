import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectFormComponentComponent } from './new-project-form-component.component';

describe('NewProjectFormComponentComponent', () => {
  let component: NewProjectFormComponentComponent;
  let fixture: ComponentFixture<NewProjectFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
