import { Injectable } from "@angular/core";
import { Logger } from "./logger.service"

@Injectable()
export class FileService {

  constructor(private _logger: Logger) {

  }
}
