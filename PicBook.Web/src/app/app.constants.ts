import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {
  public get Server(): string {
    return 'https://localhost:44301/';
    //return window.location.protocol + "//" + window.location.host + "/";
  }

  public ApiUrl: string = "api/";
  public ServerWithApiUrl = this.Server + this.ApiUrl;
  public FacebookTokenValidationUrl = "https://graph.facebook.com/v2.4/me/?access_token="
  public GoogleTokenValidationUrl = "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=";
}
