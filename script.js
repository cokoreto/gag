const modifiers = [
  'wet', 'chilled',
  // Created by @chocoreto
  'disco', 'choc', 'bloodlit', 'celestial', 'moonlit',
  'frozen', 'zomb', 'shocked', 'plasma',
  'voidtouched', 'pollinated', 'honeyglazed'
];
const modifierLabels = {
  wet: 'Wet',
  chilled: 'Chilled',
  // Created by @chocoreto
  disco: 'Disco',
  choc: 'Choc',
  bloodlit: 'Bloodlit',
  celestial: 'Celestial',
  moonlit: 'Moonlit',
  frozen: 'Frozen',
  zomb: 'Zombified',
  shocked: 'Shocked',
  plasma: 'Plasma',
  voidtouched: 'Voidtouched',
  pollinated: 'Pollinated',
  honeyglazed: 'Honeyglazed'
};
const fruitTypes = [
  { id: 'rainbow', label: 'Rainbow' },
  { id: 'gold', label: 'Gold' }
];
const categories = {
  // Created by @chocoreto
  "Seed Shop": ['carrot','strawberry','blueberry','orangetulip','tomato','corn','daffodil','watermelon','pumpkin','apple','bamboo','coconut','cactus','dragonfruit','mango','grape','mushroom','pepper','cacao','beanstalk'],
  "Night Event": ['nightshade','mint','glowshroom','moonmelon','starfruit','moonflower','bloodbanana','moonglow','moonblossom','celestiberry','moonmango'],
  "Easter Event": ['candyblossom','easteregg'],
  "Normal Seed Pack": ['raspberry','pear','peach'],
  "Event Seed Pack": ['cranberry','durian','eggplant'],
  "Exotic Plants": ['papaya','banana','passionfruit','soulfruit'],
  "Bee Event": ['hive','rose','foxglove','purpledahlia','lilac','sunflower','pinklily','nectarine']
};

const modifierContainer = document.getElementById('modifiers');
modifierContainer.innerHTML = '';
modifiers.forEach(id => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'mod-btn';
  btn.id = `modbtn-${id}`;
  btn.textContent = modifierLabels[id] || (id.charAt(0).toUpperCase() + id.slice(1));
  btn.onclick = () => toggleModifier(id);
  modifierContainer.appendChild(btn);
});
const fruitRow = document.getElementById('fruitRow');
fruitRow.innerHTML = '';
fruitTypes.forEach(fruit => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'fruit-btn';
  btn.id = `fruitbtn-${fruit.id}`;
  btn.textContent = fruit.label;
  btn.onclick = () => toggleFruitBtn(fruit.id);
  fruitRow.appendChild(btn);
});

const plantImages = {
  carrot: "img/carrot.png",
  strawberry: "img/strawberry.png",
  blueberry: "img/blueberry.png",
  orangetulip: "img/orangetulip.png",
  tomato: "img/tomato.png",
  corn: "img/corn.png",
  daffodil: "img/daffodil.png",
  watermelon: "img/watermelon.png",
  pumpkin: "img/pumpkin.png",
  apple: "img/apple.png",
  bamboo: "img/bamboo.png",
  coconut: "img/coconut.png",
  cactus: "img/cactus.png",
  dragonfruit: "img/dragonfruit.png",
  mango: "img/mango.png",
  grape: "img/grape.png",
  mushroom: "img/mushroom.png",
  pepper: "img/pepper.png",
  cacao: "img/cacao.png",
  beanstalk: "img/beanstalk.png",
  nightshade: "img/nightshade.png",
  mint: "img/mint.png",
  glowshroom: "img/glowshroom.png",
  moonmelon: "img/moonmelon.png",
  starfruit: "img/starfruit.png",
  moonflower: "img/moonflower.png",
  bloodbanana: "img/bloodbanana.png",
  moonglow: "img/moonglow.png",
  moonblossom: "img/moonblossom.png",
  celestiberry: "img/celestiberry.png",
  moonmango: "img/moonmango.png",
  candyblossom: "img/candyblossom.png",
  easteregg: "img/easteregg.png",
  raspberry: "img/raspberry.png",
  pear: "img/pear.png",
  peach: "img/peach.png",
  cranberry: "img/cranberry.png",
  durian: "img/durian.png",
  eggplant: "img/eggplant.png",
  papaya: "img/papaya.png",
  banana: "img/banana.png",
  passionfruit: "img/passionfruit.png",
  soulfruit: "img/soulfruit.png",
  hive: "img/hive.png",
  rose: "img/rose.png",
  foxglove: "img/foxglove.png",
  purpledahlia: "img/purpledahlia.png",
  lilac: "img/lilac.png",
  sunflower: "img/sunflower.png",
  pinklily: "img/pinklily.png",
  nectarine: "img/nectarine.png"
  // Created by @chocoreto
};

