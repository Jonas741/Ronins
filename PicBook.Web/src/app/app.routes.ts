import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./services/auth.guard";

import { GalleryComponent } from './components/gallery/gallery.component';

const appRoutes: Routes = [
  { path: "gallery", component: GalleryComponent }
];

export const appRoutingProviders: any[] = [
  AuthGuard
];

export const routing = RouterModule.forRoot(appRoutes);
