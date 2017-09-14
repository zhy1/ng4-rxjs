import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers} from '@angular/http';
import {RobotInfo} from './robot.info';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';

@Injectable()
export class RobotInfoService {
  // private robotInfoUrl = 'http://remote.gs-robot.com:3001/show/robot/info/GS-SR-0001-0002-0000-0016';  // URL to web api

  private robotInfoUrl = 'http://remote.gs-robot.com:3001/show/robot/info/';  // URL to web api

  private post(robotInfo: RobotInfo): Observable<RobotInfo> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    // before we post to convert the robotInfo object to a string
    return this.http.post(this.robotInfoUrl, JSON.stringify(robotInfo), {headers})
      .map((res: Response) => res.json().data);
  }

  private put(robotInfo: RobotInfo): Observable<RobotInfo> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = `${this.robotInfoUrl}/${robotInfo.data}`;
    return this.http.put(url, JSON.stringify(robotInfo), {headers})
      .mapTo(robotInfo);
  }

  constructor(private http: Http) {
  }

  save(robotInfo: RobotInfo): Observable<RobotInfo> {
    if (robotInfo.data) {
      return this.put(robotInfo);
    }
    return this.post(robotInfo);
  }

  delete(robotInfo: RobotInfo): Observable<any> {
    const url = `${this.robotInfoUrl}/${robotInfo.data}`;
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.delete(url, {headers});
  }

  getRobotInfoes(): Observable<Array<RobotInfo>> {
    return this.http.get(this.robotInfoUrl)
      .map((res: Response) => res.json().data);
  }

  getRobotInfo(id: number): Observable<RobotInfo> {
    return this.http.get(this.robotInfoUrl + id)
      .map((res: Response) => res.json().data);
    // return this.getrobotInfoes()
    //   .map((robotInfoes: Array<RobotInfo>) =>
    //     robotInfoes.filter((robotInfo: RobotInfo) => robotInfo.data === id)[0]
    //   );
  }
}