const plantLabels = {
  carrot: "Carrot",
  strawberry: "Strawberry",
  blueberry: "Blueberry",
  orangetulip: "Orange Tulip",
  tomato: "Tomato",
  corn: "Corn",
  daffodil: "Daffodil",
  watermelon: "Watermelon",
  pumpkin: "Pumpkin",
  apple: "Apple",
  bamboo: "Bamboo",
  coconut: "Coconut",
  cactus: "Cactus",
  dragonfruit: "Dragon Fruit",
  mango: "Mango",
  grape: "Grape",
  mushroom: "Mushroom",
  pepper: "Pepper",
  cacao: "Cacao",
  beanstalk: "Beanstalk",
  nightshade: "Nightshade",
  mint: "Mint",
  glowshroom: "Glowshroom",
  moonmelon: "Moon Melon",
  starfruit: "Star Fruit",
  moonflower: "Moon Flower",
  bloodbanana: "Blood Banana",
  moonglow: "Moonglow",
  moonblossom: "Moon Blossom",
  celestiberry: "Celestiberry",
  moonmango: "Moon Mango",
  candyblossom: "Candy Blossom",
  easteregg: "Easter Egg",
  raspberry: "Raspberry",
  pear: "Pear",
  peach: "Peach",
  cranberry: "Cranberry",
  durian: "Durian",
  eggplant: "Eggplant",
  papaya: "Papaya",
  banana: "Banana",
  passionfruit: "Passionfruit",
  soulfruit: "Soul Fruit",
  hive: "Hive Fruit",
  rose: "Rose",
  foxglove: "Foxglove",
  purpledahlia: "Purpledahlia",
  lilac: "Lilac",
  sunflower: "Sunflower",
  pinklily: "Pink Lily",
  nectarine: "Nectarine"
};

const categoryContainer = document.getElementById('categoryContainer');
const plantIds = [];
Object.entries(categories).forEach(([title, ids]) => {
  const categoryDiv = document.createElement('div');
  categoryDiv.className = 'category';
  categoryDiv.innerHTML = `<div class="category-title">${title}</div>`;
  const btnWrap = document.createElement('div');
  btnWrap.className = 'category-list';
  btnWrap.style.display = 'flex';
  btnWrap.style.flexWrap = 'nowrap';
  btnWrap.style.overflowX = 'auto';
  btnWrap.style.gap = '0';
  ids.forEach(id => {
    plantIds.push(id);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'plant-btn';
    btn.id = `plantbtn-${id}`;
    const imgSrc = plantImages[id];
    const label = plantLabels[id] || (id.charAt(0).toUpperCase() + id.slice(1));
    btn.innerHTML = imgSrc
      ? `<img src="${imgSrc}" alt="${label}" class="plant-img"/><div class="plant-label">${label}</div>`
      : `<div class="plant-label">${label}</div>`;
    btn.onclick = () => togglePlantBtn(id);
    btnWrap.appendChild(btn);
  });
  categoryDiv.appendChild(btnWrap);
  categoryContainer.appendChild(categoryDiv);
});

