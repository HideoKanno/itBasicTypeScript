export{}

enum Rgb{RED = 10, GREEN = 20, BLUE = 30}

function showColorSelection(name: string, color: Rgb) {
  let colorStr = "赤";
  if (color == Rgb.GREEN) {
    colorStr = "緑";
  } else {
    colorStr = "青";
  }
  console.log(`${name}さんが選んだ色：${colorStr}`);
}

showColorSelection("美知恵", Rgb.GREEN);
console.log(Rgb.RED);