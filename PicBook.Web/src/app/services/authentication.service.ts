import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";

import { Logger } from "./logger.service";
import { SecurityService } from "./security.service";
import { Configuration } from "../app.constants";
import { AuthService } from "angular2-social-login";

@Injectable()
export class AuthenticationService {

  constructor(
    private _logger: Logger,
    private _configuration: Configuration,
    private _externalAuth: AuthService,
    private _router: Router,
    private _secService: SecurityService) { }

  public externalLogin(provider: string): Observable<Object> {
    return this._externalAuth.login(provider);
  }

  public logout(): void {
    this._externalAuth.logout().subscribe(
      data => {
        this._logger.debug("0x000003", "External logout successful.", data);
        localStorage.removeItem("token");
      },
      error => {
        this._logger.debug("Ex000003", "External logout failed.", error);
      }
    )
  }
}
