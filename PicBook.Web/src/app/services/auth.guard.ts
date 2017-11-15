import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { Logger } from "./logger.service"
import { SecurityService } from "./security.service"

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _logger: Logger,
    private _secService: SecurityService) { }

  canActivate() {
    if (!this._secService.IsAuthenticated)
      this._logger.warn("0x000001", "AUTH GUARD DENIED ACCESS");

    return this._secService.IsAuthenticated;
  }
}
