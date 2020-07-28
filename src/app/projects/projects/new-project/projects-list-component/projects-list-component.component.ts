import { Component, Input, OnInit } from '@angular/core';
import { ProjectApi } from '../../../../shared/models/project-api.model';

@Component({
  selector: 'app-projects-list-component',
  templateUrl: './projects-list-component.component.html',
  styleUrls: ['./projects-list-component.component.css']
})
export class ProjectsListComponentComponent implements OnInit {
  @Input() public projects: ProjectApi[] = [];

  constructor() {}

  ngOnInit(): void {}
}
