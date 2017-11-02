import { Component } from '@angular/core';
import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpl';

  logger: MySpecialLoggerService;

  constructor() {
    this.logger = new MySpecialLoggerService(LogLevel.TRACE);
    this.testLoggerLevel();
  }

  testLoggerLevel() {
    console.log('default ================== ' + this.logger.logLevel);
    this.logger.trace('test logging .... in trace');
    this.logger.debug('test logging .... in debug');
    this.logger.info('test logging .... in info');
    this.logger.warn('test logging .... in warn');
    this.logger.error('test logging .... in error');

    this.logger.logLevel = LogLevel.DEBUG;
    console.log('LogLevel.DEBUG ================== ' + this.logger.logLevel);
    this.logger.trace('test logging .... in trace');
    this.logger.debug('test logging .... in debug');
    this.logger.info('test logging .... in info');
    this.logger.warn('test logging .... in warn');
    this.logger.error('test logging .... in error');

    this.logger.logLevel = LogLevel.WARN;
    console.log('LogLevel.WARN ================== ' + this.logger.logLevel);
    this.logger.trace('test logging .... in trace');
    this.logger.debug('test logging .... in debug');
    this.logger.info('test logging .... in info');
    this.logger.warn('test logging .... in warn');
    this.logger.error('test logging .... in error');

    this.logger.logLevel = LogLevel.ERROR;
    console.log('LogLevel.ERROR ================== ' + this.logger.logLevel);
    this.logger.trace('test logging .... in trace');
    this.logger.debug('test logging .... in debug');
    this.logger.info('test logging .... in info');
    this.logger.warn('test logging .... in warn');
    this.logger.error('test logging .... in error');


  }
}
