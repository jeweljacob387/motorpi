import { Component, OnInit } from '@angular/core';
import { Device } from '../device-card/device.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  devices: Array<Device> = [
    {
      type: 'Water Pump',
      title: 'Submersible Well Pumb',
      id: 'water_pump_main'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
