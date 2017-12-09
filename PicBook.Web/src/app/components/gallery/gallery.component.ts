import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { List } from "linqts";
import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { DataService } from "../../services/data.service";
import { Logger } from "../../services/logger.service";
import { NotificationsService } from "../../services/notifications.service";
import { AuthenticationService } from "../../services/authentication.service";

import { Picture } from "../../models/picture";
import { User } from "../../models/user";
import { Notification } from "../../models/notification";

@Component({
  selector: "gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {

  public fileCache = new Array<File>();
  public pictures = new Array<Picture>();
  public publicPictures = new Array<Picture>();
  public isPublicUpload = false;
  public currentPicture: Picture;
  public anonymus: boolean;

  constructor(
    private _dataService: DataService,
    private _logger: Logger,
    private _notifier: NotificationsService,
    private _authService: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit() {
    const token = localStorage.getItem("acc_token");

    this.fileCache = [];
    this.pictures = [];
    this.publicPictures = [];
    this.currentPicture = null;
    this.anonymus = token == null;
    this.fetchPictures();
  }

  private fetchPictures(): void {
    const userId = localStorage.getItem("uid");
    let url = "";

    if (userId == null) {
      return;
    } else {
      url = `images/${userId}`;
    }

    this._dataService.getAll<Picture>(url)
      .subscribe(res => {
        this._logger.debug("0x000400", "Picture metadata fetched successfully.", res);

        const resultData: Array<Picture> = (res as any).data;
        this.pictures = new List(resultData).Where(x => x.userIdentifier === userId).ToArray();
      });
  }

  public search(term: string): void {
    this._dataService.getAll<Picture>(`images/search/${term}`)
      .subscribe(res => {
        this._logger.debug("0x007600", "Picture metadata fetched successfully.", res);

        const resultData: Array<Picture> = (res as any).data;
        this.publicPictures = resultData;
      });
  }

  public onImgInputChange(event: any): void {
    const files = event.target.files || event.srcElement.files;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type !== "image/gif" && files[i].type !== "image/png" && files[i].type !== "image/jpeg" && files[i].type !== "image/bmp" && files[i].type !== "image/webp") {
        this._notifier.add(new Notification("warning", "File type mismatch."));
        this.fileCache = [];
      } else if (files[i].size > 4000000) {
        this._notifier.add(new Notification("warning", "File is too large. The maximal allowed size is 4MBs."));
        this.fileCache = [];
      } else {
        this.fileCache.push(files[i]);
        this.currentPicture = null;
      }
    }
  }

  public upload(): void {
    if (this.fileCache.length !== 0) {
      const userId = localStorage.getItem("uid");

      this._dataService.uploadFiles("images/upload", this.fileCache, this.isPublicUpload, userId)
        .subscribe(data => {
          this._logger.debug("0x000300", "File uploaded", data);
          this._notifier.add(new Notification("success", "Upload successful"));
          this.fetchPictures();
          this.currentPicture = null;
        }, err => {
          this._logger.debug("Ex000300", err.message, err);
          this._notifier.add(new Notification("error", "Error in uploading"));
        });

      this.fileCache = [];
    }

    (document.getElementById("imgInput") as HTMLInputElement).value = "";
  }

  public removeFile(f: File): void {
    this.fileCache = this.fileCache.filter(file => file !== f);
  }

  public setCurrentPicture(pic: Picture) {
    this.currentPicture = pic;
  }

  public closeDetail(event): void {
    this.currentPicture = null;
    this.fetchPictures();
  }
}
