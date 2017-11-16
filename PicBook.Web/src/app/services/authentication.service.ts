import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Logger } from "./logger.service";
import { Configuration } from "../app.constants";
import { AuthService } from "angular2-social-login";

@Injectable()
export class AuthenticationService {

  constructor(
    private _logger: Logger,
    private _configuration: Configuration,
    private _externalAuth: AuthService,
    private _router: Router) { }

  public externalLogin(provider: string) {
    this._externalAuth.login(provider).subscribe(
      data => {
        this._logger.debug("0x000002", "External login successful via " + provider, data);
        this._router.navigate(["/gallery"]);
      },
      error => {
        this._logger.error("Ex000002", "Error in external login. " + provider, error);
      }
    )
  }

  logout() {
    this._externalAuth.logout().subscribe(
      data => {
        this._logger.debug("0x000003", "External logout successful.", data);
      },
      error => {
        this._logger.debug("Ex000003", "External logout failed.", error);
      }
    )
  }
}
