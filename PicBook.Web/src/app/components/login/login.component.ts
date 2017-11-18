import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "../../services/authentication.service";
import { SecurityService } from "../../services/security.service";
import { Logger } from "../../services/logger.service";

import { User } from "../../models/user";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AuthenticationService],
})

export class LoginComponent implements OnInit {

  public hidden: boolean;

  constructor(
    private _authService: AuthenticationService,
    private _secService: SecurityService,
    private _logger: Logger,
    private _router: Router
  ) {
    this.hidden = false;
  }

  ngOnInit() {

  }

  googleLogin() {
    this._authService.externalLogin("google").subscribe(
      data => {
        const user = new User();
        const extRes = data as any;

        user.email = extRes.email;
        user.name = extRes.name;
        user.provider = extRes.provider;
        user.userIdentifier = extRes.uid;

        this._secService.login(user).subscribe(
          d => {
            this._logger.debug("0x000002", "External login successful via google.", d);
            this._router.navigate(["/gallery"]);
          }
        );
      },
      error => {
        this._logger.error("Ex000002", "Error in external login.", error);
      }
    );
  }

  facebookLogin() {
      this._authService.externalLogin("facebook").subscribe(
          data => {
              const user = new User();
              const extRes = data as any;

              user.email = extRes.email;
              user.name = extRes.name;
              user.provider = extRes.provider;
              user.userIdentifier = extRes.uid;

              this._secService.login(user).subscribe(
                  d => {
                      this._logger.debug("0x000002", "External login successful via facebook.", d);
                      this._router.navigate(["/gallery"]);
                  }
              );
          },
          error => {
              this._logger.error("Ex000002", "Error in external login.", error);
          }
      );
  }
}
