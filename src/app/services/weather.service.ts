import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather() {
    return this.http.get('https://api.hgbrasil.com/weather/?format=jsonp&cid=BRXX0232')
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log('HANDLE ERROR ->');
    console.error(error); // log to console instead
    return Promise.reject(error);
  }
}
