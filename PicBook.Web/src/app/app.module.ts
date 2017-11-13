import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Configuration } from "./app.constants";
import { routing, appRoutingProviders } from "./app.routes";

import { SecurityService } from './services/security.service';
import { NotificationsService } from "./services/notifications.service";
import { Logger } from "./services/logger.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    Configuration,
    SecurityService,
    NotificationsService,
    Logger,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
