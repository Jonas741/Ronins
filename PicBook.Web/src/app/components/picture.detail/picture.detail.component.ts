import { Component, OnInit, Input } from "@angular/core";

import { DataService } from "../../services/data.service";

import { Picture } from "../../models/picture";

@Component({
  selector: "picture-detail",
  templateUrl: "./picture.detail.component.html",
  styleUrls: ["./picture.detail.component.css"]
})
export class PictureDetailComponent implements OnInit {

  @Input() inputPicture: Picture;

  constructor(private _dataService: DataService)
  { }

  ngOnInit() {

  }
}
