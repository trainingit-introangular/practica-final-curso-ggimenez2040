import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { NotificationsStoreService } from './notifications-store.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorHttpService implements HttpInterceptor {
  constructor(private notificationsStore: NotificationsStoreService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      filter((event: HttpEvent<any>) => event instanceof HttpResponse),
      tap((resp: HttpResponse<any>) => this.auditEvent(resp))
    );
  }
  private auditEvent(resp: HttpResponse<any>) {
    const message = `Última petición HTTP con status: ${resp.statusText}`;

    this.notificationsStore.dispatch(message);
    console.log(resp.statusText);
  }
}
