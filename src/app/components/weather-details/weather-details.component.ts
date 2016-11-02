import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.component.html',
  providers: [WeatherService]
})

export class WeatherDetailsComponent implements OnInit {
  r: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeathers();
  }

  getWeathers(){
    this.weatherService.getWeather()
      .subscribe(data => console.log(data), error => console.log(error));
  }
  
}
