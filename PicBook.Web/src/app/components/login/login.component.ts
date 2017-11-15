import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  providers: [AuthenticationService],
})

export class LoginComponent implements OnInit {

  public hidden: boolean;

  constructor(private _authService: AuthenticationService) {
    this.hidden = false;
  }

  ngOnInit() {

  }

  googleLogin() {
    this._authService.externalLogin("google");
  }

  facebookLogin() {
    this._authService.externalLogin("facebook");
  }
}
