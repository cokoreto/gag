const modifiers = [
  // Created by @chocoreto
  'disco', 'choc', 'bloodlit', 'celestial', 'moonlit',
  'frozen', 'zomb', 'shocked', 'plasma',
  'voidtouched', 'pollinated', 'honeyglazed'
];
const modifierLabels = {
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
  "Bee Event": ['hive','rose','foxglove','purpledahlia','lilac','sunflower','pinklily']
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
  pinklily: "img/pinklily.png"
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
  pinklily: "Pink Lily"
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
  pinklily: 4.3
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

  let candyblossom = false, beanstalk = false, corn = false, coconut = false, easteregg = false, moonflower = false, starfruit = false, pepper = false, grape = false, nightshade = false, mint = false, glowshroom = false, bloodbanana = false, carrot = false, strawberry = false, blueberry = false, orangetulip = false, tomato = false, daffodil = false, watermelon = false, pumpkin = false, bamboo = false, cactus = false, apple = false, mushroom = false, moonmelon = false, cranberry = false, pear = false, durian = false, moonglow = false, peach = false, cacao = false, dragonfruit = false, mango = false, moonblossom = false, eggplant = false, raspberry = false, papaya = false, celestiberry = false, banana = false, passionfruit = false, soulfruit = false, moonmango = false, hive = false, rose = false, foxglove = false, purpledahlia = false, lilac = false, sunflower = false, pinklily = false;

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
    baseValue = (weight < 2.85) ? 2256 : 277.5 * Math.pow(weight, 2);
  }
  else if (moonflower) {
    baseValue = (weight < 1.90) ? 8574 : 2381 * Math.pow(weight, 2);
  }
  else if (starfruit) {
    baseValue = (weight < 2.85) ? 13538 : 1666.6 * Math.pow(weight, 2);
  }
  else if (pepper) {
    baseValue = (weight < 4.75) ? 7200 : 320 * Math.pow(weight, 2);
  }
  else if (grape) {
    baseValue = (weight < 2.85) ? 7085 : 872 * Math.pow(weight, 2);
  }
  else if (nightshade) {
    baseValue = (weight < 0.48) ? 3159 : 13850 * Math.pow(weight, 2);
  }
  else if (mint) {
    baseValue = (weight < 0.95) ? 4738 : 5230 * Math.pow(weight, 2);
  }
  else if (glowshroom) {
    baseValue = (weight < 0.70) ? 271 : 532.5 * Math.pow(weight, 2);
  }
  else if (bloodbanana) {
    baseValue = (weight < 1.42) ? 5415 : 2670 * Math.pow(weight, 2);
  }
  else if (beanstalk) {
    baseValue = (weight < 9.5) ? 18050 : 200 * Math.pow(weight, 2);
  }
  else if (coconut) {
    baseValue = (weight < 13.31) ? 361 : 2.04 * Math.pow(weight, 2);
  }
  else if (candyblossom) {
    baseValue = (weight < 2.85) ? 90250 : 11111.111 * Math.pow(weight, 2);
  }
  else if (carrot) {
    baseValue = (weight < 0.24) ? 18 : 275 * Math.pow(weight, 2);
  }
  else if (strawberry) {
    baseValue = (weight < 0.29) ? 14 : 175 * Math.pow(weight, 2);
  }
  else if (blueberry) {
    baseValue = (weight < 0.17) ? 18 : 500 * Math.pow(weight, 2);
  }
  else if (orangetulip) {
    baseValue = (weight < 0.0499) ? 767 : 300000 * Math.pow(weight, 2);
  }
  else if (tomato) {
    baseValue = (weight < 0.44) ? 27 : 120 * Math.pow(weight, 2);
  }
  else if (daffodil) {
    baseValue = (weight < 0.16) ? 903 : 25000 * Math.pow(weight, 2);
  }
  else if (watermelon) {
    baseValue = (weight < 7.3) ? 2708 : 61.25 * Math.pow(weight, 2);
  } 
  else if (pumpkin) {
    baseValue = (weight < 6.90) ? 3069 : 64 * Math.pow(weight, 2);
  }
  else if (mushroom) {
    baseValue = (weight < 25.9) ? 136278 : 241.6 * Math.pow(weight, 2);
  }
  else if (bamboo) {
    baseValue = (weight< 3.80) ? 3610 : 250 * Math.pow(weight,2);
  }
  else if (apple) {
    baseValue = (weight< 2.85) ? 248 : 30.53 * Math.pow(weight,2);
  }
  else if (corn) {
    baseValue = (weight < 1.90) ? 36 : 10.00 * Math.pow(weight,2);
  }
  else if (cactus) {
    baseValue = ( weight < 6.65) ? 3069 : 69.4 * Math.pow(weight,2);
  }
  else if (cranberry) {
    baseValue = (weight < 0.95) ? 1805 : 2000 * Math.pow(weight,2);
  }
  else if (moonmelon) {
    baseValue = (weight < 6.84) ? 16245 : 280.85 * Math.pow(weight, 2);
  }
  else if (pear) {
    baseValue = (weight < 2.85) ? 451 : 55.5 * Math.pow(weight, 2);
  }
  else if (durian) {
    baseValue = (weight < 7.60) ? 4513 : 78.19 * Math.pow(weight, 2);
  }
  else if (peach) {
    baseValue = (weight < 1.90) ? 271 : 75 * Math.pow(weight, 2);
  }
  else if (cacao) {
    baseValue = (weight < 7.6) ? 9928 : 171.875 * Math.pow(weight, 2);
  }
  else if (moonglow) {
    baseValue = (weight < 6.65) ? 18050 : 408.45 * Math.pow(weight, 2);
  }
  else if (dragonfruit) {
    baseValue = (weight < 11.38) ? 4287 : 32.99 * Math.pow(weight, 2);
  }
  else if (mango) {
    baseValue = (weight < 14.28 ) ? 5866 : 28.89 * Math.pow(weight,2);
  }
  else if (moonblossom) {
    baseValue = (weight < 2.86) ? 45125 : 5555.555 * Math.pow(weight, 2);
  }
  else if (raspberry) {
    baseValue = (weight < 0.71) ? 90 : 177.5 * Math.pow(weight, 2);
  }
  else if (eggplant) {
    baseValue = (weight < 4.75) ? 6769 : 300 * Math.pow(weight, 2);
  }
  else if (papaya) {
    baseValue = (weight < 2.86) ? 903 : 111.11 * Math.pow(weight, 2);
  }
  else if (celestiberry) {
    baseValue = (weight < 1.90) ? 7220 : 2000 * Math.pow(weight,2);
  }
  else if (moonmango) {
    baseValue = (weight < 14.25) ? 22563 : 111.11 * Math.pow(weight,2);
  }
  else if (banana) {
    baseValue = (weight < 1.425) ? 1579 : 777.77 * Math.pow(weight,2);
  }
  else if (passionfruit) {
    baseValue =  (weight < 2.867) ? 3204 : 395 * Math.pow(weight,2);
  }
  else if (soulfruit) {
    baseValue = ( weight < 23.75) ? 6994 : 12.4 * Math.pow(weight,2);
  }
  else if (hive) {
    baseValue = (weight < 7.614) ? 0 : 108.96 * Math.pow(weight, 2);
  }
  else if (rose) {
    baseValue = (weight < 0.95) ? 0 : 4750 * Math.pow(weight, 2);
  }
  else if (foxglove) {
    baseValue = (weight < 1.9) ? 0 : 9500 * Math.pow(weight, 2);
  }
  else if (purpledahlia) {
    baseValue = (weight < 11.4) ? 0 : 5936.84 * Math.pow(weight, 2);
  }
  else if (lilac) {
    baseValue = (weight < 2.846) ? 0 : 11100 * Math.pow(weight, 2);
  }
  else if (sunflower) {
    baseValue = (weight < 14.23) ? 0 : 9487.77 * Math.pow(weight, 2);
  }
  // Created by @chocoreto
  else if (pinklily) {
    baseValue = (weight < 4.3) ? 0 : 13636.74 * Math.pow(weight, 2);
  }
  else { 
    baseValue = Math.pow(weight, 2);
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

function getBasePricePerKg(plantId, weight) {
  if (!plantId) return null;
  let w = weight || 1;
  let base = 0;
  switch (plantId) {
    case 'easteregg': base = (w < 2.85) ? 2256 / w : 277.5 * w; break;
    case 'moonflower': base = (w < 1.90) ? 8574 / w : 2381 * w; break;
    case 'starfruit': base = (w < 2.85) ? 13538 / w : 1666.6 * w; break;
    case 'pepper': base = (w < 4.75) ? 7200 / w : 320 * w; break;
    case 'grape': base = (w < 2.85) ? 7085 / w : 872 * w; break;
    case 'nightshade': base = (w < 0.48) ? 3159 / w : 13850 * w; break;
    case 'mint': base = (w < 0.95) ? 4738 / w : 5230 * w; break;
    case 'glowshroom': base = (w < 0.70) ? 271 / w : 532.5 * w; break;
    case 'bloodbanana': base = (w < 1.42) ? 5415 / w : 2670 * w; break;
    case 'beanstalk': base = (w < 9.5) ? 18050 / w : 200 * w; break;
    case 'coconut': base = (w < 13.31) ? 361 / w : 2.04 * w; break;
    case 'candyblossom': base = (w < 2.85) ? 90250 / w : 11111.111 * w; break;
    case 'carrot': base = (w < 0.24) ? 18 / w : 275 * w; break;
    case 'strawberry': base = (w < 0.29) ? 14 / w : 175 * w; break;
    case 'blueberry': base = (w < 0.17) ? 18 / w : 500 * w; break;
    case 'orangetulip': base = (w < 0.0499) ? 767 / w : 300000 * w; break;
    case 'tomato': base = (w < 0.44) ? 27 / w : 120 * w; break;
    case 'daffodil': base = (w < 0.16) ? 903 / w : 25000 * w; break;
    case 'watermelon': base = (w < 7.3) ? 2708 / w : 61.25 * w; break;
    case 'pumpkin': base = (w < 6.90) ? 3069 / w : 64 * w; break;
    case 'mushroom': base = (w < 25.9) ? 136278 / w : 241.6 * w; break;
    case 'bamboo': base = (w < 3.80) ? 3610 / w : 250 * w; break;
    case 'apple': base = (w < 2.85) ? 248 / w : 30.53 * w; break;
    case 'corn': base = (w < 1.90) ? 36 / w : 10.00 * w; break;
    case 'cactus': base = (w < 6.65) ? 3069 / w : 69.4 * w; break;
    case 'cranberry': base = (w < 0.95) ? 1805 / w : 2000 * w; break;
    case 'moonmelon': base = (w < 6.84) ? 16245 / w : 280.85 * w; break;
    case 'pear': base = (w < 2.85) ? 451 / w : 55.5 * w; break;
    case 'durian': base = (w < 7.60) ? 4513 / w : 78.19 * w; break;
    case 'peach': base = (w < 1.90) ? 271 / w : 75 * w; break;
    case 'cacao': base = (w < 7.6) ? 9928 / w : 171.875 * w; break;
    case 'moonglow': base = (w < 6.65) ? 18050 / w : 408.45 * w; break;
    case 'dragonfruit': base = (w < 11.38) ? 4287 / w : 32.99 * w; break;
    case 'mango': base = (w < 14.28) ? 5866 / w : 28.89 * w; break;
    case 'moonblossom': base = (w < 2.86) ? 45125 / w : 5555.555 * w; break;
    case 'raspberry': base = (w < 0.71) ? 90 / w : 177.5 * w; break;
    case 'eggplant': base = (w < 4.75) ? 6769 / w : 300 * w; break;
    case 'papaya': base = (w < 2.86) ? 903 / w : 111.11 * w; break;
    case 'celestiberry': base = (w < 1.90) ? 7220 / w : 2000 * w; break;
    case 'moonmango': base = (w < 14.25) ? 22563 / w : 111.11 * w; break;
    case 'banana': base = (w < 1.425) ? 1579 / w : 777.77 * w; break;
    case 'passionfruit': base = (w < 2.867) ? 3204 / w : 395 * w; break;
    case 'soulfruit': base = (w < 23.75) ? 6994 / w : 12.4 * w; break;
    case 'hive': base = (w < 7.614) ? 0 : 108.96 * w; break;
    case 'rose': base = (w < 0.95) ? 0 : 4750 * w; break;
    case 'foxglove': base = (w < 1.9) ? 0 : 9500 * w; break;
    case 'purpledahlia': base = (w < 11.4) ? 0 : 5936.84 * w; break;
    case 'lilac': base = (w < 2.846) ? 0 : 11100 * w; break;
    case 'sunflower': base = (w < 14.23) ? 0 : 9487.77 * w; break;
    case 'pinklily': base = (w < 4.3) ? 0 : 13636.74 * w; break;
    default: base = null; break;
  }
  return base;
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
    case 'moonmango': return 111.11;
    case 'banana': return 777.77;
    case 'passionfruit': return 395;
    case 'soulfruit': return 12.4;
    case 'hive': return 108.96;
    case 'rose': return 4750;
    case 'foxglove': return 9500;
    case 'purpledahlia': return 5936.84;
    case 'lilac': return 11100;
    case 'sunflower': return 9487.77;
    case 'pinklily': return 13636.74; // Created by @chocoreto
    default: return null;
  }
}

