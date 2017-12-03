import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { AuthenticationService } from "./services/authentication.service";
import { NotificationsService } from "./services/notifications.service";

import { Notification } from "./models/notification";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        private _authService: AuthenticationService,
        private _router: Router,
        private _notifier: NotificationsService
    ) { }

    public get loginHidden(): boolean {
        return this._authService.IsAuthenticated;
    }

    public logout(): void {
        localStorage.removeItem("uid");
        localStorage.removeItem("acc_token");
        localStorage.removeItem("external_login_provider");
        this._router.navigate([""]);
        this._notifier.add(new Notification("success", "Logout successful."));
    }

    public gallery(): void {
      this._router.navigate(["/gallery"]);
    }
}
