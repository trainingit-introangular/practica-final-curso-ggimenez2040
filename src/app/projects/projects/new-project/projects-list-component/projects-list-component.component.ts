import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectApi } from '../../../../shared/models/project-api.model';

@Component({
  selector: 'app-projects-list-component',
  templateUrl: './projects-list-component.component.html',
  styleUrls: ['./projects-list-component.component.css']
})
export class ProjectsListComponentComponent implements OnInit {
  @Input() public projects: ProjectApi[] = [];
  @Output() public deleteProjects = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public deleteAllsProjects() {
    this.deleteProjects.emit('');
  }
}
