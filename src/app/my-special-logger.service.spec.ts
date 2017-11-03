import { TestBed, inject } from '@angular/core/testing';

import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';
import { LOG_LEVEL_TOKEN } from './app.tokens';

fdescribe('MySpecialLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySpecialLoggerService, { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG }]
    });
  });

  it('should be created', inject([MySpecialLoggerService], (service: MySpecialLoggerService) => {
    expect(service).toBeTruthy();
  }));

  it('로그 레벨애 따라 저장되는 로그의 수가 정확하게 일치해야 한다.',
    inject([MySpecialLoggerService], (service: MySpecialLoggerService) => {
      service.debug('test 1');
      service.debug('test 2');
      // expect(service).toBeTruthy();
      expect(service.logs.length).toEqual(2);
  }));
});
