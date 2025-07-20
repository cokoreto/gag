function calculateValue() {
  const weight = parseFloat(document.getElementById('weight').value) || 0;
  const activePlant = getActivePlantId();

  if (activePlant && plantMinWeights[activePlant] !== undefined && weight < plantMinWeights[activePlant]) {
    warnElem.textContent = `Minimum weight for ${activePlant.charAt(0).toUpperCase() + activePlant.slice(1)} is ${plantMinWeights[activePlant]} kg`;
    warnElem.style.display = 'block';
  } else {
    warnElem.textContent = '';
    warnElem.style.display = 'none';
  }

  let modifierMultiplier = 0;
  modifierMultiplier += isModifierActive('shocked') ? 99 : 0;
  modifierMultiplier += isModifierActive('frozen') ? 9 : 0;
  modifierMultiplier += isModifierActive('wet') ? 1 : 0;
  modifierMultiplier += isModifierActive('chilled') ? 1 : 0;
  modifierMultiplier += isModifierActive('choc') ? 1 : 0;
  modifierMultiplier += isModifierActive('moonlit') ? 1 : 0;
  modifierMultiplier += isModifierActive('bloodlit') ? 3 : 0;
  modifierMultiplier += isModifierActive('heavenly') ? 4 : 0;
  modifierMultiplier += isModifierActive('celestial') ? 119 : 0;
  modifierMultiplier += isModifierActive('disco') ? 124 : 0;
  modifierMultiplier += isModifierActive('zomb') ? 24 : 0;
  modifierMultiplier += isModifierActive('plasma') ? 4 : 0;
  modifierMultiplier += isModifierActive('voidtouched') ? 134 : 0;
  modifierMultiplier += isModifierActive('pollinated') ? 2 : 0;
  modifierMultiplier += isModifierActive('honeyglazed') ? 4 : 0;
  modifierMultiplier += isModifierActive('burnt') ? 3 : 0;
  modifierMultiplier += isModifierActive('cooked') ? 9 : 0;
  modifierMultiplier += isModifierActive('dawnbound') ? 149 : 0;
  modifierMultiplier += isModifierActive('meteoric') ? 124 : 0;
  modifierMultiplier += isModifierActive('molten') ? 24 : 0;
  modifierMultiplier += isModifierActive('alienlike') ? 99 : 0;
  modifierMultiplier += isModifierActive('sundried') ? 84 : 0;
  modifierMultiplier += isModifierActive('galactic') ? 119 : 0;
  modifierMultiplier += isModifierActive('windstruck') ? 1 : 0;
  modifierMultiplier += isModifierActive('paradisal') ? 99 : 0;
  modifierMultiplier += isModifierActive('twisted') ? 4 : 0;
  modifierMultiplier += isModifierActive('verdant') ? 3 : 0;
  modifierMultiplier += isModifierActive('aurora') ? 89 : 0;
  modifierMultiplier += isModifierActive('drenched') ? 4 : 0;
  modifierMultiplier += isModifierActive('cloudtouched') ? 4 : 0;
  modifierMultiplier += isModifierActive('fried') ? 7 : 0;
  modifierMultiplier += isModifierActive('sandy') ? 2 : 0;
  modifierMultiplier += isModifierActive('amber') ? 9 : 0;
  modifierMultiplier += isModifierActive('oldamber') ? 19 : 0;
  modifierMultiplier += isModifierActive('ancientamber') ? 49 : 0;
  modifierMultiplier += isModifierActive('clay') ? 2 : 0;
  modifierMultiplier += isModifierActive('ceramic') ? 29 : 0;
  modifierMultiplier += isModifierActive('friendbound') ? 69 : 0;
  modifierMultiplier += isModifierActive('tempestuous') ? 11 : 0;
  modifierMultiplier += isModifierActive('infected') ? 74 : 0;
  modifierMultiplier += isModifierActive('tranquil') ? 19 : 0;
  modifierMultiplier += isModifierActive('chakra') ? 7 : 0;
  modifierMultiplier += isModifierActive('toxic') ? 11 : 0;
  modifierMultiplier += isModifierActive('radioactive') ? 79 : 0;

  let baseValue = getBaseValueCalculated(activePlant, weight);

  let fruitMultiplier = isFruitActive('rainbow') ? 50 :
                        isFruitActive('gold') ? 20 : 1;

  let result = Math.ceil((baseValue || 0) * fruitMultiplier * (1 + modifierMultiplier));
  document.getElementById('value').innerText = `≈$${result.toLocaleString()}`;

  const formulaDiv = document.getElementById('formulaText');
  let baseConst = getBaseValueConstant(activePlant);
  let baseConstText = baseConst !== null ? baseConst : 'base';
  let fruitText = fruitMultiplier === 50 ? '50 (rainbow)' : (fruitMultiplier === 20 ? '20 (gold)' : '1');
  let activeMods = [];
  [
    ['shocked',99],['frozen',9],['wet',1],['chilled',1],['choc',1],['moonlit',1],['bloodlit',3],['heavenly',4],
    ['celestial',119],['disco',124],['zomb',24],['plasma',4],['voidtouched',134],['pollinated',2],['honeyglazed',4],
    ['burnt',3],['cooked',9],['dawnbound',149],['meteoric',124],['molten',24],
    ['alienlike',99],['sundried',84],['galactic',119],['windstruck',1],['paradisal',99],['twisted',4],['verdant',3],
    ['aurora',89],['drenched',4],['cloudtouched',4],['fried',7],['sandy',2],['amber',9],['oldamber',19],['ancientamber',49],['clay',2],
    ['ceramic',29],['friendbound', 69], ['tempestuous', 11], ['infected', 74],
    ['tranquil', 19], ['chakra', 7], ['toxic', 11], ['radioactive', 79]
  ].forEach(([id, mult]) => {
    if (isModifierActive(id)) activeMods.push(`+${mult} (${modifierLabels[id]})`);
  });
  let modsText = activeMods.length > 0 ? activeMods.join(' ') : '+0';
  let formulaStr = '';
  if (activePlant && weight > 0) {
    formulaStr = `((<b>${baseConstText}</b> × <b>${weight}</b><sup>2</sup>) × <b>${fruitText}</b>) × (1${modsText.replace(/\+/g, ' +')})`;
  } else {
    formulaStr = '';
  }
  formulaDiv.innerHTML = formulaStr;
}

function getBaseValueConstant(plantId) {
  return plantBaseValues[plantId] !== undefined ? plantBaseValues[plantId] : null;
}

function getBasePricePerKg(plantId, weight) {
  if (!plantId) return null;
  let w = weight || 1;
  let minWeight = plantMinWeights[plantId];
  let baseConst = getBaseValueConstant(plantId);
  if (minWeight !== undefined && w < minWeight) {
    return baseConst;
  } else if (baseConst !== null) {
    return baseConst * w;
  }
  return null;
}

function getBaseValueCalculated(plantId, weight) {
  if (!plantId) return null;
  let w = weight || 1;
  let minWeight = plantMinWeights[plantId];
  let baseConst = getBaseValueConstant(plantId);
  if (baseConst !== null && minWeight !== undefined) {
    return (w < minWeight) ? null : baseConst * w * w;
  }
  return w * w;
}