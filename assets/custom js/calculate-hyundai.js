// just realized that the variables shouldnt be renamed because of the scope, but too late to realize
function tucsonCalculate() {
  let tucsonPercent = document.getElementById("tucson-percentage").value;
  let tucsonMonth = document.getElementById("tucson-months").value;
  let result;
  const cost = 1715000;

  result = cost * 1.06 - cost * tucsonPercent;
  let financed = separateComma(result);
  result = separateComma(result / tucsonMonth);

  document.getElementById("tucson-amount-financed").textContent = financed;
  document.getElementById("tucson-per-month").textContent = result;
}

function crvCalculate() {
  let crvPercent = document.getElementById("crv-percentage").value;
  let crvMonth = document.getElementById("crv-months").value;
  let result;
  const cost = 2238000;

  result = cost * 1.06 - cost * crvPercent;
  let financed = separateComma(result);
  result = separateComma(result / crvMonth);

  document.getElementById("crv-amount-financed").textContent = financed;
  document.getElementById("crv-per-month").textContent = result;
}
function accordCalculate() {
  let accordPercent = document.getElementById("accord-percentage").value;
  let accordMonth = document.getElementById("accord-months").value;
  let result;
  const cost = 2350000;

  result = cost * 1.06 - cost * accordPercent;
  let financed = separateComma(result);
  result = separateComma(result / accordMonth);

  document.getElementById("accord-amount-financed").textContent = financed;
  document.getElementById("accord-per-month").textContent = result;
}
function brioCalculate() {
  let brioPercent = document.getElementById("brio-percentage").value;
  let brioMonth = document.getElementById("brio-months").value;
  let result;
  const cost = 808000;

  result = cost * 1.06 - cost * brioPercent;
  let financed = separateComma(result);
  result = separateComma(result / brioMonth);

  document.getElementById("brio-amount-financed").textContent = financed;
  document.getElementById("brio-per-month").textContent = result;
}

function separateComma(val) {
  // remove sign if negative
  var sign = 1;
  if (val < 0) {
    sign = -1;
    val = -val;
  }
  // trim the number decimal point if it exists
  let num = val.toString().includes(".")
    ? val.toString().split(".")[0]
    : val.toString();
  let len = num.toString().length;
  let result = "";
  let count = 1;

  for (let i = len - 1; i >= 0; i--) {
    result = num.toString()[i] + result;
    if (count % 3 === 0 && count !== 0 && i !== 0) {
      result = "," + result;
    }
    count++;
  }

  // add number after decimal point
  // return result with - sign if negative
  return sign < 0 ? "-" + result : result;
}
