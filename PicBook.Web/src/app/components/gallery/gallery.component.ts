import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(
    private _dataService: DataService,
    private _logger: Logger,
    private _notifier: NotificationsService,
    private _authService: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit() {
    if (this._authService.validateToken()) {
      this.fileCache = [];
      this.pictures = [];
      this.fetchPictures();
    } else {
      this._notifier.add(new Notification("warning", "geci"));
      this._router.navigate([""]);
    }
  }

  private fetchPictures(): void {
    const userId = localStorage.getItem("uid");

    this._dataService.getAll<Picture>(`image/pictures/${userId}`)
      .subscribe(res => {
        this._logger.debug("0x000400", "Picture metadata fetched successfully.", res);
        this.pictures = (res as any).data;
      }, error => {
        this._logger.error("Ex000400", "Error occured while fetching picture metadata.", error);
      });
  }

  public onImgInputChange(event: any): void {
    const files = event.target.files || event.srcElement.files;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type !== "image/gif" && files[i].type !== "image/png" && files[i].type !== "image/jpeg" && files[i].type !== "image/bmp" && files[i].type !== "image/webp") {
        this._notifier.add(new Notification("warning", "File type mismatch."));
        event.target.files = [];
      } else {
        this.fileCache.push(files[i]);
      }
    }
  }

  public upload(): void {
    if (this.fileCache.length !== 0) {
      const userId = localStorage.getItem("uid");

      this._dataService.uploadFiles(`image/upload/${userId}`, this.fileCache)
        .subscribe(data => {
          this._logger.debug("0x000300", "File uploaded", data);
          this._notifier.add(new Notification("success", "Upload successful"));
          this.fetchPictures();
        }, err => {
          this._logger.debug("Ex000300", err.message, err);
          this._notifier.add(new Notification("error", "Error in uploading", err));
        });

      this.fileCache = [];
    }

    (document.getElementById("imgInput") as HTMLInputElement).value = "";
  }

  public removeFile(f: File): void {
    this.fileCache = this.fileCache.filter(file => file !== f);
  }
}
