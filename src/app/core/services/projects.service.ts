import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private myProjectsApi = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpClient: HttpClient) {}

  public get projects(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.myProjectsApi);
  }

  public saveProject(nameIn: string): Observable<any> {
    return this.httpClient.post(this.myProjectsApi, { name: nameIn });
  }

  public findProject(id: number): Observable<any> {
    return this.httpClient.get<any>(this.myProjectsApi + '/' + id);
  }
}
