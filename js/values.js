function calculateValue() {
  const weight = parseFloat(document.getElementById('weight').value) || 0;
  const activePlant = getActivePlantId();

  const dawnboundBtn = document.getElementById('modbtn-dawnbound');
  if (dawnboundBtn) {
    if (activePlant === 'sunflower') {
      dawnboundBtn.disabled = false;
    } else {
      dawnboundBtn.disabled = true;
      dawnboundBtn.classList.remove('active');
    }
  }

  if (activePlant && plantMinWeights[activePlant] !== undefined && weight < plantMinWeights[activePlant]) {
    warnElem.textContent = `Minimum weight for ${activePlant.charAt(0).toUpperCase() + activePlant.slice(1)} is ${plantMinWeights[activePlant]} kg`;
    warnElem.style.display = 'block';
  } else {
    warnElem.textContent = '';
    warnElem.style.display = 'none';
  }

  let candyblossom = false, beanstalk = false, corn = false, coconut = false, easteregg = false,
  moonflower = false, starfruit = false, pepper = false, grape = false, nightshade = false, mint = false,
  glowshroom = false, bloodbanana = false, carrot = false, strawberry = false, blueberry = false, orangetulip = false,
  tomato = false, daffodil = false, watermelon = false, pumpkin = false, bamboo = false, cactus = false, apple = false,
  mushroom = false, moonmelon = false, cranberry = false, pear = false, durian = false, moonglow = false, peach = false, cacao = false, dragonfruit = false, mango = false, moonblossom = false, eggplant = false, raspberry = false, papaya = false, celestiberry = false, banana = false, passionfruit = false, soulfruit = false, moonmango = false, hive = false, rose = false, foxglove = false, purpledahlia = false, lilac = false, sunflower = false, pinklily = false, nectarine = false, emberlily = false, nectarshade = false, manuka = false, dandelion = false, lumira = false, honeysuckle = false,
  beebalm = false, nectarthorn = false, suncoil = false, crocus = false, succulent = false, violetcorn = false,
  bendboo = false, cocovine = false, dragonpepper = false,cauliflower = false, greenapple = false, avocado = false,
  pineapple = false, kiwi = false, bellpepper = false, pricklypear = false, loquat = false, feijoa = false,
  sugarapple = false, wildcarrot = false, cantaloupe = false, parasolflower = false, rosydelight = false,
  elephantears = false, stonebite = false, paradisepetal = false, horneddinoshroom = false, boneboo = false,
  fireflyfern = false, fossilight = false, boneblossom = false;

  if (activePlant) {
    eval(`${activePlant} = true`);
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

  let baseValue = 0;
  if (easteregg) {
    baseValue = (weight < plantMinWeights['easteregg']) ? null : 277.5 * weight * weight;
  }
  else if (moonflower) {
    baseValue = (weight < plantMinWeights['moonflower']) ? null : 2381 * weight * weight;
  }
  else if (starfruit) {
    baseValue = (weight < plantMinWeights['starfruit']) ? null : 1666.6 * weight * weight;
  }
  else if (pepper) {
    baseValue = (weight < plantMinWeights['pepper']) ? null : 320 * weight * weight;
  }
  else if (grape) {
    baseValue = (weight < plantMinWeights['grape']) ? null : 872 * weight * weight;
  }
  else if (nightshade) {
    baseValue = (weight < plantMinWeights['nightshade']) ? null : 13850 * weight * weight;
  }
  else if (mint) {
    baseValue = (weight < plantMinWeights['mint']) ? null : 5230 * weight * weight;
  }
  else if (glowshroom) {
    baseValue = (weight < plantMinWeights['glowshroom']) ? null : 532.5 * weight * weight;
  }
  else if (bloodbanana) {
    baseValue = (weight < plantMinWeights['bloodbanana']) ? null : 2670 * weight * weight;
  }
  else if (beanstalk) {
    baseValue = (weight < plantMinWeights['beanstalk']) ? null : 200 * weight * weight;
  }
  else if (coconut) {
    baseValue = (weight < plantMinWeights['coconut']) ? null : 2.04 * weight * weight;
  }
  else if (candyblossom) {
    baseValue = (weight < plantMinWeights['candyblossom']) ? null : 11111.111 * weight * weight;
  }
  else if (carrot) {
    baseValue = (weight < plantMinWeights['carrot']) ? null : 275 * weight * weight;
  }
  else if (strawberry) {
    baseValue = (weight < plantMinWeights['strawberry']) ? null : 175 * weight * weight;
  }
  else if (blueberry) {
    baseValue = (weight < plantMinWeights['blueberry']) ? null : 500 * weight * weight;
  }
  else if (orangetulip) {
    baseValue = (weight < plantMinWeights['orangetulip']) ? null : 300000 * weight * weight;
  }
  else if (tomato) {
    baseValue = (weight < plantMinWeights['tomato']) ? null : 120 * weight * weight;
  }
  else if (daffodil) {
    baseValue = (weight < plantMinWeights['daffodil']) ? null : 25000 * weight * weight;
  }
  else if (watermelon) {
    baseValue = (weight < plantMinWeights['watermelon']) ? null : 61.25 * weight * weight;
  }
  else if (pumpkin) {
    baseValue = (weight < plantMinWeights['pumpkin']) ? null : 64 * weight * weight;
  }
  else if (mushroom) {
    baseValue = (weight < plantMinWeights['mushroom']) ? null : 241.6 * weight * weight;
  }
  else if (bamboo) {
    baseValue = (weight < plantMinWeights['bamboo']) ? null : 250 * weight * weight;
  }
  else if (apple) {
    baseValue = (weight < plantMinWeights['apple']) ? null : 30.53 * weight * weight;
  }
  else if (corn) {
    baseValue = (weight < plantMinWeights['corn']) ? null : 10.00 * weight * weight;
  }
  else if (cactus) {
    baseValue = (weight < plantMinWeights['cactus']) ? null : 69.4 * weight * weight;
  }
  else if (cranberry) {
    baseValue = (weight < plantMinWeights['cranberry']) ? null : 2000 * weight * weight;
  }
  else if (moonmelon) {
    baseValue = (weight < plantMinWeights['moonmelon']) ? null : 280.85 * weight * weight;
  }
  else if (pear) {
    baseValue = (weight < plantMinWeights['pear']) ? null : 55.5 * weight * weight;
  }
  else if (durian) {
    baseValue = (weight < plantMinWeights['durian']) ? null : 78.19 * weight * weight;
  }
  else if (peach) {
    baseValue = (weight < plantMinWeights['peach']) ? null : 75 * weight * weight;
  }
  else if (cacao) {
    baseValue = (weight < plantMinWeights['cacao']) ? null : 171.875 * weight * weight;
  }
  else if (moonglow) {
    baseValue = (weight < plantMinWeights['moonglow']) ? null : 408.45 * weight * weight;
  }
  else if (dragonfruit) {
    baseValue = (weight < plantMinWeights['dragonfruit']) ? null : 32.99 * weight * weight;
  }
  else if (mango) {
    baseValue = (weight < plantMinWeights['mango']) ? null : 28.89 * weight * weight;
  }
  else if (moonblossom) {
    baseValue = (weight < plantMinWeights['moonblossom']) ? null : 5555.555 * weight * weight;
  }
  else if (raspberry) {
    baseValue = (weight < plantMinWeights['raspberry']) ? null : 177.5 * weight * weight;
  }
  else if (eggplant) {
    baseValue = (weight < plantMinWeights['eggplant']) ? null : 300 * weight * weight;
  }
  else if (papaya) {
    baseValue = (weight < plantMinWeights['papaya']) ? null : 111.11 * weight * weight;
  }
  else if (celestiberry) {
    baseValue = (weight < plantMinWeights['celestiberry']) ? null : 2000 * weight * weight;
  }
  else if (moonmango) {
    baseValue = (weight < plantMinWeights['moonmango']) ? null : 222.22 * weight * weight;
  }
  else if (banana) {
    baseValue = (weight < plantMinWeights['banana']) ? null : 777.77 * weight * weight;
  }
  else if (passionfruit) {
    baseValue = (weight < plantMinWeights['passionfruit']) ? null : 395 * weight * weight;
  }
  else if (soulfruit) {
    baseValue = (weight < plantMinWeights['soulfruit']) ? null : 12.4 * weight * weight;
  }
  else if (hive) {
    baseValue = (weight < plantMinWeights['hive']) ? null : 781.42 * weight * weight;
  }
  else if (rose) {
    baseValue = (weight < plantMinWeights['rose']) ? null : 5000 * weight * weight;
  }
  else if (foxglove) {
    baseValue = (weight < plantMinWeights['foxglove']) ? null : 5000 * weight * weight;
  }
  else if (purpledahlia) {
    baseValue = (weight < plantMinWeights['purpledahlia']) ? null : 522 * weight * weight;
  }
  else if (lilac) {
    baseValue = (weight < plantMinWeights['lilac']) ? null : 3899 * weight * weight;
  }
  else if (sunflower) {
    baseValue = (weight < plantMinWeights['sunflower']) ? null : 666 * weight * weight;
  }
  else if (pinklily) {
    baseValue = (weight < plantMinWeights['pinklily']) ? null : 3172 * weight * weight;
  }
  else if (nectarine) {
    baseValue = (weight < plantMinWeights['nectarine']) ? null : 4445 * weight * weight;
  }
  else if (emberlily) {
    baseValue = (weight < plantMinWeights['emberlily']) ? null : 386 * weight * weight;
  }
  else if (nectarshade) {
    baseValue = (weight < plantMinWeights['nectarshade']) ? null : 78500 * weight * weight;
  }
  else if (manuka) {
    baseValue = (weight < plantMinWeights['manuka']) ? null : 270086 * weight * weight;
  }
  else if (dandelion) {
    baseValue = (weight < plantMinWeights['dandelion']) ? null : 3141 * weight * weight;
  }
  else if (lumira) {
    baseValue = (weight < plantMinWeights['lumira']) ? null : 2370 * weight * weight;
  }
  else if (honeysuckle) {
    baseValue = (weight < plantMinWeights['honeysuckle']) ? null : 694 * weight * weight;
  }
  else if (beebalm) {
    baseValue = (weight < plantMinWeights['beebalm']) ? null : 18033.5 * weight * weight;
  }
  else if (nectarthorn) {
    baseValue = (weight < plantMinWeights['nectarthorn']) ? null : 906.56 * weight * weight;
  }
  else if (suncoil) {
    baseValue = (weight < plantMinWeights['suncoil']) ? null : 800 * weight * weight;
  }
  else if (crocus) {
    baseValue = (weight < plantMinWeights['crocus']) ? null : 333333 * weight * weight;
  }
  else if (succulent) {
    baseValue = (weight < plantMinWeights['succulent']) ? null : 1000 * weight * weight;
  }
  else if (violetcorn) {
    baseValue = (weight < plantMinWeights['violetcorn']) ? null : 5555.56 * weight * weight;
  }
  else if (bendboo) {
    baseValue = (weight < plantMinWeights['bendboo']) ? null : 479.01 * weight * weight;
  }
  else if (cocovine) {
    baseValue = (weight < plantMinWeights['cocovine']) ? null : 340 * weight * weight;
  }
  else if (dragonpepper) {
    baseValue = (weight < plantMinWeights['dragonpepper']) ? null : 2470.2 * weight * weight;
  }
  else if (cauliflower) {
    baseValue = (weight < plantMinWeights['cauliflower']) ? null : 1.60 * weight * weight;
  }
  else if (greenapple) {
    baseValue = (weight < plantMinWeights['greenapple']) ? null : 33.44 * weight * weight;
  }
  else if (avocado) {
    baseValue = (weight < plantMinWeights['avocado']) ? null : 8.32 * weight * weight;
  }
  else if (pineapple) {
    baseValue = (weight < plantMinWeights['pineapple']) ? null : 222.56 * weight * weight;
  }
  else if (kiwi) {
    baseValue = (weight < plantMinWeights['kiwi']) ? null : 110.00 * weight * weight;
  }
  else if (bellpepper) {
    baseValue = (weight < plantMinWeights['bellpepper']) ? null : 85.61 * weight * weight;
  }
  else if (pricklypear) {
    baseValue = (weight < plantMinWeights['pricklypear']) ? null : 143.27 * weight * weight;
  }
  else if (loquat) {
    baseValue = (weight < plantMinWeights['loquat']) ? null : 190.00 * weight * weight;
  }
  else if (feijoa) {
    baseValue = (weight < plantMinWeights['feijoa']) ? null : 130.00 * weight * weight;
  }
  else if (sugarapple) {
    baseValue = (weight < plantMinWeights['sugarapple']) ? null : 592.60 * weight * weight;
  }
  else if (wildcarrot) {
    baseValue = (weight < plantMinWeights['wildcarrot']) ? null : 275000.00 * weight * weight;
  }
  else if (cantaloupe) {
    baseValue = (weight < plantMinWeights['cantaloupe']) ? null : 1129.00 * weight * weight;
  }
  else if (parasolflower) {
    baseValue = (weight < plantMinWeights['parasolflower']) ? null : 5577.78 * weight * weight;
  }
  else if (rosydelight) {
    baseValue = (weight < plantMinWeights['rosydelight']) ? null : 690.00 * weight * weight;
  }
  else if (elephantears) {
    baseValue = (weight < plantMinWeights['elephantears']) ? null : 237.60 * weight * weight;
  }
  else if (stonebite) {
    baseValue = (weight < plantMinWeights['stonebite']) ? null : 35638.37 * weight * weight;
  }
  else if (paradisepetal) {
    baseValue = (weight < plantMinWeights['paradisepetal']) ? null : 3306.78 * weight * weight;
  }
  else if (horneddinoshroom) {
    baseValue = (weight < plantMinWeights['horneddinoshroom']) ? null : 2756.91 * weight * weight;
  }
  else if (boneboo) {
    baseValue = (weight < plantMinWeights['boneboo']) ? null : 627.31 * weight * weight;
  }
  else if (fireflyfern) {
    baseValue = (weight < plantMinWeights['fireflyfern']) ? null : 2882.69 * weight * weight;
  }
  else if (fossilight) {
    baseValue = (weight < plantMinWeights['fossilight']) ? null : 5531.27 * weight * weight;
  }
  else if (boneblossom) {
    baseValue = (weight < plantMinWeights['boneblossom']) ? null : 3572.34 * weight * weight;
  }
  else { 
    baseValue = weight * weight;
  }

  let fruitMultiplier = isFruitActive('rainbow') ? 50 :
                        isFruitActive('gold') ? 20 : 1;

  let result = Math.ceil(baseValue * fruitMultiplier * (1 + modifierMultiplier));
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
    ['aurora',89],['drenched',4],
    ['cloudtouched',4],['fried',7],['sandy',2],['amber',9],['oldamber',19],['ancientamber',49],['clay',2],['ceramic',29]
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
  switch (plantId) {
    case 'easteregg': return 277.5;
    case 'moonflower': return 2381;
    case 'starfruit': return 1666.6;
    case 'pepper': return 320;
    case 'grape': return 872;
    case 'nightshade': return 13850;
    case 'mint': return 5230;
    case 'glowshroom': return 532.5;
    case 'bloodbanana': return 2670;
    case 'beanstalk': return 200;
    case 'coconut': return 2.04;
    case 'candyblossom': return 11111.111;
    case 'carrot': return 275;
    case 'strawberry': return 175;
    case 'blueberry': return 500;
    case 'orangetulip': return 300000;
    case 'tomato': return 120;
    case 'daffodil': return 25000;
    case 'watermelon': return 61.25;
    case 'pumpkin': return 64;
    case 'mushroom': return 241.6;
    case 'bamboo': return 250;
    case 'apple': return 30.53;
    case 'corn': return 10.00;
    case 'cactus': return 69.4;
    case 'cranberry': return 2000;
    case 'moonmelon': return 280.85;
    case 'pear': return 55.5;
    case 'durian': return 78.19;
    case 'peach': return 75;
    case 'cacao': return 171.875;
    case 'moonglow': return 408.45;
    case 'dragonfruit': return 32.99;
    case 'mango': return 28.89;
    case 'moonblossom': return 5555.555;
    case 'raspberry': return 177.5;
    case 'eggplant': return 300;
    case 'papaya': return 111.11;
    case 'celestiberry': return 2000;
    case 'moonmango': return 222.22;
    case 'banana': return 777.77;
    case 'passionfruit': return 395;
    case 'soulfruit': return 12.4;
    case 'hive': return 781.42
    case 'rose': return 5000;
    case 'foxglove': return 5000;
    case 'purpledahlia': return 522;
    case 'lilac': return 3899;
    case 'sunflower': return 666;
    case 'pinklily': return 3172;
    case 'nectarine': return 4445;
    case 'emberlily': return 386;
    case 'nectarshade': return 78500;
    case 'manuka': return 270086;
    case 'dandelion': return 3141;
    case 'lumira': return 2370;
    case 'honeysuckle': return 694;
    case 'beebalm': return 18033.5;
    case 'nectarthorn': return 906.56;
    case 'suncoil': return 800;
    case 'crocus': return 333333;
    case 'succulent': return 1000;
    case 'violetcorn': return 5555.56;
    case 'bendboo': return 479.01;
    case 'cocovine': return 340;
    case 'dragonpepper': return 2470.2;
    case 'cauliflower': return 1.60;
    case 'greenapple': return 33.44;
    case 'avocado': return 8.32;
    case 'pineapple': return 222.56;
    case 'kiwi': return 110.00;
    case 'bellpepper': return 85.61;
    case 'pricklypear': return 143.27;
    case 'loquat': return 190.00;
    case 'feijoa': return 130.00;
    case 'sugarapple': return 592.60;
    case 'wildcarrot': return 275000.00;
    case 'cantaloupe': return 1129.00;
    case 'parasolflower': return 5577.78;
    case 'rosydelight': return 690.00;
    case 'elephantears': return 237.60;
    case 'stonebite': return 35638.37;
    case 'paradisepetal': return 3306.78;
    case 'horneddinoshroom': return 2756.91;
    case 'boneboo': return 627.31;
    case 'fireflyfern': return 2882.69;
    case 'fossilight': return 5531.27;
    case 'boneblossom': return 3572.34;
    default: return null;
  }
}
function getBasePricePerKg(plantId, weight) {
  if (!plantId) return null;
  let w = weight || 1;
  let base = 0;
  let minWeight = plantMinWeights[plantId];
  let baseConst = getBaseValueConstant(plantId);
  if (minWeight !== undefined && w < minWeight) {
    base = baseConst;
  } else {
    switch (plantId) {
      case 'easteregg': base = 277.5 * w; break;
      case 'moonflower': base = 2381 * w; break;
      case 'starfruit': base = 1666.6 * w; break;
      case 'pepper': base = 320 * w; break;
      case 'grape': base = 872 * w; break;
      case 'nightshade': base = 13850 * w; break;
      case 'mint': base = 5230 * w; break;
      case 'glowshroom': base = 532.5 * w; break;
      case 'bloodbanana': base = 2670 * w; break;
      case 'beanstalk': base = 200 * w; break;
      case 'coconut': base = 2.04 * w; break;
      case 'candyblossom': base = 11111.111 * w; break;
      case 'carrot': base = 275 * w; break;
      case 'strawberry': base = 175 * w; break;
      case 'blueberry': base = 500 * w; break;
      case 'orangetulip': base = 300000 * w; break;
      case 'tomato': base = 120 * w; break;
      case 'daffodil': base = 25000 * w; break;
      case 'watermelon': base = 61.25 * w; break;
      case 'pumpkin': base = 64 * w; break;
      case 'mushroom': base = 241.6 * w; break;
      case 'bamboo': base = 250 * w; break;
      case 'apple': base = 30.53 * w; break;
      case 'corn': base = 10.00 * w; break;
      case 'cactus': base = 69.4 * w; break;
      case 'cranberry': base = 2000 * w; break;
      case 'moonmelon': base = 280.85 * w; break;
      case 'pear': base = 55.5 * w; break;
      case 'durian': base = 78.19 * w; break;
      case 'peach': base = 75 * w; break;
      case 'cacao': base = 171.875 * w; break;
      case 'moonglow': base = 408.45 * w; break;
      case 'dragonfruit': base = 32.99 * w; break;
      case 'mango': base = 28.89 * w; break;
      case 'moonblossom': base = 5555.555 * w; break;
      case 'raspberry': base = 177.5 * w; break;
      case 'eggplant': base = 300 * w; break;
      case 'papaya': base = 111.11 * w; break;
      case 'celestiberry': base = 2000 * w; break;
      case 'moonmango': base = 222.22 * w; break;
      case 'banana': base = 777.77 * w; break;
      case 'passionfruit': base = 395 * w; break;
      case 'soulfruit': base = 12.4 * w; break;
      case 'hive': base = 1561.96 * w; break;
      case 'rose': base = 5000 * w; break;
      case 'foxglove': base = 5000 * w; break;
      case 'purpledahlia': base = 522 * w; break;
      case 'lilac': base = 3899 * w; break;
      case 'sunflower': base = 666 * w; break;
      case 'pinklily': base = 3172 * w; break;
      case 'nectarine': base = 4445 * w; break;
      case 'emberlily': base = 386 * w; break;
      case 'nectarshade': base = 78500 * w; break;
      case 'manuka': base = 270086 * w; break;
      case 'dandelion': base = 3141 * w; break;
      case 'lumira': base = 2370 * w; break;
      case 'honeysuckle': base = 694 * w; break;
      case 'beebalm': base = 18033.5 * w; break;
      case 'nectarthorn': base = 906.56 * w; break;
      case 'suncoil': base = 800 * w; break;
      case 'crocus': base = 333333 * w; break;
      case 'succulent': base = 1000 * w; break;
      case 'violetcorn': base = 5555.56 * w; break;
      case 'bendboo': base = 479.01 * w; break;
      case 'cocovine': base = 340 * w; break;
      case 'dragonpepper': base = 2470.2 * w; break;
      case 'cauliflower': base = 1.60 * w; break;
      case 'greenapple': base = 33.44 * w; break;
      case 'avocado': base = 8.32 * w; break;
      case 'pineapple': base = 222.56 * w; break;
      case 'kiwi': base = 110.00 * w; break;
      case 'bellpepper': base = 85.61 * w; break;
      case 'pricklypear': base = 143.27 * w; break;
      case 'loquat': base = 190.00 * w; break;
      case 'feijoa': base = 130.00 * w; break;
      case 'sugarapple': base = 592.60 * w; break;
      case 'wildcarrot': base = 275000.00 * w; break;
      case 'cantaloupe': base = 1129.00 * w; break;
      case 'parasolflower': base = 5577.78 * w; break;
      case 'rosydelight': base = 690.00 * w; break;
      case 'elephantears': base = 237.60 * w; break;
      case 'stonebite': base = 35638.37 * w; break;
      case 'paradisepetal': base = 3306.78 * w; break;
      case 'horneddinoshroom': base = 2756.91 * w; break;
      case 'boneboo': base = 627.31 * w; break;
      case 'fireflyfern': base = 2882.69 * w; break;
      case 'fossilight': base = 5531.27 * w; break;
      case 'boneblossom': base = 3572.34 * w; break;
      default: base = null; break;
    }
  }
  return base;
}
function getBaseValueCalculated(plantId, weight) {
  if (!plantId) return null;
  let w = weight || 1;
  switch (plantId) {
    case 'easteregg': return (w < plantMinWeights['easteregg']) ? null : 277.5 * w * w;
    case 'moonflower': return (w < plantMinWeights['moonflower']) ? null : 2381 * w * w;
    case 'starfruit': return (w < plantMinWeights['starfruit']) ? null : 1666.6 * w * w;
    case 'pepper': return (w < plantMinWeights['pepper']) ? null : 320 * w * w;
    case 'grape': return (w < plantMinWeights['grape']) ? null : 872 * w * w;
    case 'nightshade': return (w < plantMinWeights['nightshade']) ? null : 13850 * w * w;
    case 'mint': return (w < plantMinWeights['mint']) ? null : 5230 * w * w;
    case 'glowshroom': return (w < plantMinWeights['glowshroom']) ? null : 532.5 * w * w;
    case 'bloodbanana': return (w < plantMinWeights['bloodbanana']) ? null : 2670 * w * w;
    case 'beanstalk': return (w < plantMinWeights['beanstalk']) ? null : 200 * w * w;
    case 'coconut': return (w < plantMinWeights['coconut']) ? null : 2.04 * w * w;
    case 'candyblossom': return (w < plantMinWeights['candyblossom']) ? null : 11111.111 * w * w;
    case 'carrot': return (w < plantMinWeights['carrot']) ? null : 275 * w * w;
    case 'strawberry': return (w < plantMinWeights['strawberry']) ? null : 175 * w * w;
    case 'blueberry': return (w < plantMinWeights['blueberry']) ? null : 500 * w * w;
    case 'orangetulip': return (w < plantMinWeights['orangetulip']) ? null : 300000 * w * w;
    case 'tomato': return (w < plantMinWeights['tomato']) ? null : 120 * w * w;
    case 'daffodil': return (w < plantMinWeights['daffodil']) ? null : 25000 * w * w;
    case 'watermelon': return (w < plantMinWeights['watermelon']) ? null : 61.25 * w * w;
    case 'pumpkin': return (w < plantMinWeights['pumpkin']) ? null : 64 * w * w;
    case 'mushroom': return (w < plantMinWeights['mushroom']) ? null : 241.6 * w * w;
    case 'bamboo': return (w < plantMinWeights['bamboo']) ? null : 250 * w * w;
    case 'apple': return (w < plantMinWeights['apple']) ? null : 30.53 * w * w;
    case 'corn': return (w < plantMinWeights['corn']) ? null : 10.00 * w * w;
    case 'cactus': return (w < plantMinWeights['cactus']) ? null : 69.4 * w * w;
    case 'cranberry': return (w < plantMinWeights['cranberry']) ? null : 2000 * w * w;
    case 'moonmelon': return (w < plantMinWeights['moonmelon']) ? null : 280.85 * w * w;
    case 'pear': return (w < plantMinWeights['pear']) ? null : 55.5 * w * w;
    case 'durian': return (w < plantMinWeights['durian']) ? null : 78.19 * w * w;
    case 'peach': return (w < plantMinWeights['peach']) ? null : 75 * w * w;
    case 'cacao': return (w < plantMinWeights['cacao']) ? null : 171.875 * w * w;
    case 'moonglow': return (w < plantMinWeights['moonglow']) ? null : 408.45 * w * w;
    case 'dragonfruit': return (w < plantMinWeights['dragonfruit']) ? null : 32.99 * w * w;
    case 'mango': return (w < plantMinWeights['mango']) ? null : 28.89 * w * w;
    case 'moonblossom': return (w < plantMinWeights['moonblossom']) ? null : 5555.555 * w * w;
    case 'raspberry': return (w < plantMinWeights['raspberry']) ? null : 177.5 * w * w;
    case 'eggplant': return (w < plantMinWeights['eggplant']) ? null : 300 * w * w;
    case 'papaya': return (w < plantMinWeights['papaya']) ? null : 111.11 * w * w;
    case 'celestiberry': return (w < plantMinWeights['celestiberry']) ? null : 2000 * w * w;
    case 'moonmango': return (w < plantMinWeights['moonmango']) ? null : 222.22 * w * w;
    case 'banana': return (w < plantMinWeights['banana']) ? null : 777.77 * w * w;
    case 'passionfruit': return (w < plantMinWeights['passionfruit']) ? null : 395 * w * w;
    case 'soulfruit': return (w < plantMinWeights['soulfruit']) ? null : 12.4 * w * w;
    case 'hive': return (w < plantMinWeights['hive']) ? null : 781.42 * w * w;
    case 'rose': return (w < plantMinWeights['rose']) ? null : 5000 * w * w;
    case 'foxglove': return (w < plantMinWeights['foxglove']) ? null : 5000 * w * w;
    case 'purpledahlia': return (w < plantMinWeights['purpledahlia']) ? null : 522 * w * w;
    case 'lilac': return (w < plantMinWeights['lilac']) ? null : 3899 * w * w;
    case 'sunflower': return (w < plantMinWeights['sunflower']) ? null : 666 * w * w;
    case 'pinklily': return (w < plantMinWeights['pinklily']) ? null : 3172 * w * w;
    case 'nectarine': return (w < plantMinWeights['nectarine']) ? null : 4445 * w * w;
    case 'emberlily': return (w < plantMinWeights['emberlily']) ? null : 386 * w * w;
    case 'nectarshade': return (w < plantMinWeights['nectarshade']) ? null : 78500 * w * w;
    case 'manuka': return (w < plantMinWeights['manuka']) ? null : 270086 * w * w;
    case 'dandelion': return (w < plantMinWeights['dandelion']) ? null : 3141 * w * w;
    case 'lumira': return (w < plantMinWeights['lumira']) ? null : 2370 * w * w;
    case 'honeysuckle': return (w < plantMinWeights['honeysuckle']) ? null : 694 * w * w;
    case 'beebalm': return (w < plantMinWeights['beebalm']) ? null : 18033.5 * w * w;
    case 'nectarthorn': return (w < plantMinWeights['nectarthorn']) ? null : 906.56 * w * w;
    case 'suncoil': return (w < plantMinWeights['suncoil']) ? null : 800 * w * w;
    case 'crocus': return (w < plantMinWeights['crocus']) ? null : 333333 * w * w;
    case 'succulent': return (w < plantMinWeights['succulent']) ? null : 1000 * w * w;
    case 'violetcorn': return (w < plantMinWeights['violetcorn']) ? null : 5555.56 * w * w;
    case 'bendboo': return (w < plantMinWeights['bendboo']) ? null : 479.01 * w * w;
    case 'cocovine': return (w < plantMinWeights['cocovine']) ? null : 340 * w * w;
    case 'dragonpepper': return (w < plantMinWeights['dragonpepper']) ? null : 2470.2 * w * w;
    case 'cauliflower': return (w < plantMinWeights['cauliflower']) ? null : 1.60 * w * w;
    case 'greenapple': return (w < plantMinWeights['greenapple']) ? null : 33.44 * w * w;
    case 'avocado': return (w < plantMinWeights['avocado']) ? null : 8.32 * w * w;
    case 'pineapple': return (w < plantMinWeights['pineapple']) ? null : 222.56 * w * w;
    case 'kiwi': return (w < plantMinWeights['kiwi']) ? null : 110.00 * w * w;
    case 'bellpepper': return (w < plantMinWeights['bellpepper']) ? null : 85.61 * w * w;
    case 'pricklypear': return (w < plantMinWeights['pricklypear']) ? null : 143.27 * w * w;
    case 'loquat': return (w < plantMinWeights['loquat']) ? null : 190.00 * w * w;
    case 'feijoa': return (w < plantMinWeights['feijoa']) ? null : 130.00 * w * w;
    case 'sugarapple': return (w < plantMinWeights['sugarapple']) ? null : 592.60 * w * w;
    case 'wildcarrot': return (w < plantMinWeights['wildcarrot']) ? null : 275000.00 * w * w;
    case 'cantaloupe': return (w < plantMinWeights['cantaloupe']) ? null : 1129.00 * w * w;
    case 'parasolflower': return (w < plantMinWeights['parasolflower']) ? null : 5577.78 * w * w;
    case 'rosydelight': return (w < plantMinWeights['rosydelight']) ? null : 690.00 * w * w;
    case 'elephantears': return (w < plantMinWeights['elephantears']) ? null : 237.60 * w * w;
    case 'stonebite': return (w < plantMinWeights['stonebite']) ? null : 35638.37 * w * w;
    case 'paradisepetal': return (w < plantMinWeights['paradisepetal']) ? null : 3306.78 * w * w;
    case 'horneddinoshroom': return (w < plantMinWeights['horneddinoshroom']) ? null : 2756.91 * w * w;
    case 'boneboo': return (w < plantMinWeights['boneboo']) ? null : 627.31 * w * w;
    case 'fireflyfern': return (w < plantMinWeights['fireflyfern']) ? null : 2882.69 * w * w;
    case 'fossilight': return (w < plantMinWeights['fossilight']) ? null : 5531.27 * w * w;
    case 'boneblossom': return (w < plantMinWeights['boneblossom']) ? null : 3572.34 * w * w;
    default: return w * w;
  }
}