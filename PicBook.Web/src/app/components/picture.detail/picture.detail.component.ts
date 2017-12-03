import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { List } from "linqts";

import { DataService } from "../../services/data.service";
import { NotificationsService } from "../../services/notifications.service";
import { Configuration } from "../../app.constants";
import { Logger } from "../../services/logger.service";

import { Picture } from "../../models/picture";
import { Notification } from "../../models/notification";

@Component({
  selector: "picture-detail",
  templateUrl: "./picture.detail.component.html",
  styleUrls: ["./picture.detail.component.css"]
})
export class PictureDetailComponent implements OnInit {

  @Input() inputPicture: Picture;
  @Output() done: EventEmitter<string> = new EventEmitter();
  public originalPicture: Picture;
  public updateProps: Array<string>;
  public hasChange: boolean;

  constructor(
    private _dataService: DataService,
    private _configuration: Configuration,
    private _notifier: NotificationsService,
    private _logger: Logger)
  { }

  ngOnInit() {
    this.hasChange = false;
    this.updateProps = new Array<string>();
    this.addUpdateProps();
    this.originalPicture = new Picture();
    this.originalPicture.isPublic = this.inputPicture.isPublic;
  }

  public deletePicture(): void {
    this._dataService.delete("images/delete", this.inputPicture.id)
      .subscribe(res => {
        this._logger.debug("0x000770", "Image deletion was successful.", res);
        this.emitComplete();
      });
  }

  public updatePicture(): void {
    this._dataService.update("images/update", this.inputPicture)
      .subscribe(res => {
        this._logger.debug("0x000870", "Image update was successful.", res);
        this.emitComplete();
      });
  }

  public onAnyPropChange(prop: string): void {
    if (this.originalPicture[prop] != this.inputPicture[prop]) {
      this.hasChange = true;
    } else if (!new List(this.updateProps).Any(x => this.originalPicture[x] != this.inputPicture[x])) {
      this.hasChange = false;
    }
  }

  public emitComplete(): void {
    this.done.emit('complete');
  }

  private addUpdateProps(): void {
    this.updateProps.push("isPublic");
  }
}
