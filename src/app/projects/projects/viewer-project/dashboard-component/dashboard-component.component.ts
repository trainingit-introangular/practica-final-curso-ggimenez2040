import { Component, Input, OnInit } from '@angular/core';
import { ProjectApi } from '../../../../shared/models/project-api.model';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  @Input() public projects: ProjectApi[] = [];
  @Input() public projectId: string;

  constructor() {}

  ngOnInit(): void {}
}
