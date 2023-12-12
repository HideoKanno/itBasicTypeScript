"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherInfo = void 0;
// 天気情報を表すクラス
var WeatherInfo = /** @class */ (function () {
    // コンストラクタ
    function WeatherInfo(weatherInfoJSON) {
        this._weatherInfoJSON = weatherInfoJSON;
    }
    Object.defineProperty(WeatherInfo.prototype, "cityName", {
        // 都市名を得るGetter
        get: function () {
            return this._weatherInfoJSON.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherInfo.prototype, "latitude", {
        // 緯度情報を得るGetter
        get: function () {
            return this._weatherInfoJSON.coord.lat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherInfo.prototype, "longitude", {
        // 経度情報を得るGetter
        get: function () {
            return this._weatherInfoJSON.coord.lon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherInfo.prototype, "weatherDesc", {
        // 天気情報を得るGetter
        get: function () {
            return this._weatherInfoJSON.weather[0].description;
        },
        enumerable: false,
        configurable: true
    });
    return WeatherInfo;
}());
exports.WeatherInfo = WeatherInfo;
