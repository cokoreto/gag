const modifiers = [
  'wet', 'chilled',
  'disco', 'choc', 'bloodlit', 'heavenly', 'celestial', 'moonlit',
  'frozen', 'zomb', 'shocked', 'plasma',
  'voidtouched', 'pollinated', 'honeyglazed',
  'burnt', 'cooked', 'dawnbound', 'meteoric', 'molten',
  'alienlike', 'sundried', 'galactic', 'windstruck', 'paradisal', 'twisted', 'verdant',
  'aurora', 'drenched',
  'cloudtouched', 'fried', 'sandy',
  'amber', 'oldamber', 'ancientamber', 'clay', 'ceramic'
];
const modifierLabels = {
  wet: 'Wet 2X',
  chilled: 'Chilled 2X',
  disco: 'Disco 125X',
  choc: 'Choc 2X',
  bloodlit: 'Bloodlit 4X',
  heavenly: 'Heavenly 5X',
  celestial: 'Celestial 120X',
  moonlit: 'Moonlit 2X',
  frozen: 'Frozen 10X',
  zomb: 'Zombified 25X',
  shocked: 'Shocked 100X',
  plasma: 'Plasma 5X',
  voidtouched: 'Voidtouched 135X',
  pollinated: 'Pollinated 3X',
  honeyglazed: 'Honeyglazed 5X',
  burnt: 'Burnt 4X',
  cooked: 'Cooked 10X',
  dawnbound: 'Dawnbound 150X',
  meteoric: 'Meteoric 125X',
  molten: 'Molten 25X',
  alienlike: 'Alienlike 100X',
  sundried: 'Sundried 85X',
  galactic: 'Galactic 120X',
  windstruck: 'Windstruck 2X',
  paradisal: 'Paradisal 100X',
  twisted: 'Twisted 2X',
  verdant: 'Verdant 4X',
  aurora: 'Aurora 90X',
  drenched: 'Drenched 5X',
  cloudtouched: 'Cloudtouched 5X',
  fried: 'Fried 8X',
  sandy: 'Sandy 3X',
  amber: 'Amber 10X',
  oldamber: 'OldAmber 20X',
  ancientamber: 'Ancient Amber 50X',
  clay: 'Clay 3X',
  ceramic: 'Ceramic 30X'
};
const fruitTypes = [
  { id: 'rainbow', label: 'Rainbow 50X' },
  { id: 'gold', label: 'Gold 20X' }
];
const categories = {
  "Seed Shop": ['carrot','strawberry','blueberry','orangetulip','tomato','corn','daffodil','watermelon','pumpkin','apple','bamboo','coconut','cactus','dragonfruit','mango','grape','mushroom','pepper','cacao','beanstalk','emberlily'],
  "Night Event": ['nightshade','mint','glowshroom','moonmelon','starfruit','moonflower','bloodbanana','moonglow','moonblossom','celestiberry','moonmango'],
  "Easter Event": ['candyblossom','easteregg'],
  "Normal Seed Pack": ['raspberry','pear','peach'],
  "Event Seed Pack": ['cranberry','durian','eggplant'],
  "Exotic Plants": ['papaya','banana','passionfruit','soulfruit'],
  "Bee Event": ['hive','rose','foxglove','purpledahlia','lilac','sunflower','pinklily','nectarine','nectarshade','manuka','dandelion','lumira','honeysuckle'],
  "Crafting Seeds": [
    'beebalm', 'nectarthorn', 'suncoil', 'crocus', 'succulent', 'violetcorn', 'bendboo', 'cocovine', 'dragonpepper'
  ],
  "Summer Event": [
    'cauliflower','greenapple','avocado','pineapple','kiwi','bellpepper','pricklypear','loquat','feijoa','sugarapple','wildcarrot','cantaloupe','parasolflower','rosydelight','elephantears','banana','pear'
  ]
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
  nectarine: "img/nectarine.png",
  emberlily: "img/emberlily.png",
  nectarshade: "img/nectarshade.png",
  manuka: "img/manuka.png",
  dandelion: "img/dandelion.png",
  lumira: "img/lumira.png",
  honeysuckle: "img/honeysuckle.png",
  beebalm: "img/beebalm.png",
  nectarthorn: "img/nectarthorn.png",
  suncoil: "img/suncoil.png",
  crocus: "img/crocus.png",
  succulent: "img/succulent.png",
  violetcorn: "img/violetcorn.png",
  bendboo: "img/bendboo.png",
  cocovine: "img/cocovine.png",
  dragonpepper: "img/dragonpepper.png",
  cauliflower: "img/cauliflower.png",
  greenapple: "img/greenapple.png",
  avocado: "img/avocado.png",
  pineapple: "img/pineapple.png",
  kiwi: "img/kiwi.png",
  bellpepper: "img/bellpepper.png",
  pricklypear: "img/pricklypear.png",
  loquat: "img/loquat.png",
  feijoa: "img/feijoa.png",
  sugarapple: "img/sugarapple.png",
  wildcarrot: "img/wildcarrot.png",
  cantaloupe: "img/cantaloupe.png",
  parasolflower: "img/parasolflower.png",
  rosydelight: "img/rosydelight.png",
  elephantears: "img/elephantears.png"
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
  purpledahlia: "Purple Dahlia",
  lilac: "Lilac",
  sunflower: "Sunflower",
  pinklily: "Pink Lily",
  nectarine: "Nectarine",
  emberlily: "Ember Lily",
  nectarshade: "Nectarshade",
  manuka: "Manuka",
  dandelion: "Dandelion",
  lumira: "Lumira",
  honeysuckle: "Honeysuckle",
  beebalm: "Beebalm",
  nectarthorn: "Nectar Thorn",
  suncoil: "Suncoil",
  crocus: "Crocus",
  succulent: "Succulent",
  violetcorn: "Violet Corn",
  bendboo: "Bendboo",
  cocovine: "Cocovine",
  dragonpepper: "Dragon Pepper",
  cauliflower: "Cauliflower",
  greenapple: "Green Apple",
  avocado: "Avocado",
  pineapple: "Pineapple",
  kiwi: "Kiwi",
  bellpepper: "Bell Pepper",
  pricklypear: "Prickly Pear",
  loquat: "Loquat",
  feijoa: "Feijoa",
  sugarapple: "Sugar Apple",
  wildcarrot: "Wild Carrot",
  cantaloupe: "Cantaloupe",
  parasolflower: "Parasol Flower",
  rosydelight: "Rosy Delight",
  elephantears: "Elephant Ears"
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
  if (id === 'dawnbound') {
    const activePlant = getActivePlantId();
    if (activePlant !== 'sunflower') return;
  }
  if (id === 'burnt') {
    setModifierActive('cooked', false, false);
  }
  if (id === 'cooked') {
    setModifierActive('burnt', false, false);
  }
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
  } else if (id === 'paradisal') {
    const btn = document.getElementById('modbtn-paradisal');
    const isActive = btn.classList.contains('active');
    if (!isActive) {
      setModifierActive('paradisal', true);
      setModifierActive('verdant', false, false);
      setModifierActive('sundried', false, false);
    }
    else {
      setModifierActive('paradisal', false);
      setModifierActive('verdant', false, false);
      setModifierActive('sundried', false, false);
    }
  } else if (id === 'verdant' || id === 'sundried') {
    // Logika seperti wet/chilled: jika salah satu aktif, yang lain disable
    const other = id === 'verdant' ? 'sundried' : 'verdant';
    if (!isActive) {
      setModifierActive(id, true, false);
      setModifierActive(other, false, true);
    } else {
      setModifierActive(id, false, false);
      setModifierActive(other, false, false);
    }
    calculateValue();
    return;
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
  if (plantMinWeights[changed] !== undefined) {
    document.getElementById('weight').value = plantMinWeights[changed];
  } else {
    document.getElementById('weight').value = 1.00;
  }
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
  hive: 5.9,
  rose: 0.95,
  foxglove: 1.9,
  purpledahlia: 11.4,
  lilac: 2.846,
  sunflower: 14.23,
  pinklily: 4.3,
  nectarine: 2.807,
  emberlily: 11.40,
  nectarshade: 0.75,
  manuka: 0.29,
  dandelion: 3.79,
  lumira: 5.69,
  honeysuckle: 11.40,
  beebalm: 0.940,
  nectarthorn: 5.760,
  suncoil: 9.500,
  crocus: 0.285,
  succulent: 4.750,
  violetcorn: 2.850,
  bendboo: 17.090,
  cocovine: 13.300,
  dragonpepper: 5.690,
  cauliflower: 4.740,
  greenapple: 2.850,
  avocado: 3.320,
  pineapple: 2.850,
  kiwi: 4.750,
  bellpepper: 7.610,
  pricklypear: 6.650,
  loquat: 6.170,
  feijoa: 9.500,
  sugarapple: 8.550,
  wildcarrot: 0.286,
  cantaloupe: 5.220,
  parasolflower: 5.700,
  rosydelight: 9.500,
  elephantears: 17.100
};
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

  let candyblossom = false, beanstalk = false, corn = false, coconut = false, easteregg = false, moonflower = false, starfruit = false, pepper = false, grape = false, nightshade = false, mint = false, glowshroom = false, bloodbanana = false, carrot = false, strawberry = false, blueberry = false, orangetulip = false, tomato = false, daffodil = false, watermelon = false, pumpkin = false, bamboo = false, cactus = false, apple = false, mushroom = false, moonmelon = false, cranberry = false, pear = false, durian = false, moonglow = false, peach = false, cacao = false, dragonfruit = false, mango = false, moonblossom = false, eggplant = false, raspberry = false, papaya = false, celestiberry = false, banana = false, passionfruit = false, soulfruit = false, moonmango = false, hive = false, rose = false, foxglove = false, purpledahlia = false, lilac = false, sunflower = false, pinklily = false, nectarine = false, emberlily = false, nectarshade = false, manuka = false, dandelion = false, lumira = false, honeysuckle = false;
  let beebalm = false, nectarthorn = false, suncoil = false, crocus = false, succulent = false, violetcorn = false, bendboo = false, cocovine = false, dragonpepper = false;
  let cauliflower = false, greenapple = false, avocado = false, pineapple = false, kiwi = false, bellpepper = false, pricklypear = false, loquat = false, feijoa = false, sugarapple = false, wildcarrot = false, cantaloupe = false, parasolflower = false, rosydelight = false, elephantears = false;

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
    baseValue = (weight < 2.85) ? null : 277.5 * weight * weight;
  }
  else if (moonflower) {
    baseValue = (weight < 1.90) ? null : 2381 * weight * weight;
  }
  else if (starfruit) {
    baseValue = (weight < 2.85) ? null : 1666.6 * weight * weight;
  }
  else if (pepper) {
    baseValue = (weight < 4.75) ? null : 320 * weight * weight;
  }
  else if (grape) {
    baseValue = (weight < 2.85) ? null : 872 * weight * weight;
  }
  else if (nightshade) {
    baseValue = (weight < 0.48) ? null : 13850 * weight * weight;
  }
  else if (mint) {
    baseValue = (weight < 0.95) ? null : 5230 * weight * weight;
  }
  else if (glowshroom) {
    baseValue = (weight < 0.70) ? null : 532.5 * weight * weight;
  }
  else if (bloodbanana) {
    baseValue = (weight < 1.42) ? null : 2670 * weight * weight;
  }
  else if (beanstalk) {
    baseValue = (weight < 9.5) ? null : 200 * weight * weight;
  }
  else if (coconut) {
    baseValue = (weight < 13.31) ? null : 2.04 * weight * weight;
  }
  else if (candyblossom) {
    baseValue = (weight < 2.85) ? null : 11111.111 * weight * weight;
  }
  else if (carrot) {
    baseValue = (weight < 0.24) ? null : 275 * weight * weight;
  }
  else if (strawberry) {
    baseValue = (weight < 0.29) ? null : 175 * weight * weight;
  }
  else if (blueberry) {
    baseValue = (weight < 0.17) ? null : 500 * weight * weight;
  }
  else if (orangetulip) {
    baseValue = (weight < 0.0499) ? null : 300000 * weight * weight;
  }
  else if (tomato) {
    baseValue = (weight < 0.44) ? null : 120 * weight * weight;
  }
  else if (daffodil) {
    baseValue = (weight < 0.16) ? null : 25000 * weight * weight;
  }
  else if (watermelon) {
    baseValue = (weight < 7.3) ? null : 61.25 * weight * weight;
  }
  else if (pumpkin) {
    baseValue = (weight < 6.90) ? null : 64 * weight * weight;
  }
  else if (mushroom) {
    baseValue = (weight < 25.9) ? null : 241.6 * weight * weight;
  }
  else if (bamboo) {
    baseValue = (weight < 3.80) ? null : 250 * weight * weight;
  }
  else if (apple) {
    baseValue = (weight < 2.85) ? null : 30.53 * weight * weight;
  }
  else if (corn) {
    baseValue = (weight < 1.90) ? null : 10.00 * weight * weight;
  }
  else if (cactus) {
    baseValue = (weight < 6.65) ? null : 69.4 * weight * weight;
  }
  else if (cranberry) {
    baseValue = (weight < 0.95) ? null : 2000 * weight * weight;
  }
  else if (moonmelon) {
    baseValue = (weight < 6.84) ? null : 280.85 * weight * weight;
  }
  else if (pear) {
    baseValue = (weight < 2.85) ? null : 55.5 * weight * weight;
  }
  else if (durian) {
    baseValue = (weight < 7.60) ? null : 78.19 * weight * weight;
  }
  else if (peach) {
    baseValue = (weight < 1.90) ? null : 75 * weight * weight;
  }
  else if (cacao) {
    baseValue = (weight < 7.6) ? null : 171.875 * weight * weight;
  }
  else if (moonglow) {
    baseValue = (weight < 6.65) ? null : 408.45 * weight * weight;
  }
  else if (dragonfruit) {
    baseValue = (weight < 11.38) ? null : 32.99 * weight * weight;
  }
  else if (mango) {
    baseValue = (weight < 14.28 ) ? null : 28.89 * weight * weight;
  }
  else if (moonblossom) {
    baseValue = (weight < 2.86) ? null : 5555.555 * weight * weight;
  }
  else if (raspberry) {
    baseValue = (weight < 0.71) ? null : 177.5 * weight * weight;
  }
  else if (eggplant) {
    baseValue = (weight < 4.75) ? null : 300 * weight * weight;
  }
  else if (papaya) {
    baseValue = (weight < 2.86) ? null : 111.11 * weight * weight;
  }
  else if (celestiberry) {
    baseValue = (weight < 1.90) ? null : 2000 * weight * weight;
  }
  else if (moonmango) {
    baseValue = (weight < 14.25) ? null : 222.22 * weight * weight;
  }
  else if (banana) {
    baseValue = (weight < 1.425) ? null : 777.77 * weight * weight;
  }
  else if (passionfruit) {
    baseValue = (weight < 2.867) ? null : 395 * weight * weight;
  }
  else if (soulfruit) {
    baseValue = (weight < 23.75) ? null : 12.4 * weight * weight;
  }
  else if (hive) {
    baseValue = (weight < 5.9) ? null : 781.42 * weight * weight;
  }
  else if (rose) {
    baseValue = (weight < 0.95) ? null : 5000 * weight * weight;
  }
  else if (foxglove) {
    baseValue = (weight < 1.9) ? null : 5000 * weight * weight;
  }
  else if (purpledahlia) {
    baseValue = (weight < 11.4) ? null : 522 * weight * weight;
  }
  else if (lilac) {
    baseValue = (weight < 2.846) ? null : 3899 * weight * weight;
  }
  else if (sunflower) {
    baseValue = (weight < 14.23) ? null : 666 * weight * weight;
  }
  else if (pinklily) {
    baseValue = (weight < 4.3) ? null : 3172 * weight * weight;
  }
  else if (nectarine) {
    baseValue = (weight < 2.807) ? null : 4445 * weight * weight;
  }
  else if (emberlily) {
    baseValue = (weight < 11.40) ? null : 386 * weight * weight;
  }
  else if (nectarshade) {
    baseValue = (weight < 0.75) ? null : 78500 * weight * weight;
  }
  else if (manuka) {
    baseValue = (weight < 0.29) ? null : 270086 * weight * weight;
  }
  else if (dandelion) {
    baseValue = (weight < 3.79) ? null : 3141 * weight * weight;
  }
  else if (lumira) {
    baseValue = (weight < 5.69) ? null : 2370 * weight * weight;
  }
  else if (honeysuckle) {
    baseValue = (weight < 11.40) ? null : 694 * weight * weight;
  }
  else if (beebalm) {
    baseValue = (weight < 0.94) ? null : 18033.5 * weight * weight;
  }
  else if (nectarthorn) {
    baseValue = (weight < 5.76) ? null : 906.56 * weight * weight;
  }
  else if (suncoil) {
    baseValue = (weight < 9.5) ? null : 800 * weight * weight;
  }
  else if (crocus) {
    baseValue = (weight < 0.285) ? null : 333333 * weight * weight;
  }
  else if (succulent) {
    baseValue = (weight < 4.75) ? null : 1000 * weight * weight;
  }
  else if (violetcorn) {
    baseValue = (weight < 2.85) ? null : 5555.56 * weight * weight;
  }
  else if (bendboo) {
    baseValue = (weight < 17.09) ? null : 479.01 * weight * weight;
  }
  else if (cocovine) {
    baseValue = (weight < 13.3) ? null : 340 * weight * weight;
  }
  else if (dragonpepper) {
    baseValue = (weight < 5.69) ? null : 2470.2 * weight * weight;
  }
  else if (cauliflower) {
    baseValue = (weight < 4.74) ? null : 1.60 * weight * weight;
  }
  else if (greenapple) {
    baseValue = (weight < 2.85) ? null : 33.44 * weight * weight;
  }
  else if (avocado) {
    baseValue = (weight < 3.32) ? null : 8.32 * weight * weight;
  }
  else if (pineapple) {
    baseValue = (weight < 2.85) ? null : 222.56 * weight * weight;
  }
  else if (kiwi) {
    baseValue = (weight < 4.75) ? null : 110.00 * weight * weight;
  }
  else if (bellpepper) {
    baseValue = (weight < 7.61) ? null : 85.61 * weight * weight;
  }
  else if (pricklypear) {
    baseValue = (weight < 6.65) ? null : 143.27 * weight * weight;
  }
  else if (loquat) {
    baseValue = (weight < 6.17) ? null : 190.00 * weight * weight;
  }
  else if (feijoa) {
    baseValue = (weight < 9.5) ? null : 130.00 * weight * weight;
  }
  else if (sugarapple) {
    baseValue = (weight < 8.55) ? null : 592.60 * weight * weight;
  }
  else if (wildcarrot) {
    baseValue = (weight < 0.286) ? null : 275000.00 * weight * weight;
  }
  else if (cantaloupe) {
    baseValue = (weight < 5.22) ? null : 1129.00 * weight * weight;
  }
  else if (parasolflower) {
    baseValue = (weight < 5.7) ? null : 5577.78 * weight * weight;
  }
  else if (rosydelight) {
    baseValue = (weight < 9.5) ? null : 690.00 * weight * weight;
  }
  else if (elephantears) {
    baseValue = (weight < 17.1) ? null : 237.60 * weight * weight;
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
      default: base = null; break;
    }
  }
  return base;
}
function getBaseValueCalculated(plantId, weight) {
  if (!plantId) return null;
  let w = weight || 1;
  switch (plantId) {
    case 'easteregg': return (w < 2.85) ? null : 277.5 * w * w;
    case 'moonflower': return (w < 1.90) ? null : 2381 * w * w;
    case 'starfruit': return (w < 2.85) ? null : 1666.6 * w * w;
    case 'pepper': return (w < 4.75) ? null : 320 * w * w;
    case 'grape': return (w < 2.85) ? null : 872 * w * w;
    case 'nightshade': return (w < 0.48) ? null : 13850 * w * w;
    case 'mint': return (w < 0.95) ? null : 5230 * w * w;
    case 'glowshroom': return (w < 0.70) ? null : 532.5 * w * w;
    case 'bloodbanana': return (w < 1.42) ? null : 2670 * w * w;
    case 'beanstalk': return (w < 9.5) ? null : 200 * w * w;
    case 'coconut': return (w < 13.31) ? null : 2.04 * w * w;
    case 'candyblossom': return (w < 2.85) ? null : 11111.111 * w * w;
    case 'carrot': return (w < 0.24) ? null : 275 * w * w;
    case 'strawberry': return (w < 0.29) ? null : 175 * w * w;
    case 'blueberry': return (w < 0.17) ? null : 500 * w * w;
    case 'orangetulip': return (w < 0.0499) ? null : 300000 * w * w;
    case 'tomato': return (w < 0.44) ? null : 120 * w * w;
    case 'daffodil': return (w < 0.16) ? null : 25000 * w * w;
    case 'watermelon': return (w < 7.3) ? null : 61.25 * w * w;
    case 'pumpkin': return (w < 6.90) ? null : 64 * w * w;
    case 'mushroom': return (w < 25.9) ? null : 241.6 * w * w;
    case 'bamboo': return (w < 3.80) ? null : 250 * w * w;
    case 'apple': return (w < 2.85) ? null : 30.53 * w * w;
    case 'corn': return (w < 1.90) ? null : 10.00 * w * w;
    case 'cactus': return (w < 6.65) ? null : 69.4 * w * w;
    case 'cranberry': return (w < 0.95) ? null : 2000 * w * w;
    case 'moonmelon': return (w < 6.84) ? null : 280.85 * w * w;
    case 'pear': return (w < 2.85) ? null : 55.5 * w * w;
    case 'durian': return (w < 7.60) ? null : 78.19 * w * w;
    case 'peach': return (w < 1.90) ? null : 75 * w * w;
    case 'cacao': return (w < 7.6) ? null : 171.875 * w * w;
    case 'moonglow': return (w < 6.65) ? null : 408.45 * w * w;
    case 'dragonfruit': return (w < 11.38) ? null : 32.99 * w * w;
    case 'mango': return (w < 14.28) ? null : 28.89 * w * w;
    case 'moonblossom': return (w < 2.86) ? null : 5555.555 * w * w;
    case 'raspberry': return (w < 0.71) ? null : 177.5 * w * w;
    case 'eggplant': return (w < 4.75) ? null : 300 * w * w;
    case 'papaya': return (w < 2.86) ? null : 111.11 * w * w;
    case 'celestiberry': return (w < 1.90) ? null : 2000 * w * w;
    case 'moonmango': return (w < 14.25) ? null : 222.22 * w * w;
    case 'banana': return (w < 1.425) ? null : 777.77 * w * w;
    case 'passionfruit': return (w < 2.867) ? null : 395 * w * w;
    case 'soulfruit': return (w < 23.75) ? null : 12.4 * w * w;
    case 'hive': return (w < 5.9) ? null : 781.42 * w * w;
    case 'rose': return (w < 0.95) ? null : 5000 * w * w;
    case 'foxglove': return (w < 1.9) ? null : 5000 * w * w;
    case 'purpledahlia': return (w < 11.4) ? null : 522 * w * w;
    case 'lilac': return (w < 2.846) ? null : 3899 * w * w;
    case 'sunflower': return (w < 14.23) ? null : 666 * w * w;
    case 'pinklily': return (w < 4.3) ? null : 3172 * w * w;
    case 'nectarine': return (w < 2.807) ? null : 4445 * w * w;
    case 'emberlily': return (w < 11.40) ? null : 386 * w * w;
    case 'nectarshade': return (w < 0.75) ? null : 78500 * w * w;
    case 'manuka': return (w < 0.29) ? null : 270086 * w * w;
    case 'dandelion': return (w < 3.79) ? null : 3141 * w * w;
    case 'lumira': return (w < 5.69) ? null : 2370 * w * w;
    case 'honeysuckle': return (w < 11.40) ? null : 694 * w * w;
    case 'beebalm': return (w < 0.94) ? null : 18033.5 * w * w;
    case 'nectarthorn': return (w < 5.76) ? null : 906.56 * w * w;
    case 'suncoil': return (w < 9.5) ? null : 800 * w * w;
    case 'crocus': return (w < 0.285) ? null : 333333 * w * w;
    case 'succulent': return (w < 4.75) ? null : 1000 * w * w;
    case 'violetcorn': return (w < 2.85) ? null : 5555.56 * w * w;
    case 'bendboo': return (w < 17.09) ? null : 479.01 * w * w;
    case 'cocovine': return (w < 13.3) ? null : 340 * w * w;
    case 'dragonpepper': return (w < 5.69) ? null : 2470.2 * w * w;
    case 'cauliflower': return (w < 4.74) ? null : 1.60 * w * w;
    case 'greenapple': return (w < 2.85) ? null : 33.44 * w * w;
    case 'avocado': return (w < 3.32) ? null : 8.32 * w * w;
    case 'pineapple': return (w < 2.85) ? null : 222.56 * w * w;
    case 'kiwi': return (w < 4.75) ? null : 110.00 * w * w;
    case 'bellpepper': return (w < 7.61) ? null : 85.61 * w * w;
    case 'pricklypear': return (w < 6.65) ? null : 143.27 * w * w;
    case 'loquat': return (w < 6.17) ? null : 190.00 * w * w;
    case 'feijoa': return (w < 9.5) ? null : 130.00 * w * w;
    case 'sugarapple': return (w < 8.55) ? null : 592.60 * w * w;
    case 'wildcarrot': return (w < 0.286) ? null : 275000.00 * w * w;
    case 'cantaloupe': return (w < 5.22) ? null : 1129.00 * w * w;
    case 'parasolflower': return (w < 5.7) ? null : 5577.78 * w * w;
    case 'rosydelight': return (w < 9.5) ? null : 690.00 * w * w;
    case 'elephantears': return (w < 17.1) ? null : 237.60 * w * w;
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

window.addEventListener('DOMContentLoaded', () => {
  const imgNames = Object.values(plantImages);

  let canvas = document.getElementById('rain-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'rain-canvas';
    canvas.style.position = 'fixed';
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = 0;
    canvas.style.opacity = '0.28';
    document.body.prepend(canvas);
  }

  const ctx = canvas.getContext('2d');
  let W = window.innerWidth, H = window.innerHeight;
  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  }
  resize();
  window.addEventListener('resize', resize);

  const loadedImgs = [];
  let loadedCount = 0;
  imgNames.forEach(src => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      loadedCount++;
      if (loadedCount === imgNames.length) startRain();
    };
    img.onerror = () => {
      loadedCount++;
      if (loadedCount === imgNames.length) startRain();
    };
    loadedImgs.push(img);
  });

  let drops = [];
  function randomImg() {
    return loadedImgs[Math.floor(Math.random() * loadedImgs.length)];
  }
  function spawnDrop() {
    const img = randomImg();
    const size = 32 + Math.random() * 32;
    return {
      x: Math.random() * W,
      y: -size,
      size,
      speed: 0.7 + Math.random() * 0.7,
      angle: Math.random() * 360,
      spin: (Math.random() - 0.5) * 1.2,
      img
    };
  }

  function startRain() {
    drops = [];
    const dropCount = Math.max(18, Math.floor(W / 60));
    for (let i = 0; i < dropCount; i++) {
      drops.push(spawnDrop());
    }
    animate();
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    for (let d of drops) {
      d.y += d.speed;
      d.angle += d.spin;
      if (d.y > H + d.size) {
        Object.assign(d, spawnDrop(), {y: -d.size});
      }
      if (d.img.complete && d.img.naturalWidth > 0) {
        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(d.angle * Math.PI / 180);
        ctx.globalAlpha = 0.7;
        ctx.drawImage(d.img, -d.size/2, -d.size/2, d.size, d.size);
        ctx.restore();
      }
    }
    requestAnimationFrame(animate);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchPlantInput');
  const suggestionBox = document.getElementById('plant-search-suggestion');
  if (!searchInput || !suggestionBox) return;

  const plantList = plantIds.map(id => ({
    id,
    label: plantLabels[id] || (id.charAt(0).toUpperCase() + id.slice(1))
  }));

  function showSuggestions(query) {
    suggestionBox.innerHTML = '';
    if (!query) {
      suggestionBox.style.display = 'none';
      return;
    }
    const q = query.trim().toLowerCase();
    let filtered = plantList.filter(p => p.label.toLowerCase().startsWith(q));
    if (filtered.length === 0) {
      filtered = plantList.filter(p => p.label.toLowerCase().includes(q));
    }
    if (filtered.length === 0) {
      suggestionBox.style.display = 'none';
      return;
    }
    filtered.slice(0, 12).forEach(p => {
      const div = document.createElement('div');
      const img = document.createElement('img');
      img.src = plantImages[p.id] || '';
      img.alt = p.label;
      div.appendChild(img);
      const span = document.createElement('span');
      span.textContent = p.label;
      div.appendChild(span);
      div.dataset.plantId = p.id;
      div.tabIndex = 0;
      div.onclick = () => {
        selectPlantById(p.id);
        suggestionBox.style.display = 'none';
        searchInput.value = p.label;
      };
      div.onmousedown = e => e.preventDefault();
      suggestionBox.appendChild(div);
    });
    suggestionBox.style.display = 'block';
  }

  function selectPlantById(plantId) {
    plantIds.forEach(id => {
      const btn = document.getElementById(`plantbtn-${id}`);
      if (btn) btn.classList.toggle('active', id === plantId);
    });
    if (plantMinWeights[plantId] !== undefined) {
      document.getElementById('weight').value = plantMinWeights[plantId];
    } else {
      document.getElementById('weight').value = 1.00;
    }
    calculateValue();
    updateBasePricePerKg();
    const btn = document.getElementById(`plantbtn-${plantId}`);
    if (btn) {
      btn.scrollIntoView({behavior: 'smooth', block: 'center'});
      btn.classList.add('search-highlight');
      setTimeout(() => btn.classList.remove('search-highlight'), 1200);
    }
  }

  function searchAndHighlightPlant() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      suggestionBox.style.display = 'none';
      return;
    }
    const found = plantList.find(p => p.label.toLowerCase() === query);
    if (found) {
      selectPlantById(found.id);
      suggestionBox.style.display = 'none';
    } else {
      showSuggestions(query);
    }
  }

  searchInput.addEventListener('input', function() {
    showSuggestions(this.value);
  });
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      searchAndHighlightPlant();
      suggestionBox.style.display = 'none';
    } else if (e.key === 'ArrowDown') {
      const first = suggestionBox.querySelector('div');
      if (first) first.focus();
    }
  });
  searchInput.addEventListener('blur', function() {
    setTimeout(() => { suggestionBox.style.display = 'none'; }, 120);
  });

  suggestionBox.addEventListener('keydown', function(e) {
    const items = Array.from(suggestionBox.querySelectorAll('div'));
    const idx = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') {
      if (idx < items.length - 1) items[idx + 1].focus();
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      if (idx > 0) items[idx - 1].focus();
      else searchInput.focus();
      e.preventDefault();
    } else if (e.key === 'Enter') {
      document.activeElement.click();
      e.preventDefault();
    }
  });
});

