import { Component, OnInit, Input, Host, Optional} from '@angular/core';
import { LoggerService } from '../logger-service';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { AnotherLoggerService } from '../another-logger.service';
import { LogLevel } from '../log-level.enum';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css']
})
export class MouseTrackZoneComponent implements OnInit {
  // @Input() private logger: MySpecialLoggerService;
  // logLevel: LogLevel = LogLevel.TRACE;
  // logger: MySpecialLoggerService;

  // constructor() {
  //   this.logger = new MySpecialLoggerService(this.logLevel);
  // }

  // constructor(private logger: MySpecialLoggerService) {
  // }

  logger: LoggerService;

  constructor(
    @Host() @Optional() mySpecialLogger: MySpecialLoggerService,
    anotherLogger: AnotherLoggerService
  ) {
    this.logger = mySpecialLogger ? mySpecialLogger : anotherLogger;
  }

  ngOnInit() {
  }

  captureMousePos($event: MouseEvent) {
    // this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]} y:${pos[1]}`);
    // console.log('captureMousePos called ##########################');
  }
}
