import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project-form-component',
  templateUrl: './new-project-form-component.component.html',
  styleUrls: ['./new-project-form-component.component.css']
})
export class NewProjectFormComponentComponent implements OnInit {
  @Output() public createProject = new EventEmitter<string>();
  public newProjectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.newProjectForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

  public saveProject() {
    const controlName = this.newProjectForm.get('name');
    this.createProject.emit(controlName.value);
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.newProjectForm.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
}
