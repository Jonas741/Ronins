import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { Logger } from "./logger.service";
import { AuthenticationService } from "./authentication.service";
import { NotificationsService } from "./notifications.service";

import { Notification } from "../models/notification";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _logger: Logger,
    private _authService: AuthenticationService,
    private _notifier: NotificationsService) { }

  public canActivate(): boolean {
    if (!this._authService.IsAuthenticated) {
      this._logger.warn("Wx000001", "AUTH GUARD DENIED ACCESS");
      this._notifier.add(new Notification("warning", "Access Denied."));
    }

    return this._authService.IsAuthenticated;
  }
}
