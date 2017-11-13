import { Injectable } from "@angular/core";
import { Logger } from "./logger.service"

@Injectable()
export class SecurityService {

  constructor(private _logger: Logger) {

  }
}
