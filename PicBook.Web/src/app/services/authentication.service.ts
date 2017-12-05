import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";

import { Logger } from "./logger.service";
import { Configuration } from "../app.constants";
import { AuthService } from "angular2-social-login";
import { NotificationsService } from "./notifications.service";

import { User } from "../models/user";
import { Notification } from "../models/notification";

@Injectable()
export class AuthenticationService {

  constructor(
    private _logger: Logger,
    private _configuration: Configuration,
    private _externalAuth: AuthService,
    private _http: Http,
    private _notifier: NotificationsService) { }

  public get IsAuthenticated(): boolean {
    return this.retrieve("acc_token");
  }

  public getExternalAccessToken(provider: string): Observable<Object> {
    return this._externalAuth.login(provider);
  }

  public login(user: User): Observable<any> {
    const headers = this.setHeader();
    return this._http.post(this._configuration.ServerWithApiUrl + "account/login", user, { headers: headers })
      .map<Response, any>(res => res.json())
      .catch(error => this.handleError(error));
  }

  private setHeader(): Headers {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    return headers;
  }

  private handleError(error: Notification) {
    this._logger.error("Ex200000", "Error occured while processing authentication operations.", error);
    //this._notifier.add(new Notification("error", error.message, error.errors));
    return Observable.throw(error.message);
  }

  private retrieve(key: string): any {
    const item = localStorage.getItem(key);

    if (item && item !== "undefined") {
      return true;
    }

    return false;
  }
}
