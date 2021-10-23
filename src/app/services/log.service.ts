import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: '',
    text: '',
    date: null,
  });
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   {
    //     id: '1',
    //     text: 'Generated component',
    //     date: new Date('12/15/2020 12:00:10'),
    //   },
    //   { id: '2', text: 'Added markup', date: new Date('12/16/2020 14:00:15') },
    // ];

    this.logs = [];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updateLog(updLog: Log) {
    const idxForRemoval = this.logs.findIndex((log) => log.id === updLog.id);
    this.logs.splice(idxForRemoval, 1);
    this.logs.unshift(updLog);
  }

  deleteLog(log: Log) {
    const idxForRemoval = this.logs.findIndex((cur) => log.id === cur.id);
    this.logs.splice(idxForRemoval, 1);
  }

  clearState() {
    this.stateSource.next(true);
  }
}
