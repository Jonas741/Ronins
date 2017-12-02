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

  //UNUSED

  //public async validateToken(): Promise<boolean> {
  //  let ret = true;
  //  const accToken = localStorage.getItem("acc_token");
  //  const provider = localStorage.getItem("external_login_provider");

  //  if (!accToken || !provider) {
  //    this._logger.error("Ex111100", "Access token or provider not found in local storage.");
  //    return ret;
  //  }

  //  let url = "";

  //  if (provider === "facebook") {
  //    url = this._configuration.FacebookTokenValidationUrl + accToken;
  //  } else if (provider === "google") {
  //    url = this._configuration.GoogleTokenValidationUrl + accToken;
  //  }

  //  await this._http.get(url)
  //    .subscribe(res => {
  //      this._logger.debug("0x000209", "Token validation was successful.", res);
  //      ret = true;
  //    }, err => {
  //      const errJson = JSON.parse(err._body);

  //      if (provider === "facebook") {
  //        if (errJson.error.message !== "Invalid OAuth access token.") {
  //          this.getExternalAccessToken(provider).subscribe(res => {
  //            localStorage.setItem("acc_token", (res as any).token);
  //            this._logger.debug("0x709000", "Refreshing external access token was successful.", res);
  //            ret = true;
  //          }, error => {
  //            this._logger.error("Ex709000", "Error in refreshing external token.", error);
  //          });
  //        } else {
  //          this._logger.error("Ex709001", "Invalid access token.");
  //        }
  //      } else if (provider === "google") {
  //        if (errJson.error_description !== "Invalid Value") {
  //          this.getExternalAccessToken(provider).subscribe(res => {
  //            localStorage.setitem("acc_token", (res as any).token);
  //            this._logger.debug("0x709000", "Refreshing external access token was successful.", res);
  //            ret = true;
  //          }, error => {
  //            this._logger.error("Ex709000", "Error in refreshing external token.", error);
  //          });
  //        } else {
  //          this._logger.error("Ex709001", "Invalid access token.");
  //        }
  //      }
  //    });

  //  return ret;
  //}
}
