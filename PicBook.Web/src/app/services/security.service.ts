import { Injectable } from "@angular/core";
import { Logger } from "./logger.service";
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { Configuration } from "../app.constants";

@Injectable()
export class SecurityService {

  constructor(private _logger: Logger, private _http: Http, private _router: Router, private _configuration: Configuration) {

  }

  public get IsAuthenticated() {
    return true;
  }

  externalLogin(provider: string) {
    const externalProviderUrl = this._configuration.ServerWithApiUrl + "Account/Login" + provider;
    let self = this as SecurityService;

    let w = window.open(externalProviderUrl, "Authenticate Account", "location=0,status=0,width=600,height=750");

    w.addEventListener("beforeunload", onbeforeunload = ev => {
      self._router.navigate(["/gallery"]);
    });
  }
}
