import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-projects-form-component',
  templateUrl: './filter-projects-form-component.component.html',
  styleUrls: ['./filter-projects-form-component.component.css']
})
export class FilterProjectsFormComponentComponent implements OnInit {
  @Output() public findProject = new EventEmitter<number>();
  public filterForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.filterForm = this.formBuilder.group({
      id: ['', [Validators.required]]
    });
  }

  public findProjectById() {
    const controlId = this.filterForm.get('id');
    this.findProject.emit(controlId.value);
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.filterForm.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
}
