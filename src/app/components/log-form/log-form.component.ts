import { Component, OnInit } from '@angular/core';

import { LogService } from '../../services/log.service';
import { Log } from '../../models/Log';
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
})
export class LogFormComponent implements OnInit {
  id: string = '';
  text: string = '';
  date: any;
  isNew: boolean = true;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    //Subscribe to selected log observable
    this.logService.selectedLog.subscribe((log) => {
      if (log.id !== '') {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  onSubmit() {
    //check if it's a new log
    if (this.isNew) {
      //create a new log
      const newLog = {
        id: this.generateUUID(),
        text: this.text,
        date: new Date(),
      };

      //add log
      this.logService.addLog(newLog);
    } else {
      //create a log to be updated
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date(),
      };

      //update log
      this.logService.updateLog(updLog);
    }
  }

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
