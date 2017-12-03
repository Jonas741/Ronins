import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { ShareButtonModule } from 'ngx-sharebuttons';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PictureComponent } from './components/picture/picture.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PictureDetailComponent } from './components/picture.detail/picture.detail.component';

import { routing, appRoutingProviders } from "./app.routes";
import { AuthenticationService } from "./services/authentication.service";
import { NotificationsService } from "./services/notifications.service";
import { Logger } from "./services/logger.service";
import { DataService } from "./services/data.service";
import { Configuration } from "./app.constants";

let providers = {
  "google": {
    "clientId": "934707524700-kpbb78g76d522r88uhn30bn5ngmt0h3m.apps.googleusercontent.com"
  },
  "facebook": {
    "clientId": "1932254340430320",
    "apiVersion": "v2.4"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalleryComponent,
    NotificationComponent,
    PictureComponent,
    WelcomeComponent,
    PictureDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    Angular2SocialLoginModule,
    ShareButtonModule.forRoot()
  ],
  providers: [
    Configuration,
    NotificationsService,
    Logger,
    appRoutingProviders,
    AuthenticationService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
