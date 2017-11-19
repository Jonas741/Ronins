import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {
  public get Server(): string {
    return 'https://localhost:44301/';
    //return window.location.protocol + "//" + window.location.host + "/";
  }

  public ApiUrl: string = "api/";
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}
