import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { SecurityService } from "../../services/security.service";

//import "./login.component.css";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  providers: [SecurityService],
})

export class LoginComponent implements OnInit {

  public hidden: boolean;

  constructor(private _securityService: SecurityService) {
    this.hidden = false;
  }

  ngOnInit() {

  }

  googleLogin() {
    this._securityService.externalLogin("Google");
  }

  facebookLogin() {
    this._securityService.externalLogin("Facebook");
  }
}
