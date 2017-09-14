import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {WelcomeComponent} from './welcome/welcome.component';
// import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from './router/app.router'
import {RobotInfoService} from './robot.service'
import {ErrorMessageComponent} from './error/error.component';
import {RobotInfoComponent} from './robot-info/robot.info.component'


@NgModule({
  // moduleId: module.id,
  // selector: 'app',
  declarations: [
    // WelcomeComponent,
    AppComponent,
    ErrorMessageComponent,
    RobotInfoComponent,
  ],
  imports: [
    // platformBrowserDynamic,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RobotInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
