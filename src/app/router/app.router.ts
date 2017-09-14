/**
 * Created by zy on 2017/9/14.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import {RobotInfoComponent} from '../robot-info/robot.info.component'
import {ErrorMessageComponent} from "../error/error.component";

const appRoutes: Routes = [
  {
    path: "robot/:id", component: RobotInfoComponent, //pathMatch: 'full'
  },
  // {
  //   path: "users", component: UsersComponent, children: [
  //   {
  //     path: ":id/:name", component: UserComponent
  //   },
  // },
  {
    path: "404-NotFound", component: ErrorMessageComponent, data: {errorMessage: "404 Error on this page"}
  },
  {
    path: '**', redirectTo: '404-NotFound'
  }
]


@NgModule({
  imports: [
    //RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}


// Here we add all our routes and of course bring in the imports
// Remember to import RouterModule and export it through app.modules exports section
// where you declare this class
// NB... canActivateChild: [AuthGuardService] and canDeactivate: [CanDeactivateGuard] these are
// services which set up checks for auth-guard and deactivate before saving
//useHash is an option in older browser. Not a recommened feature unless issues with //server