function toggleModifier(id) {
  const btn = document.getElementById(`modbtn-${id}`);
  const isActive = btn.classList.contains('active');
  if (id === 'frozen') {
    if (!isActive) {
      setModifierActive('frozen', true);
      setModifierActive('wet', false, true);
      setModifierActive('chilled', false, true);
    } else {
      setModifierActive('frozen', false);
      setModifierActive('wet', false, false);
      setModifierActive('chilled', false, false);
    }
  } else if (id === 'wet' || id === 'chilled') {
    if (!isActive) {
      setModifierActive(id, true);
      setModifierActive(id === 'wet' ? 'chilled' : 'wet', false);
      setModifierActive('frozen', false, true);
    } else {
      setModifierActive(id, false);
      setModifierActive('frozen', false, false);
    }
  } else {
    setModifierActive(id, !isActive);
  }
  calculateValue();
}
function setModifierActive(id, active, disable = false) {
  const btn = document.getElementById(`modbtn-${id}`);
  if (!btn) return;
  if (active) btn.classList.add('active');
  else btn.classList.remove('active');
  btn.disabled = !!disable;
}
function toggleFruitBtn(id) {
  fruitTypes.forEach(fruit => {
    const btn = document.getElementById(`fruitbtn-${fruit.id}`);
    if (fruit.id === id) btn.classList.toggle('active');
    else btn.classList.remove('active');
  });
  calculateValue();
}
function togglePlantBtn(changed) {
  plantIds.forEach(id => {
    const btn = document.getElementById(`plantbtn-${id}`);
    if (btn) btn.classList.toggle('active', id === changed);
  });
  calculateValue();
  updateBasePricePerKg();
}

