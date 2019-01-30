import { Component, OnInit } from '@angular/core';
import { TimezoneService } from '../_services/timezone.service';
import { Timezone } from '../_models/Timezone';

@Component({
  selector: 'app-timezone-list',
  templateUrl: './timezone-list.component.html',
  styleUrls: ['./timezone-list.component.css']
})
export class TimezoneListComponent implements OnInit {
  timezones: Timezone[];
  selectedUtc: string;

  constructor(private timezoneService: TimezoneService) { }

  ngOnInit() {
    this.timezoneService.getTimezones().subscribe(response => {
      this.timezones = response;
    }, error => {
      console.log(error);
    });
  }
}
