import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-viewer-project-form-component',
  templateUrl: './viewer-project-form-component.component.html',
  styleUrls: ['./viewer-project-form-component.component.css']
})
export class ViewerProjectFormComponentComponent implements OnInit {
  @Input() public projectId: string;
  public viewForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.viewForm = this.formBuilder.group({
      id: ['', []]
    });
  }
}
