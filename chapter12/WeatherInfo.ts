// 天気情報を表すクラス
export class WeatherInfo {
  // 天気情報JSONデータオブジェクト
  private _weatherInfoJSON: WeatherInfoJSON;

  // コンストラクタ
  constructor(weatherInfoJSON: WeatherInfoJSON) {
    this._weatherInfoJSON = weatherInfoJSON;
  }

  // 都市名を得るGetter
  get cityName() {
    return this._weatherInfoJSON.name;
  }

  // 緯度情報を得るGetter
  get latitude() {
    return this._weatherInfoJSON.coord.lat;
  }

  // 経度情報を得るGetter
  get longitude() {
    return this._weatherInfoJSON.coord.lon;
  }

  // 天気情報を得るGetter
  get weatherDesc() {
    return this._weatherInfoJSON.weather[0].description;
  }
}

interface WeatherInfoJSON {
  coord: {
    lon: number,
    lat: number
  },
  weather: {id: number, main: string, description: string, icon: string}[],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}