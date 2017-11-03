import { Injectable, Inject } from '@angular/core';
import { LogLevel } from './log-level.enum';
import * as format from 'date-fns/format';
import { LOG_LEVEL_TOKEN } from './app.tokens';
import { LoggerService } from './logger-service';

@Injectable()
export class AnotherLoggerService extends LoggerService {

  log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getLogMsg(logLevel, msg);
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
    }
  }

  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) {
    super(logLevel);
  }

  private getLogMsg(logLevel: LogLevel, msg: string) {
    return `[${(LogLevel[logLevel])}] - ${msg}`;
  }

}
