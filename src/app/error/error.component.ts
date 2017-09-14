/**
 * Created by zy on 2017/9/14.
 */
import {ActivatedRoute, Data} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorMessageComponent implements OnInit {
  errorMessage: string = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data['errorMessage']
    })
  }

}
