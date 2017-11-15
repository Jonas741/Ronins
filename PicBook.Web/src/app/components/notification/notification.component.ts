import { Component } from "@angular/core";

import { NotificationsService } from "../../services/notifications.service";
import { Notification } from "../../models/notification";

@Component({
  selector: "notifications",
  templateUrl: "./notification.component.html"
})
export class NotificationComponent {
  public notes: Notification[];

  constructor(private _notifications: NotificationsService) {
    this.notes = new Array<Notification>();

    _notifications.noteAdded.subscribe(note => {
      if (this.notes.length < 2) {
        this.notes.push(note);
      } else {
        this.notes.pop();
        this.notes.push(note);
      }

      setTimeout(() => {
        this.hide.bind(this)(note);
      }, 5000);
    });
  }

  private hide(note: Notification) {
    let index = this.notes.indexOf(note);

    if (index >= 0) {
      this.notes.splice(index, 1);
    }
  }

  public isError(note: Notification) {
    return note.type === "error";
  }

  public isSuccess(note: Notification) {
    return note.type === "success";
  }

  public isWarning(note: Notification) {
    return note.type === "warning";
  }
}
