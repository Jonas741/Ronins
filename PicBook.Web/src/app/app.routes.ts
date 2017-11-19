import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./services/auth.guard";

import { GalleryComponent } from './components/gallery/gallery.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const appRoutes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "gallery", component: GalleryComponent }
];

export const appRoutingProviders: any[] = [
  AuthGuard
];

export const routing = RouterModule.forRoot(appRoutes);
