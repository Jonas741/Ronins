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

        this._authService.login(user).subscribe(
          res => {
            this._notifier.add(new Notification("success", "Login successful."));
            this._logger.debug("0x020700", "Login successful.", res);

            localStorage.setItem("uid", extRes.userId);
            localStorage.setItem("acc_token", extRes.token);
            localStorage.setItem("external_login_provider", extRes.provider);

            this._secService.validateToken(); //debug purposes only
            this._router.navigate(["/gallery"]);
          }
        );
      }, err => {
        this._logger.error("Ex020700", "Error occured in external login.", err);
        this._notifier.add(new Notification("error", "Error in login operations."));
      }
    );
  }
}