function getActivePlantId() {
  for (const id of plantIds) {
    const btn = document.getElementById(`plantbtn-${id}`);
    if (btn && btn.classList.contains('active')) return id;
  }
  return null;
}
function isModifierActive(id) {
  const btn = document.getElementById(`modbtn-${id}`);
  return btn && btn.classList.contains('active');
}
function isFruitActive(id) {
  const btn = document.getElementById(`fruitbtn-${id}`);
  return btn && btn.classList.contains('active');
}
const plantMinWeights = {
  easteregg: 2.85,
  moonflower: 1.90,
  starfruit: 2.85,
  pepper: 4.75,
  grape: 2.85,
  nightshade: 0.48,
  mint: 0.95,
  glowshroom: 0.70,
  bloodbanana: 1.42,
  beanstalk: 9.5,
  coconut: 13.31,
  candyblossom: 2.85,
  carrot: 0.24,
  strawberry: 0.29,
  blueberry: 0.17,
  orangetulip: 0.0499,
  tomato: 0.44,
  daffodil: 0.16,
  watermelon: 7.3,
  pumpkin: 6.9,
  mushroom: 25.9,
  bamboo: 3.80,
  apple: 2.85,
  corn: 1.90,
  cactus: 6.65,
  cranberry: 0.95,
  moonmelon: 6.84,
  pear: 2.85,
  durian: 7.6,
  peach: 1.90,
  cacao: 7.6,
  moonglow: 6.65,
  dragonfruit: 11.38,
  mango: 14.28,
  moonblossom: 2.86,
  raspberry: 0.71,
  eggplant: 4.75,
  papaya: 2.86,
  celestiberry: 1.90,
  moonmango: 14.25,
  banana: 1.425,
  passionfruit: 2.867,
  soulfruit: 23.75,
  hive: 7.614,
  rose: 0.95,
  foxglove: 1.9,
  purpledahlia: 11.4,
  lilac: 2.846,
  sunflower: 14.23,
  pinklily: 4.3,
  nectarine: 2.807
};
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

  let candyblossom = false, beanstalk = false, corn = false, coconut = false, easteregg = false, moonflower = false, starfruit = false, pepper = false, grape = false, nightshade = false, mint = false, glowshroom = false, bloodbanana = false, carrot = false, strawberry = false, blueberry = false, orangetulip = false, tomato = false, daffodil = false, watermelon = false, pumpkin = false, bamboo = false, cactus = false, apple = false, mushroom = false, moonmelon = false, cranberry = false, pear = false, durian = false, moonglow = false, peach = false, cacao = false, dragonfruit = false, mango = false, moonblossom = false, eggplant = false, raspberry = false, papaya = false, celestiberry = false, banana = false, passionfruit = false, soulfruit = false, moonmango = false, hive = false, rose = false, foxglove = false, purpledahlia = false, lilac = false, sunflower = false, pinklily = false, nectarine = false;

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
  modifierMultiplier += isModifierActive('celestial') ? 119 : 0;
  modifierMultiplier += isModifierActive('disco') ? 124 : 0;
  modifierMultiplier += isModifierActive('zomb') ? 24 : 0;
  modifierMultiplier += isModifierActive('plasma') ? 4 : 0;
  modifierMultiplier += isModifierActive('voidtouched') ? 134 : 0;
  modifierMultiplier += isModifierActive('pollinated') ? 2 : 0;
  modifierMultiplier += isModifierActive('honeyglazed') ? 4 : 0;

  let baseValue = 0;
  if (easteregg) {
    baseValue = (weight < 2.85) ? 2256 : 277.5 * weight * weight;
  }
  else if (moonflower) {
    baseValue = (weight < 1.90) ? 8574 : 2381 * weight * weight;
  }
  else if (starfruit) {
    baseValue = (weight < 2.85) ? 13538 : 1666.6 * weight * weight;
  }
  else if (pepper) {
    baseValue = (weight < 4.75) ? 7200 : 320 * weight * weight;
  }
  else if (grape) {
    baseValue = (weight < 2.85) ? 7085 : 872 * weight * weight;
  }
  else if (nightshade) {
    baseValue = (weight < 0.48) ? 3159 : 13850 * weight * weight;
  }
  else if (mint) {
    baseValue = (weight < 0.95) ? 4738 : 5230 * weight * weight;
  }
  else if (glowshroom) {
    baseValue = (weight < 0.70) ? 271 : 532.5 * weight * weight;
  }
  else if (bloodbanana) {
    baseValue = (weight < 1.42) ? 5415 : 2670 * weight * weight;
  }
  else if (beanstalk) {
    baseValue = (weight < 9.5) ? 18050 : 200 * weight * weight;
  }
  else if (coconut) {
    baseValue = (weight < 13.31) ? 361 : 2.04 * weight * weight;
  }
  else if (candyblossom) {
    baseValue = (weight < 2.85) ? 90250 : 11111.111 * weight * weight;
  }
  else if (carrot) {
    baseValue = (weight < 0.24) ? 18 : 275 * weight * weight;
  }
  else if (strawberry) {
    baseValue = (weight < 0.29) ? 14 : 175 * weight * weight;
  }
  else if (blueberry) {
    baseValue = (weight < 0.17) ? 18 : 500 * weight * weight;
  }
  else if (orangetulip) {
    baseValue = (weight < 0.0499) ? 767 : 300000 * weight * weight;
  }
  else if (tomato) {
    baseValue = (weight < 0.44) ? 27 : 120 * weight * weight;
  }
  else if (daffodil) {
    baseValue = (weight < 0.16) ? 903 : 25000 * weight * weight;
  }
  else if (watermelon) {
    baseValue = (weight < 7.3) ? 2708 : 61.25 * weight * weight;
  }
  else if (pumpkin) {
    baseValue = (weight < 6.90) ? 3069 : 64 * weight * weight;
  }
  else if (mushroom) {
    baseValue = (weight < 25.9) ? 136278 : 241.6 * weight * weight;
  }
  else if (bamboo) {
    baseValue = (weight < 3.80) ? 3610 : 250 * weight * weight;
  }
  else if (apple) {
    baseValue = (weight < 2.85) ? 248 : 30.53 * weight * weight;
  }
  else if (corn) {
    baseValue = (weight < 1.90) ? 36 : 10.00 * weight * weight;
  }
  else if (cactus) {
    baseValue = (weight < 6.65) ? 3069 : 69.4 * weight * weight;
  }
  else if (cranberry) {
    baseValue = (weight < 0.95) ? 1805 : 2000 * weight * weight;
  }
  else if (moonmelon) {
    baseValue = (weight < 6.84) ? 16245 : 280.85 * weight * weight;
  }
  else if (pear) {
    baseValue = (weight < 2.85) ? 451 : 55.5 * weight * weight;
  }
  else if (durian) {
    baseValue = (weight < 7.60) ? 4513 : 78.19 * weight * weight;
  }
  else if (peach) {
    baseValue = (weight < 1.90) ? 271 : 75 * weight * weight;
  }
  else if (cacao) {
    baseValue = (weight < 7.6) ? 9928 : 171.875 * weight * weight;
  }
  else if (moonglow) {
    baseValue = (weight < 6.65) ? 18050 : 408.45 * weight * weight;
  }
  else if (dragonfruit) {
    baseValue = (weight < 11.38) ? 4287 : 32.99 * weight * weight;
  }
  else if (mango) {
    baseValue = (weight < 14.28 ) ? 5866 : 28.89 * weight * weight;
  }
  else if (moonblossom) {
    baseValue = (weight < 2.86) ? 45125 : 5555.555 * weight * weight;
  }
  else if (raspberry) {
    baseValue = (weight < 0.71) ? 90 : 177.5 * weight * weight;
  }
  else if (eggplant) {
    baseValue = (weight < 4.75) ? 6769 : 300 * weight * weight;
  }
  else if (papaya) {
    baseValue = (weight < 2.86) ? 903 : 111.11 * weight * weight;
  }
  else if (celestiberry) {
    baseValue = (weight < 1.90) ? 7220 : 2000 * weight * weight;
  }
  else if (moonmango) {
    baseValue = (weight < 14.25) ? 22563 : 222.22 * weight * weight;
  }
  else if (banana) {
    baseValue = (weight < 1.425) ? 1579 : 777.77 * weight * weight;
  }
  else if (passionfruit) {
    baseValue = (weight < 2.867) ? 3204 : 395 * weight * weight;
  }
  else if (soulfruit) {
    baseValue = (weight < 23.75) ? 6994 : 12.4 * weight * weight;
  }
  else if (hive) {
    baseValue = (weight < 7.614) ? 6320 : 109 * weight * weight;
  }
  else if (rose) {
    baseValue = (weight < 0.95) ? 5000 : 5000 * weight * weight;
  }
  else if (foxglove) {
    baseValue = (weight < 1.9) ? 18050 : 5000 * weight * weight;
  }
  else if (purpledahlia) {
    baseValue = (weight < 11.4) ? 67840 : 522 * weight * weight;
  }
  else if (lilac) {
    baseValue = (weight < 2.846) ? 31581 : 3899 * weight * weight;
  }
  else if (sunflower) {
    baseValue = (weight < 14.23) ? 134861 : 666 * weight * weight;
  }
  // Created by @chocoreto
  else if (pinklily) {
    baseValue = (weight < 4.3) ? 58663 : 3172 * weight * weight;
  }
  else if (nectarine) {
    baseValue = (weight < 2.807) ? 4445 : 4445 * weight * weight;
  }
  else { 
    baseValue = weight * weight;
  }

  let fruitMultiplier = isFruitActive('rainbow') ? 50 :
                        isFruitActive('gold') ? 20 : 1;

  let result = Math.ceil(baseValue * fruitMultiplier * (1 + modifierMultiplier));
  document.getElementById('value').innerText = `≈$${result.toLocaleString()}`;
}

