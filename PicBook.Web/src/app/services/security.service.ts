import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http, Headers, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";

import { Logger } from "./logger.service";
import { Configuration } from "../app.constants";
import { NotificationsService } from "./notifications.service";

import { User } from "../models/user";
import { Notification } from "../models/notification";

@Injectable()
export class SecurityService {

  constructor(
    private _logger: Logger,
    private _http: Http,
    private _router: Router,
    private _configuration: Configuration,
    private _notifier: NotificationsService) { }

  public get IsAuthenticated(): boolean {
    return this.retrieve("token");
  }

  public validateToken(): void {
    const accToken = localStorage.getItem("acc_token");
    const provider = localStorage.getItem("external_login_provider");
    let url = "";

    if (provider === "facebook") {
      url = this._configuration.FacebookTokenValidationUrl + accToken;
    } else if (provider === "google") {
      url = this._configuration.GoogleTokenValidationUrl + accToken;
    }

    this._http.get(url)
      .subscribe(res => {
        this._logger.debug("0x000209", "Token validation was successful.", res);
      }, err => {
        this._logger.error("Ex000209", "Error in external token validation.", err);
      });
  }

  private retrieve(key: string): any {
    const item = localStorage.getItem(key);

    if (item && item !== "undefined") {
      return JSON.parse(localStorage.getItem(key));
    }

    return null;
  }
}
