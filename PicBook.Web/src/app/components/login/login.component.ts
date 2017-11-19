import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "../../services/authentication.service";
import { SecurityService } from "../../services/security.service";
import { Logger } from "../../services/logger.service";
import { NotificationsService } from "../../services/notifications.service";

import { User } from "../../models/user";
import { Notification } from "../../models/notification";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AuthenticationService],
})

export class LoginComponent implements OnInit {

  public get hidden(): boolean {
    return this._secService.IsAuthenticated;
  }

  constructor(
    private _authService: AuthenticationService,
    private _secService: SecurityService,
    private _logger: Logger,
    private _router: Router,
    private _notifier: NotificationsService
  ) { }

  ngOnInit() {

  }

  public login(provider: string): void {
    this._authService.externalLogin(provider).subscribe(
      data => {
        const user = new User();
        const extRes = data as any;

        user.email = extRes.email;
        user.name = extRes.name;
        user.provider = extRes.provider;
        user.userIdentifier = extRes.uid;

        this._secService.login(user).subscribe(
          res => {
            this._logger.debug("0x000200", `External login successful via ${provider}.`, res);
            this._notifier.add(new Notification("success", "Login successful."));
            localStorage.setItem("token", (res as any).data.value.userId);
            this._router.navigate(["/gallery"]);
          }
        );
      },
      error => {
        this._logger.error("Ex000200", "Error in external login.", error);
      }
    );
  }
}
