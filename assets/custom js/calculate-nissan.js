// just realized that the variables shouldnt be renamed because of the scope, but too late to realize
function zCalculate() {
  let zPercent = document.getElementById("z-percentage").value;
  let zMonth = document.getElementById("z-months").value;
  let result;
  const cost = 2779000;

  result = cost * 1.06 - cost * zPercent;
  let financed = separateComma(result);
  result = separateComma(result / zMonth);

  document.getElementById("z-amount-financed").textContent = financed;
  document.getElementById("z-per-month").textContent = result;
}

function jukeCalculate() {
  let jukePercent = document.getElementById("juke-percentage").value;
  let jukeMonth = document.getElementById("juke-months").value;
  let result;
  const cost = 1560000;

  result = cost * 1.06 - cost * jukePercent;
  let financed = separateComma(result);
  result = separateComma(result / jukeMonth);

  document.getElementById("juke-amount-financed").textContent = financed;
  document.getElementById("juke-per-month").textContent = result;
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
function cretaCalculate() {
  let cretaPercent = document.getElementById("creta-percentage").value;
  let cretaMonth = document.getElementById("creta-months").value;
  let result;
  const cost = 998000;

  result = cost * 1.06 - cost * cretaPercent;
  let financed = separateComma(result);
  result = separateComma(result / cretaMonth);

  document.getElementById("creta-amount-financed").textContent = financed;
  document.getElementById("creta-per-month").textContent = result;
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
