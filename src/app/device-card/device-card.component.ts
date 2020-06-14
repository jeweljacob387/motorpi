import { Component, OnInit, Input } from '@angular/core';
import { Device } from './device.model';
import { DeviceStateService } from './device-state.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { DialogDataModel } from '../dialogbox/dialogdata.model';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss']
})
export class DeviceCardComponent implements OnInit {

  @Input()
  device: Device;
  state: boolean;
  autoMode: boolean;
  stateLoded = false;

  constructor(private deviceService: DeviceStateService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.deviceService.getDeviceState(this.device.type, this.device.id).subscribe((resp: any) => {
      this.autoMode = resp.auto;
      this.state = resp.d.s;
      this.stateLoded = true;
    }, this.errorHandler);
  }

  onStateChange() {
    this.stateLoded = false;
    this.deviceService.setDeviceState(this.device.type, this.device.id, this.state).subscribe((resp: any) => {
      this.stateLoded = true;
      this.state = resp.d.s;
    }, this.errorHandler);
  }

  onAutoModeChange() {
    this.stateLoded = false;
    this.deviceService.setAutoMode(this.device.type, this.device.id, this.autoMode).subscribe( (resp: any) => {
      this.stateLoded = true;
      this.autoMode = resp.auto;
    }, this.errorHandler);
  }

  errorHandler = (error) => {
    const data: DialogDataModel = {
      type: 'Error',
      message: 'Sorry request timed out. Please try again later'
    };
    const dialogRef = this.matDialog.open(DialogboxComponent, {
      data
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.stateLoded = true;
      this.state = !this.state;
    });
    console.error(error);
  }

}
