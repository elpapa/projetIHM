import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

import { Point } from './point';
import { VelibService } from './velib.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [VelibService, Http]
})

export class AppComponent implements OnInit {

  title: string = 'My first angular2-google-maps project';
  points: Point[];

  constructor(private velibService: VelibService) { }

  getPoints(): void {
    this.velibService.getPoints().then(points => this.points = points);
  }

  ngOnInit(): void {
    this.getPoints();
  }

}