function clearAll() {
  plantIds.forEach(id => {
    const btn = document.getElementById(`plantbtn-${id}`);
    if (btn) btn.classList.remove('active');
  });
  modifiers.forEach(id => setModifierActive(id, false, false));
  fruitTypes.forEach(fruit => {
    const btn = document.getElementById(`fruitbtn-${fruit.id}`);
    if (btn) btn.classList.remove('active');
  });
  document.getElementById('weight').value = 1.00;
  document.getElementById('value').innerText = '$0';
  warnElem.textContent = '';
  warnElem.style.display = 'none';
  calculateValue();
  updateBasePricePerKg();
}

document.getElementById('weight').addEventListener('input', () => {
  calculateValue();
  updateBasePricePerKg();
});
document.getElementById('resetBtn').addEventListener('click', () => {
  clearAll();
  updateBasePricePerKg();
});

window.onload = () => {
  calculateValue();
  updateBasePricePerKg();
};

const style = document.createElement('style');
style.innerHTML = `
.plant-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 10px 6px 10px;
  margin: 4px 8px 4px 0;
  border-radius: 18px;
  background: #232634;
  color: var(--text-muted, #b7b9c7);
  border: 2px solid var(--input-border, #35384a);
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border 0.18s, box-shadow 0.18s;
  user-select: none;
  outline: none;
  min-width: 90px;
  min-height: 90px;
  text-align: center;
  box-shadow: 0 1px 6px #0002;
}
.plant-btn .plant-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-bottom: 4px;
  display: block;
  pointer-events: none;
  user-select: none;
}
.plant-btn .plant-label {
  font-size: 0.98em;
  margin-top: 2px;
  color: inherit;
  font-weight: 500;
  text-shadow: 0 1px 4px #0003;
  pointer-events: none;
  user-select: none;
}
.plant-btn.active {
  background: var(--primary, #7f9cff);
  color: #fff;
  border-color: var(--primary, #7f9cff);
  box-shadow: 0 2px 12px #7f9cff33;
}
.plant-btn:active {
  background: var(--primary-dark, #4b5fd6);
}
`;
document.head.appendChild(style);

