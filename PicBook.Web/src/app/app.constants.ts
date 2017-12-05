import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {

  public get Server(): string {
    if (window.location.host === "localhost:44301") {
      return 'https://localhost:44301/';
    }
    return window.location.protocol + "//" + window.location.host + "/";
  }

  public get IsDevEnvironment(): boolean {
    return window.location.host === "localhost:44301";
  }

  public ApiUrl: string = "api/";
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}
