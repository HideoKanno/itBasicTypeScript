export{}

class Student {
  private _name: string = "";
  private _english: number = 0;
  private _math: number = 0;
  private _japanease: number = 0;

  constructor(name: string, english: number, math: number, japanease: number) {
    this._name = name;
    this._english = english;
    this._math = math;
    this._japanease = japanease;
  }

  showScoresSum() {
    const sum = this._english + this._math + this._japanease;
    console.log(`${this._name}の合計得点：${sum}`);
  }

  set english(value: number) {
    if (value < 0) {
      value = 0;
    }
    this._english = value;
  }

  get english() :number {
    return this._english;
  }
}

class Radius {
  static showCirfumference(radius: number) {
    const circumference = 2 * 3.14 * radius;
    console.log(`半径${radius}の円周の長さ：${circumference}`);
  }
}

const taro = new Student("宮本太郎", 78, 82, 85);
taro.showScoresSum();
taro.english = -20
console.log(taro.english);
console.log(taro);

Radius.showCirfumference(10);