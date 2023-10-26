import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SchaedualeServiceService } from '../services/schaeduale-service.service';
// import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent {
  // variables
  selectedDay: any | null = null;
  days!: any;
  startTime!: string;
  endTime!: string;

  constructor(
    private translateService: TranslateService,
    private daysService: SchaedualeServiceService
  ) {}

  ngOnInit() {
    this.days = this.daysService.days;
  }

  // day time management
  onSelect(day: any, toggle: boolean): void {
    if (toggle) {
      this.selectedDay = day;
    } else {
      this.selectedDay = null;
    }
  }



  addTimeManagement() {
    if (!this.selectedDay.timeManagement) {
      this.selectedDay.timeManagement = [];
    }
    this.selectedDay.timeManagement.push([this.startTime, this.endTime]);
    this.startTime = '';
    this.endTime = '';
  }

  removeTimeManagement(index: number) {
    this.selectedDay.timeManagement.splice(index, 1);
  }
}
