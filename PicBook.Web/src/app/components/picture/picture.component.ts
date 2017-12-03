import { Component, OnInit, Input } from "@angular/core";

import { Picture } from "../../models/picture";

@Component({
  selector: "picture",
  templateUrl: "./picture.component.html",
  styleUrls: ["./picture.component.css"]
})
export class PictureComponent implements OnInit {

  @Input() inputPicture: Picture;

  constructor() {

  }

  ngOnInit() {

  }
}
