function calculateKgFromPrice() {
  const price = parseFloat(document.getElementById('priceInput').value) || 0;
  const plantId = typeof getActivePlantId === "function" ? getActivePlantId() : null;
  const baseConst = typeof getBaseValueConstant === "function" ? getBaseValueConstant(plantId) : null;
  const kgResultDiv = document.getElementById('kgResult');

  if (!plantId || !baseConst || price <= 0) {
    kgResultDiv.textContent = '';
    return;
  }

  let fruitMultiplier = 1;
  if (typeof isFruitActive === "function") {
    if (isFruitActive('rainbow')) fruitMultiplier = 50;
    else if (isFruitActive('gold')) fruitMultiplier = 20;
  }

  let modifierMultiplier = 0;
  if (typeof isModifierActive === "function") {
    [
      ['shocked',99],['frozen',9],['wet',1],['chilled',1],['choc',1],['moonlit',1],['bloodlit',3],['heavenly',4],
      ['celestial',119],['disco',124],['zomb',24],['plasma',4],['voidtouched',134],['pollinated',2],['honeyglazed',4],
      ['burnt',3],['cooked',9],['dawnbound',149],['meteoric',124],['molten',24],
      ['alienlike',99],['sundried',84],['galactic',119],['windstruck',1],['paradisal',99],['twisted',4],['verdant',3],
      ['aurora',89],['drenched',4],['cloudtouched',4],['fried',7],['sandy',2],['amber',9],['oldamber',19],['ancientamber',49],['clay',2],['ceramic',29]
    ].forEach(([id, mult]) => {
      if (isModifierActive(id)) modifierMultiplier += mult;
    });
  }

  const denominator = baseConst * fruitMultiplier * (1 + modifierMultiplier);
  if (denominator <= 0) {
    kgResultDiv.textContent = '';
    return;
  }
  const kg = Math.sqrt(price / denominator);

  if (isNaN(kg) || kg <= 0) {
    kgResultDiv.textContent = '';
    return;
  }

  kgResultDiv.textContent = `Estimated Weight: ${kg.toFixed(4)} kg`;
}

document.getElementById('priceInput').addEventListener('input', calculateKgFromPrice);

if (typeof calculateValue === "function") {
  const origCalc = calculateValue;
  window.calculateValue = function() {
    origCalc.apply(this, arguments);
    calculateKgFromPrice();
  };
}