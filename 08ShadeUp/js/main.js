function randompickerbtn() {
  const randomPicker = document.getElementById("randomPicker");
  const hexData = "0123456789abcdef";
  let randomHex = ["#"];

  if (randomHex.length < 7) {
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hexData.length);
      randomHex.push(hexData[randomIndex]);
    }
  }
  randomPicker.style.backgroundColor = randomHex.toString().replaceAll(",", "");
  randomValuePara.innerText = randomHex.toString().replaceAll(",", "");
}

function hexFindbtn() {
  const hexInput = document.getElementById("hexInput");
  const colorBox = document.getElementById("color-box");
  if (hexInput.value[0] === "#" && hexInput.value.length === 7) {
    colorBox.style.backgroundColor = hexInput.value;
  } else {
    alert("Invalid Format!!! (Example: #123456)");
  }
}

function RGBFindbtn() {
  const rgbColorBox = document.getElementById("rgb-color-box");
  const RInput = document.getElementById("RInput");
  const GInput = document.getElementById("GInput");
  const BInput = document.getElementById("BInput");

  rgbColorBox.style.backgroundColor = `rgb( ${RInput.value}, ${GInput.value}, ${BInput.value})`;
}

function RangeSelector() {
  const rRange = document.getElementById("RrInput");
  const gInput = document.getElementById("GrInput");
  const bInput = document.getElementById("BrInput");
  const rangeColorBox = document.getElementById("range-color-box");

  let red = rRange.value;
  let green = gInput.value;
  let blue = bInput.value;

  rangeColorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function hexConvbtn() {
  const hex = document.getElementById("hexCInp").value;
  const hexCOut = document.getElementById("hexCOut");

  if (hex.length === 6) {
    let rgbValue = `rgb( ${parseInt(hex[0] + hex[1], 16)}, ${parseInt(
      hex[2] + hex[3],
      16
    )}, ${parseInt(hex[4] + hex[5], 16)})`;

    hexCOut.innerText = rgbValue;
  } else {
    alert("Invalid Format!!! (Example: #123456)");
  }
}

function rgbConvbtn() {
  const r = Number(document.getElementById("RCInput").value);
  const g = Number(document.getElementById("GCInput").value);
  const b = Number(document.getElementById("BCInput").value);
  const rgbCOut = document.getElementById("rgbCOut");
  rgbCOut.innerText = `#${formateToRgb(r)}${formateToRgb(g)}${formateToRgb(b)}`;
}

function formateToRgb(num) {
  let convereted = num.toString(16);
  if (convereted.length === 1) {
    return `0${convereted}`;
  } else {
    return convereted;
  }
}
