const categories = {
  "Seed Shop": ['carrot','strawberry','blueberry','orangetulip','tomato','corn','daffodil','watermelon','pumpkin','apple','bamboo','coconut','cactus','dragonfruit','mango','grape','mushroom','pepper','cacao','beanstalk','emberlily', 'sugarapple', 'burningbud'],
  "Night Event": ['nightshade','mint','glowshroom','moonmelon','starfruit','moonflower','bloodbanana','moonglow','moonblossom','celestiberry','moonmango'],
  "Easter Event": ['candyblossom','easteregg'],
  "Normal Seed Pack": ['raspberry','pear','peach'],
  "Event Seed Pack": ['cranberry','durian','eggplant'],
  "Exotic Plants": ['papaya','banana','passionfruit','soulfruit'],
  "Bee Event": ['hive','rose','foxglove','purpledahlia','lilac','sunflower','pinklily','nectarine','nectarshade','manuka','dandelion','lumira','honeysuckle'],
  "Crafting Seeds": ['beebalm', 'nectarthorn', 'suncoil', 'crocus', 'succulent', 'violetcorn', 'bendboo', 'cocovine', 'dragonpepper'],
  "Summer Event": ['cauliflower','greenapple','avocado','pineapple','kiwi','bellpepper','pricklypear','loquat','feijoa','wildcarrot','cantaloupe','parasolflower','rosydelight','elephantears','banana','pear'],
  "Prehistoric Event": ['stonebite','paradisepetal','horneddinoshroom','boneboo','fireflyfern','fossilight','boneblossom']
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

  if (id === 'cooked' || id === 'burnt') {
    const group = ['cooked', 'burnt'];
    group.forEach(gid => {
      setModifierActive(gid, gid === id ? !isModifierActive(id) : false);
    });
    calculateValue();
    return;
  }

  if (id === 'frozen' || id === 'wet' || id === 'chilled') {
    const group = ['frozen', 'wet', 'chilled'];
    group.forEach(gid => {
      setModifierActive(gid, gid === id ? !isModifierActive(id) : false);
    });
    calculateValue();
    return;
  }

  if (id === 'paradisal' || id === 'verdant' || id === 'sundried') {
    const group = ['paradisal', 'verdant', 'sundried'];
    group.forEach(gid => {
      setModifierActive(gid, gid === id ? !isModifierActive(id) : false);
    });
    calculateValue();
    return;

  } else if (id === 'amber' || id === 'oldamber' || id === 'ancientamber') {
    const amberGroup = ['amber', 'oldamber', 'ancientamber'];
    amberGroup.forEach(aid => {
      setModifierActive(aid, aid === id ? !isModifierActive(id) : false);
    });
    calculateValue();
    return;
  }

  setModifierActive(id, !isModifierActive(id));
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

document.getElementById('searchModifierInput').addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('#modifiers .mod-btn').forEach(btn => {
    const text = btn.textContent.toLowerCase();
    btn.style.display = text.includes(query) ? '' : 'none';
  });
});

modifierContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('mod-btn')) {
    document.getElementById('searchModifierInput').value = '';
    document.getElementById('searchModifierInput').dispatchEvent(new Event('input'));
  }
});