const inputRow = document.querySelector('.input-row');
let warnElem = document.createElement('div');
warnElem.id = 'weight-warning';
warnElem.style.display = 'none';
warnElem.style.color = '#ff5c5c';
warnElem.style.fontSize = '0.98em';
warnElem.style.marginTop = '4px';
warnElem.style.marginLeft = '2px';
inputRow.appendChild(warnElem);

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
    case 'hive': return 109;
    case 'rose': return 5000;
    case 'foxglove': return 5000;
    case 'purpledahlia': return 522;
    case 'lilac': return 3899;
    case 'sunflower': return 666;
    case 'pinklily': return 3172;
    case 'nectarine': return 4445;
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
      case 'hive': base = 109 * w; break;
      case 'rose': base = 5000 * w; break;
      case 'foxglove': base = 5000 * w; break;
      case 'purpledahlia': base = 522 * w; break;
      case 'lilac': base = 3899 * w; break;
      case 'sunflower': base = 666 * w; break;
      case 'pinklily': base = 3172 * w; break;
      case 'nectarine': base = 4445 * w; break;
      default: base = null; break;
    }
  }
  return base;
}

function getBaseValueCalculated(plantId, weight) {
  if (!plantId) return null;
  let w = weight || 1;
  switch (plantId) {
    case 'easteregg': return (w < 2.85) ? 2256 : 277.5 * w * w;
    case 'moonflower': return (w < 1.90) ? 8574 : 2381 * w * w;
    case 'starfruit': return (w < 2.85) ? 13538 : 1666.6 * w * w;
    case 'pepper': return (w < 4.75) ? 7200 : 320 * w * w;
    case 'grape': return (w < 2.85) ? 7085 : 872 * w * w;
    case 'nightshade': return (w < 0.48) ? 3159 : 13850 * w * w;
    case 'mint': return (w < 0.95) ? 4738 : 5230 * w * w;
    case 'glowshroom': return (w < 0.70) ? 271 : 532.5 * w * w;
    case 'bloodbanana': return (w < 1.42) ? 5415 : 2670 * w * w;
    case 'beanstalk': return (w < 9.5) ? 18050 : 200 * w * w;
    case 'coconut': return (w < 13.31) ? 361 : 2.04 * w * w;
    case 'candyblossom': return (w < 2.85) ? 90250 : 11111.111 * w * w;
    case 'carrot': return (w < 0.24) ? 18 : 275 * w * w;
    case 'strawberry': return (w < 0.29) ? 14 : 175 * w * w;
    case 'blueberry': return (w < 0.17) ? 18 : 500 * w * w;
    case 'orangetulip': return (w < 0.0499) ? 767 : 300000 * w * w;
    case 'tomato': return (w < 0.44) ? 27 : 120 * w * w;
    case 'daffodil': return (w < 0.16) ? 903 : 25000 * w * w;
    case 'watermelon': return (w < 7.3) ? 2708 : 61.25 * w * w;
    case 'pumpkin': return (w < 6.90) ? 3069 : 64 * w * w;
    case 'mushroom': return (w < 25.9) ? 136278 : 241.6 * w * w;
    case 'bamboo': return (w < 3.80) ? 3610 : 250 * w * w;
    case 'apple': return (w < 2.85) ? 248 : 30.53 * w * w;
    case 'corn': return (w < 1.90) ? 36 : 10.00 * w * w;
    case 'cactus': return (w < 6.65) ? 3069 : 69.4 * w * w;
    case 'cranberry': return (w < 0.95) ? 1805 : 2000 * w * w;
    case 'moonmelon': return (w < 6.84) ? 16245 : 280.85 * w * w;
    case 'pear': return (w < 2.85) ? 451 : 55.5 * w * w;
    case 'durian': return (w < 7.60) ? 4513 : 78.19 * w * w;
    case 'peach': return (w < 1.90) ? 271 : 75 * w * w;
    case 'cacao': return (w < 7.6) ? 9928 : 171.875 * w * w;
    case 'moonglow': return (w < 6.65) ? 18050 : 408.45 * w * w;
    case 'dragonfruit': return (w < 11.38) ? 4287 : 32.99 * w * w;
    case 'mango': return (w < 14.28) ? 5866 : 28.89 * w * w;
    case 'moonblossom': return (w < 2.86) ? 45125 : 5555.555 * w * w;
    case 'raspberry': return (w < 0.71) ? 90 : 177.5 * w * w;
    case 'eggplant': return (w < 4.75) ? 6769 : 300 * w * w;
    case 'papaya': return (w < 2.86) ? 903 : 111.11 * w * w;
    case 'celestiberry': return (w < 1.90) ? 7220 : 2000 * w * w;
    case 'moonmango': return (w < 14.25) ? 22563 : 222.22 * w * w;
    case 'banana': return (w < 1.425) ? 1579 : 777.77 * w * w;
    case 'passionfruit': return (w < 2.867) ? 3204 : 395 * w * w;
    case 'soulfruit': return (w < 23.75) ? 6994 : 12.4 * w * w;
    case 'hive': return (w < 7.614) ? 0 : 109 * w * w;
    case 'rose': return (w < 0.95) ? 0 : 5000 * w * w;
    case 'foxglove': return (w < 1.9) ? 0 : 5000 * w * w;
    case 'purpledahlia': return (w < 11.4) ? 0 : 522 * w * w;
    case 'lilac': return (w < 2.846) ? 0 : 3899 * w * w;
    case 'sunflower': return (w < 14.23) ? 0 : 666 * w * w;
    case 'pinklily': return (w < 4.3) ? 0 : 3172 * w * w;
    case 'nectarine': return (w < 2.807) ? 0 : 4445 * w * w;
    default: return w * w;
  }
}

function updateBasePricePerKg() {
  const plantId = getActivePlantId();
  const baseConst = getBaseValueConstant(plantId);
  const basePriceDiv = document.getElementById('basePricePerKg');
  if (plantId && baseConst !== null) {
    basePriceDiv.textContent = `Base per kg: $${baseConst}`;
  } else {
    basePriceDiv.textContent = '';
  }
}
