import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { NewProjectFormComponentComponent } from './projects/new-project/new-project-form-component/new-project-form-component.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectsListComponentComponent } from './projects/new-project/projects-list-component/projects-list-component.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponentComponent } from './projects/viewer-project/dashboard-component/dashboard-component.component';
import { FilterProjectsFormComponentComponent } from './projects/viewer-project/filter-projects-form-component/filter-projects-form-component.component';
import { ViewerProjectFormComponentComponent } from './projects/viewer-project/viewer-project-form-component/viewer-project-form-component.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerProjectComponent,
    NewProjectComponent,
    DashboardComponentComponent,
    FilterProjectsFormComponentComponent,
    ViewerProjectFormComponentComponent,
    ProjectsListComponentComponent,
    NewProjectFormComponentComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule, ReactiveFormsModule]
})
export class ProjectsModule {}
