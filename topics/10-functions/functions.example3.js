// functions - example with return

function getVAT(price, VAT) {
  return VAT === undefined ? price * 0.21 : (price * VAT) / 100;
}

console.log(getVAT(100));
console.log(getVAT(100, 5));
