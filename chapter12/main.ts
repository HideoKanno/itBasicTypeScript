// receiveWeatherInfo関数をインポート
import { WeatherInfo } from "./WeatherInfo";
import { receiveWeatherInfo } from "./weatherinfo-receiver";

// アクセス先URLの基本部分の変数を用意
const weatherinfoUrl = "http://api.openweathermap.org/data/2.5/weather";
// クエリパラメータの元データとなるオブジェクトリテラルを用意
const params: {
  lang: string,
  q: string,
  appId: string
} = 
{
  // 言語設定のクエリパラメータ
  lang: "ja",
  // 都市を表すクエリパラメータ
  q: "Sendai",
  // APIキーのクエリパラメータ
  appId: "ca69abfb308ecbbea2e072b7fdee40aa"
}

// クエリパラメータを生成
const queryParams = new URLSearchParams(params);
// 実際にアクセスするURLを生成
const urlFull = `${weatherinfoUrl}?${queryParams}`;
// receiveWeatherInfo関数を実行
const promise = receiveWeatherInfo(urlFull);

// 非同期処理が成功した場合の処理を定義
promise.then(
  function(weatherInfo: WeatherInfo) {
    // WeatherInfoオブジェクトから必要情報を取得して表示文字列を生成
    const message = `現在の${weatherInfo.cityName}の天気は、${weatherInfo.weatherDesc}です。\n緯度は${weatherInfo.latitude}で経度は${weatherInfo.longitude}です。`;
    console.log(message);
  }
);

// 非同期処理がエラーとなった場合の処理を定義
promise.catch(
  function(error) {
    // エラー表示
    const message = `エラーが発生しました。\nエラー内容：${error}`;
    console.log(message);
  }
);

promise.finally(
  function() {
    console.log("すべての処理が終了しました。")
  }
)