import { Injectable } from "@angular/core";
import { Logger } from "./logger.service"

@Injectable()
export class DataService {

  constructor(private _logger: Logger) {

  }
}
