import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsStoreService {
  private lastNotification = '';
  private notifications$ = new BehaviorSubject<string>('');
  constructor() {}
  public select$ = () => this.notifications$.asObservable();
  public dispatch(notification: string) {
    this.lastNotification = notification;
    this.notifications$.next(this.lastNotification);
  }
}
