import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http, Headers, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
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

  public get IsAuthenticated() {
    return localStorage.getItem("userId") != null;
  }

  public login(user: User): Observable<Response> {
    const headers = this.setHeader();
    return this._http.post(this._configuration.ServerWithApiUrl + "account/login", user, { headers: headers })
      .catch(error => this.handleError(error));
  }

  private setHeader(): Headers {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    return headers;
  }

  private handleError(error: Notification) {
    this._logger.error("Ex100000", "Error occured while processing authentication operations.", error);
    this._notifier.add(new Notification(error.type, error.message, error.errors));
    return Observable.throw(error.message);
  }
}
