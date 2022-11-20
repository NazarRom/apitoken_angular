import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';
@Injectable()
export class PlantillaService {
  constructor(private _http: HttpClient) {}

  accessLogin(login: Login): Observable<any> {
    var json = JSON.stringify(login);
    var header = new HttpHeaders().set('Content-Type', 'application/json');
    var request = '/Auth/Login';
    var url = environment.apiPlantilla + request;
    return this._http.post(url, json, { headers: header });
  }

  getEmpleados(): Observable<any> {
    var token = localStorage.getItem('token');
    var header = new HttpHeaders().set('Authorization', 'bearer ' + token);
    var request = "/api/Empleados"
    var url = environment.apiPlantilla + request;
    return this._http.get(url, { headers: header })
  }
}
