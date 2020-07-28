import { Component, OnInit } from '@angular/core';
import { NotificationsStoreService } from '../../../core/services/notifications-store.service';
import { ProjectsService } from '../../../core/services/projects.service';
import { ProjectApi } from '../../../shared/models/project-api.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public projects: ProjectApi[] = [];

  constructor(private projectsService: ProjectsService, private notificationsStore: NotificationsStoreService) {}

  ngOnInit(): void {
    this.projectsService.projects.subscribe(res => (this.projects = res as ProjectApi[]));
  }

  public saveProject(name: string) {
    this.notificationsStore.dispatch('Creamos proyecto con nombre = ' + name);

    this.projectsService.saveProject(name).subscribe(data => {
      const project: ProjectApi = data as ProjectApi;
      this.projects.push(project);
    });
  }
}
