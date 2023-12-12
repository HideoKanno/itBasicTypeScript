"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weatherinfo_receiver_1 = require("./weatherinfo-receiver");
// アクセス先URLの基本部分の変数を用意
var weatherinfoUrl = "http://api.openweathermap.org/data/2.5/weather";
// クエリパラメータの元データとなるオブジェクトリテラルを用意
var params = {
    // 言語設定のクエリパラメータ
    lang: "ja",
    // 都市を表すクエリパラメータ
    q: "Sendai",
    // APIキーのクエリパラメータ
    appId: "ca69abfb308ecbbea2e072b7fdee40aa"
};
// クエリパラメータを生成
var queryParams = new URLSearchParams(params);
// 実際にアクセスするURLを生成
var urlFull = "".concat(weatherinfoUrl, "?").concat(queryParams);
// receiveWeatherInfo関数を実行
var promise = (0, weatherinfo_receiver_1.receiveWeatherInfo)(urlFull);
// 非同期処理が成功した場合の処理を定義
promise.then(function (weatherInfo) {
    // WeatherInfoオブジェクトから必要情報を取得して表示文字列を生成
    var message = "\u73FE\u5728\u306E".concat(weatherInfo.cityName, "\u306E\u5929\u6C17\u306F\u3001").concat(weatherInfo.weatherDesc, "\u3067\u3059\u3002\n\u7DEF\u5EA6\u306F").concat(weatherInfo.latitude, "\u3067\u7D4C\u5EA6\u306F").concat(weatherInfo.longitude, "\u3067\u3059\u3002");
    console.log(message);
});
// 非同期処理がエラーとなった場合の処理を定義
promise.catch(function (error) {
    // エラー表示
    var message = "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\n\u30A8\u30E9\u30FC\u5185\u5BB9\uFF1A".concat(error);
    console.log(message);
});
promise.finally(function () {
    console.log("すべての処理が終了しました。");
});