function getBaseValueCalculated(plantId, weight) {
  if (!plantId) return null;
  let w = weight || 1;
  switch (plantId) {
    case 'easteregg': return (w < 2.85) ? 2256 : 277.5 * Math.pow(w, 2);
    case 'moonflower': return (w < 1.90) ? 8574 : 2381 * Math.pow(w, 2);
    case 'starfruit': return (w < 2.85) ? 13538 : 1666.6 * Math.pow(w, 2);
    case 'pepper': return (w < 4.75) ? 7200 : 320 * Math.pow(w, 2);
    case 'grape': return (w < 2.85) ? 7085 : 872 * Math.pow(w, 2);
    case 'nightshade': return (w < 0.48) ? 3159 : 13850 * Math.pow(w, 2);
    case 'mint': return (w < 0.95) ? 4738 : 5230 * Math.pow(w, 2);
    case 'glowshroom': return (w < 0.70) ? 271 : 532.5 * Math.pow(w, 2);
    case 'bloodbanana': return (w < 1.42) ? 5415 : 2670 * Math.pow(w, 2);
    case 'beanstalk': return (w < 9.5) ? 18050 : 200 * Math.pow(w, 2);
    case 'coconut': return (w < 13.31) ? 361 : 2.04 * Math.pow(w, 2);
    case 'candyblossom': return (w < 2.85) ? 90250 : 11111.111 * Math.pow(w, 2);
    case 'carrot': return (w < 0.24) ? 18 : 275 * Math.pow(w, 2);
    case 'strawberry': return (w < 0.29) ? 14 : 175 * Math.pow(w, 2);
    case 'blueberry': return (w < 0.17) ? 18 : 500 * Math.pow(w, 2);
    case 'orangetulip': return (w < 0.0499) ? 767 : 300000 * Math.pow(w, 2);
    case 'tomato': return (w < 0.44) ? 27 : 120 * Math.pow(w, 2);
    case 'daffodil': return (w < 0.16) ? 903 : 25000 * Math.pow(w, 2);
    case 'watermelon': return (w < 7.3) ? 2708 : 61.25 * Math.pow(w, 2);
    case 'pumpkin': return (w < 6.90) ? 3069 : 64 * Math.pow(w, 2);
    case 'mushroom': return (w < 25.9) ? 136278 : 241.6 * Math.pow(w, 2);
    case 'bamboo': return (w < 3.80) ? 3610 : 250 * Math.pow(w, 2);
    case 'apple': return (w < 2.85) ? 248 : 30.53 * Math.pow(w, 2);
    case 'corn': return (w < 1.90) ? 36 : 10.00 * Math.pow(w, 2);
    case 'cactus': return (w < 6.65) ? 3069 : 69.4 * Math.pow(w, 2);
    case 'cranberry': return (w < 0.95) ? 1805 : 2000 * Math.pow(w, 2);
    case 'moonmelon': return (w < 6.84) ? 16245 : 280.85 * Math.pow(w, 2);
    case 'pear': return (w < 2.85) ? 451 : 55.5 * Math.pow(w, 2);
    case 'durian': return (w < 7.60) ? 4513 : 78.19 * Math.pow(w, 2);
    case 'peach': return (w < 1.90) ? 271 : 75 * Math.pow(w, 2);
    case 'cacao': return (w < 7.6) ? 9928 : 171.875 * Math.pow(w, 2);
    case 'moonglow': return (w < 6.65) ? 18050 : 408.45 * Math.pow(w, 2);
    case 'dragonfruit': return (w < 11.38) ? 4287 : 32.99 * Math.pow(w, 2);
    case 'mango': return (w < 14.28) ? 5866 : 28.89 * Math.pow(w, 2);
    case 'moonblossom': return (w < 2.86) ? 45125 : 5555.555 * Math.pow(w, 2);
    case 'raspberry': return (w < 0.71) ? 90 : 177.5 * Math.pow(w, 2);
    case 'eggplant': return (w < 4.75) ? 6769 : 300 * Math.pow(w, 2);
    case 'papaya': return (w < 2.86) ? 903 : 111.11 * Math.pow(w, 2);
    case 'celestiberry': return (w < 1.90) ? 7220 : 2000 * Math.pow(w, 2);
    case 'moonmango': return (w < 14.25) ? 22563 : 111.11 * Math.pow(w, 2);
    case 'banana': return (w < 1.425) ? 1579 : 777.77 * Math.pow(w, 2);
    case 'passionfruit': return (w < 2.867) ? 3204 : 395 * Math.pow(w, 2);
    case 'soulfruit': return (w < 23.75) ? 6994 : 12.4 * Math.pow(w, 2);
    case 'hive': return (w < 7.614) ? 0 : 108.96 * Math.pow(w, 2);
    case 'rose': return (w < 0.95) ? 0 : 4750 * Math.pow(w, 2);
    case 'foxglove': return (w < 1.9) ? 0 : 9500 * Math.pow(w, 2);
    case 'purpledahlia': return (w < 11.4) ? 0 : 5936.84 * Math.pow(w, 2);
    case 'lilac': return (w < 2.846) ? 0 : 11100 * Math.pow(w, 2);
    case 'sunflower': return (w < 14.23) ? 0 : 9487.77 * Math.pow(w, 2);
    case 'pinklily': return (w < 4.3) ? 0 : 13636.74 * Math.pow(w, 2); // Created by @chocoreto
    default: return w;
  }
}

function updateBasePricePerKg() {
  const plantId = getActivePlantId();
  const weight = parseFloat(document.getElementById('weight').value) || 1;
  const baseConst = getBaseValueConstant(plantId);
  const baseCalc = getBaseValueCalculated(plantId, weight);
  const basePriceDiv = document.getElementById('basePricePerKg');
  // Created by @chocoreto
  if (plantId && baseConst !== null) {
    basePriceDiv.textContent = `Base per kg: $${baseConst} (${
      baseCalc !== null ? '$' + Math.round(baseCalc).toLocaleString() : '-'
    })`;
  } else {
    basePriceDiv.textContent = '';
  }
}
