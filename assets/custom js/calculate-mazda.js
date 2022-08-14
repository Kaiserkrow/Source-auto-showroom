// just realized that the variables shouldnt be renamed because of the scope, but too late to realize
function mdaCalculate() {
  let mdaPercent = document.getElementById("mda-percentage").value;
  let mdaMonth = document.getElementById("mda-months").value;
  let result;
  const cost = 1495000;

  result = cost * 1.06 - cost * mdaPercent;
  let financed = separateComma(result);
  result = separateComma(result / mdaMonth);

  document.getElementById("mda-amount-financed").textContent = financed;
  document.getElementById("mda-per-month").textContent = result;
}

function miataCalculate() {
  let miataPercent = document.getElementById("miata-percentage").value;
  let miataMonth = document.getElementById("miata-months").value;
  let result;
  const cost = 2020000;

  result = cost * 1.06 - cost * miataPercent;
  let financed = separateComma(result);
  result = separateComma(result / miataMonth);

  document.getElementById("miata-amount-financed").textContent = financed;
  document.getElementById("miata-per-month").textContent = result;
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
