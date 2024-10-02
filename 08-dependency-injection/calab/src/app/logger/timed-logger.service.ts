import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TimedLoggerService extends LoggerService {

  constructor() {
    super()
   }
  override log(msg: unknown) {
    const date = Date.now();
    console.log(`${date}: ${msg}`);
  }
  override error(msg: unknown) {
    const date = Date.now();
    console.error(`${date}: ${msg}`);
  }
  override warn(msg: unknown) {
    const date = Date.now();
    console.warn(`${date}: ${msg}`);
  }
}
