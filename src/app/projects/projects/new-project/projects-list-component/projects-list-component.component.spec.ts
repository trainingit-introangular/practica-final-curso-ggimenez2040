import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsListComponentComponent } from './projects-list-component.component';

describe('ProjectsListComponentComponent', () => {
  let component: ProjectsListComponentComponent;
  let fixture: ComponentFixture<ProjectsListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
