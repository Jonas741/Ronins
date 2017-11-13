import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./services/auth.guard";

const appRoutes: Routes = [
  //{ path: "", component: WelcomeComponent },
  //{ path: "login", component: LoginComponent },
  //{ path: "registration", component: RegistrationComponent },
  //{ path: "detail/:id", component: PositionDetailComponent },
  //{ path: "mypage", component: UserComponent, canActivate: [AuthGuard] },
  //{ path: "forgotpassword", component: ForgotPasswordComponent },
  //{ path: "resetpassword", component: ResetPasswordComponent },
  //{ path: "confirmemail", component: ConfirmEmailComponent },
  //{
  //  path: "admin",
  //  component: AdminComponent,
  //  canActivate: [AuthGuard],
  //  children: [
  //    { path: "", component: TestComponent },
  //    { path: "about", component: AboutComponent }
  //  ]
  //},

];

export const appRoutingProviders: any[] = [
  AuthGuard
];
