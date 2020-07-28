import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsStoreService } from '../../../core/services/notifications-store.service';
import { ProjectsService } from '../../../core/services/projects.service';
import { ProjectApi } from '../../../shared/models/project-api.model';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public projects: ProjectApi[] = [];
  public projectId = '';

  constructor(
    activateRoute: ActivatedRoute,
    private projectsService: ProjectsService,
    private notificationsStore: NotificationsStoreService
  ) {
    this.projectId = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.projectsService.projects.subscribe(res => (this.projects = res as ProjectApi[]));
  }

  public findProject(id: number) {
    this.notificationsStore.dispatch('Buscando proyecto con id = ' + id.toString);

    this.projectsService.findProject(id).subscribe(data => {
      const project: ProjectApi = data as ProjectApi;
      this.projects = [];
      this.projects.push(project);
    });
  }
}
