function ftrCalculate() {
  let ftrPercent = document.getElementById("ftr-percentage").value;
  let ftrMonth = document.getElementById("ftr-months").value;
  let result;
  const cost = 1674000;

  result = cost * 1.06 - cost * ftrPercent;
  let financed = separateComma(result);
  result = separateComma(result / ftrMonth);

  document.getElementById("ftr-amount-financed").textContent = financed;
  document.getElementById("ftr-per-month").textContent = result;
}
function invCalculate() {
  let invPercent = document.getElementById("inv-percentage").value;
  let invMonth = document.getElementById("inv-months").value;
  let result;
  const cost = 1542000;

  result = cost * 1.06 - cost * invPercent;
  let financed = separateComma(result);
  result = separateComma(result / invMonth);

  document.getElementById("inv-amount-financed").textContent = financed;
  document.getElementById("inv-per-month").textContent = result;
}
function viosCalculate() {
  let viosPercent = document.getElementById("vios-percentage").value;
  let viosMonth = document.getElementById("vios-months").value;
  let result;
  const cost = 980000;

  result = cost * 1.06 - cost * viosPercent;
  let financed = separateComma(result);
  result = separateComma(result / viosMonth);

  document.getElementById("vios-amount-financed").textContent = financed;
  document.getElementById("vios-per-month").textContent = result;
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
