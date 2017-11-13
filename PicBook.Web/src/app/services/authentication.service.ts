import { Injectable } from "@angular/core";
import { Logger } from "./logger.service"

@Injectable()
export class AuthService {

  constructor(private _logger: Logger) {

  }
}
