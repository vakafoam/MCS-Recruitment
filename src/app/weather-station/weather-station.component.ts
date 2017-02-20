import { Component } from '@angular/core';

import { Meteodata } from './meteodata';

@Component({

    templateUrl: './weather-station.html',
    styleUrls: ['./weather-station.css']
})
export class WeatherStationComponent {
	private data: Meteodata;
}
