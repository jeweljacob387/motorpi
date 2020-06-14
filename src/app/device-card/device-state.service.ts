import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceStateService {

  apiBaseUrl = 'https://motorpinoderedapp.mybluemix.net';
  constructor(private http: HttpClient) { }

  getDeviceState(type, id) {
    return this.http.get(`${this.apiBaseUrl}/getDeviceState/${type}/${id}`).pipe(
      timeout(2500),
      retry(5)
    );
  }

  setDeviceState(type, id, state) {
    return this.http.post(`${this.apiBaseUrl}/setdevicestate/${type}/${id}`, { s: state }).pipe(
      timeout(2500),
      retry(5)
    );
  }

  setAutoMode(type, id, auto) {
    return this.http.post(`${this.apiBaseUrl}/setautomode/${type}/${id}`, { auto }).pipe(
      timeout(2500),
      retry(5)
    );
  }
}
