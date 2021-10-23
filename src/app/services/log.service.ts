import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated component',
        date: new Date('12/15/2020 12:00:10'),
      },
      { id: '2', text: 'Added markup', date: new Date('12/16/2020 14:00:15') },
    ];
  }

  getLogs() {
    return this.logs;
  }
}
