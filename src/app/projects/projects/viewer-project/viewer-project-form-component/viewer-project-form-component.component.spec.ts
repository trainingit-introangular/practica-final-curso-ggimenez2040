import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerProjectFormComponentComponent } from './viewer-project-form-component.component';

describe('ViewerProjectFormComponentComponent', () => {
  let component: ViewerProjectFormComponentComponent;
  let fixture: ComponentFixture<ViewerProjectFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerProjectFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerProjectFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
