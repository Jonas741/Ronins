import { Injectable } from "@angular/core";
import { Response, Headers, Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { Observer } from 'rxjs/Observer';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { Configuration } from "../app.constants";
import { Logger } from "./logger.service";
import { NotificationsService } from "./notifications.service";
import { AuthenticationService } from "./authentication.service";
import { Notification } from "../models/notification";

@Injectable()
export class DataService {

  constructor(
    private _logger: Logger,
    private _http: Http,
    private _configuration: Configuration,
    private _notifier: NotificationsService,
    private _authService: AuthenticationService) { }

  public getAll<T>(action: string): Observable<Array<T>> {
    this._authService.validateToken();
    const headers = this.setHeader();

    return this._http.get(this._configuration.ServerWithApiUrl + action, { headers: headers })
      .map<Response, Array<T>>(res => res.json())
      .catch(error => this.handleError(error));
  }

  public getSingle<T>(action: string, id?: number): Observable<T> {
    const headers = this.setHeader();
    let url = this._configuration.ServerWithApiUrl + action;

    if (id)
      url += "/" + id;

    return this._http.get(url, { headers: headers })
      .map<Response, T>(res => res.json())
      .catch(error => this.handleError(error));
  }

  public add<T>(action: string, itemName: T): Observable<T> {
    const headers = this.setHeader();
    const toAdd = JSON.stringify(itemName);

    return this._http.post(this._configuration.ServerWithApiUrl + action, toAdd, { headers: headers })
      .map<Response, T>(res => res.json())
      .catch(error => this.handleError(error));
  }

  public update<T>(action: string, itemToUpdate: T): Observable<T> {
    const headers = this.setHeader();
    const toUpdate = JSON.stringify(itemToUpdate);

    return this._http.put(this._configuration.ServerWithApiUrl + action, toUpdate, { headers: headers })
      .map<Response, T>(res => res.json())
      .catch(error => this.handleError(error));
  }

  public delete<T>(action: string, id: string): Observable<T> {
    const headers = this.setHeader();

    return this._http.delete(this._configuration.ServerWithApiUrl + action + "/" + id, { headers: headers })
      .map<Response, T>(res => res.json())
      .catch(error => this.handleError(error));
  }

  public uploadFiles(action: string, files: File[]): Observable<any> {
    let self = this;
    return Observable.create((observer: Observer<number>) => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append("upload[]", files[i], files[i].name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };

      xhr.open("POST", self._configuration.ServerWithApiUrl + action, true);
      xhr.send(formData);
    });
  }

  private handleError(error: Notification) {
    this._logger.error("Ex100000", "Error occured while processing data operations.", error);
    //this._notifier.add(new Notification("error", error.message, error.errors));
    return Observable.throw(error.message);
  }

  private setHeader(): Headers {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    return headers;
  }
}
