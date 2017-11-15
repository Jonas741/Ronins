import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http } from "@angular/http";

import { Logger } from "./logger.service";
import { Configuration } from "../app.constants";

@Injectable()
export class SecurityService {

  constructor(
    private _logger: Logger,
    private _http: Http,
    private _router: Router,
    private _configuration: Configuration) { }

  public get IsAuthenticated() {
    return true;
  }
}
