import {Component} from '@angular/core';
import {RobotInfoComponent} from './robot-info/robot.info.component';
import {RobotInfoService} from './robot.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  providers: [RobotInfoService],
  // directives: [...ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'basic app';
}
