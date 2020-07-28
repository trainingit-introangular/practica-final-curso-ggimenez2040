import { Component, OnInit } from '@angular/core';
import { NotificationsStoreService } from '../../services/notifications-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  lastNotification = '';

  constructor(private notificationsStore: NotificationsStoreService) {}

  ngOnInit(): void {
    this.notificationsStore.select$().subscribe(nota => (this.lastNotification = nota));
  }
}
