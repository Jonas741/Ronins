import { Component, OnInit } from "@angular/core";

import { DataService } from "../../services/data.service";
import { Logger } from "../../services/logger.service";

@Component({
  selector: "gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {

  public fileCache = new Array<File>();

  constructor(
    private _dataService: DataService,
    private _logger: Logger
  ) { }

  ngOnInit() {
    this.fileCache = [];
  }

  public onImgInputChange(event: any): void {
    const files = event.target.files || event.srcElement.files;

    for (let i = 0; i < files.length; i++) {
      this.fileCache.push(files[i]);
    }
  }

  public upload(): void {
    if (this.fileCache.length !== 0) {
      this._dataService.uploadFiles("image/upload", this.fileCache)
        .subscribe(
        data => {
          this._logger.debug("0", "File uploaded", data);
        },
        err => {
          this._logger.debug("00", err.message, err);
        }
      );

      this.fileCache = [];
    }

    (document.getElementById("imgInput") as HTMLInputElement).value = "";
  }
}
