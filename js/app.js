/**
 * POKEDEX APPLICATION
 * Configuração e mapeamento de estilos de tipos Pokémon
 */
const TYPE_COLORS = {
  grass:    { bg: 'bg-emerald-500', text: 'text-white', badge: 'bg-emerald-500 text-white', border: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-700', light: 'bg-emerald-50' },
  fire:     { bg: 'bg-rose-500',    text: 'text-white', badge: 'bg-rose-500 text-white',    border: 'border-rose-200',    gradient: 'from-rose-500 to-amber-600',  light: 'bg-rose-50' },
  water:    { bg: 'bg-sky-500',     text: 'text-white', badge: 'bg-sky-500 text-white',     border: 'border-sky-200',     gradient: 'from-sky-500 to-blue-700',   light: 'bg-sky-50' },
  bug:      { bg: 'bg-lime-600',    text: 'text-white', badge: 'bg-lime-600 text-white',    border: 'border-lime-200',    gradient: 'from-lime-600 to-emerald-700',light: 'bg-lime-50' },
  normal:   { bg: 'bg-stone-400',   text: 'text-white', badge: 'bg-stone-400 text-white',   border: 'border-stone-200',   gradient: 'from-stone-400 to-stone-600', light: 'bg-stone-50' },
  poison:   { bg: 'bg-purple-600',  text: 'text-white', badge: 'bg-purple-600 text-white',  border: 'border-purple-200',  gradient: 'from-purple-600 to-indigo-800',light: 'bg-purple-50' },
  electric: { bg: 'bg-amber-400',   text: 'text-slate-900', badge: 'bg-amber-400 text-slate-950', border: 'border-amber-200', gradient: 'from-amber-400 to-orange-500', light: 'bg-amber-50' },
  ground:   { bg: 'bg-amber-700',   text: 'text-white', badge: 'bg-amber-700 text-white',   border: 'border-amber-300',   gradient: 'from-amber-700 to-stone-800', light: 'bg-amber-50' },
  fairy:    { bg: 'bg-pink-400',    text: 'text-white', badge: 'bg-pink-400 text-white',    border: 'border-pink-200',    gradient: 'from-pink-400 to-rose-500',   light: 'bg-pink-50' },
  fighting: { bg: 'bg-orange-700',  text: 'text-white', badge: 'bg-orange-700 text-white',  border: 'border-orange-300',  gradient: 'from-orange-700 to-red-800',  light: 'bg-orange-50' },
  psychic:  { bg: 'bg-fuchsia-500', text: 'text-white', badge: 'bg-fuchsia-500 text-white', border: 'border-fuchsia-200', gradient: 'from-fuchsia-500 to-pink-600',light: 'bg-fuchsia-50' },
  rock:     { bg: 'bg-yellow-800',  text: 'text-white', badge: 'bg-yellow-800 text-white',  border: 'border-yellow-300',  gradient: 'from-yellow-800 to-stone-800', light: 'bg-yellow-50' },
  ghost:    { bg: 'bg-indigo-700',  text: 'text-white', badge: 'bg-indigo-700 text-white',  border: 'border-indigo-300',  gradient: 'from-indigo-700 to-purple-900', light: 'bg-indigo-50' },
  ice:      { bg: 'bg-cyan-400',    text: 'text-slate-900', badge: 'bg-cyan-400 text-slate-900', border: 'border-cyan-200', gradient: 'from-cyan-400 to-sky-600', light: 'bg-cyan-50' },
  dragon:   { bg: 'bg-violet-700',  text: 'text-white', badge: 'bg-violet-700 text-white',  border: 'border-violet-300',  gradient: 'from-violet-700 to-blue-900', light: 'bg-violet-50' },
  steel:    { bg: 'bg-slate-400',   text: 'text-white', badge: 'bg-slate-400 text-white',   border: 'border-slate-300',   gradient: 'from-slate-400 to-slate-600', light: 'bg-slate-100' },
  flying:   { bg: 'bg-indigo-400',  text: 'text-white', badge: 'bg-indigo-400 text-white',  border: 'border-indigo-200',  gradient: 'from-indigo-400 to-sky-600',  light: 'bg-indigo-50' }
};

const STAT_LABELS = {
  'hp': 'HP',
  'attack': 'Ataque',
  'defense': 'Defesa',
  'special-attack': 'Sp. Atk',
  'special-defense': 'Sp. Def',
  'speed': 'Velocidade'
};

const STAT_COLORS = {
  'hp': 'bg-emerald-500',
  'attack': 'bg-rose-500',
  'defense': 'bg-blue-500',
  'special-attack': 'bg-purple-500',
  'special-defense': 'bg-indigo-500',
  'speed': 'bg-amber-500'
};

// Estado da Aplicação
const state = {
  pokemonList: [],
  filteredList: [],
  currentSelectedPokemon: null,
  isShiny: false,
  isLoading: true
};

// Elementos DOM
const DOM = {
  pokemonGrid: document.getElementById('pokemonGrid'),
  loadingContainer: document.getElementById('loadingContainer'),
  noResultsState: document.getElementById('noResultsState'),
  searchInput: document.getElementById('searchInput'),
  typeFilter: document.getElementById('typeFilter'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  counterText: document.getElementById('counterText'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),
  refreshBtn: document.getElementById('refreshBtn'),
  
  // Modal
  modal: document.getElementById('pokemonModal'),
  modalCard: document.getElementById('modalCard'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  closeModalFooterBtn: document.getElementById('closeModalFooterBtn'),
  modalHeaderBg: document.getElementById('modalHeaderBg'),
  modalPokemonId: document.getElementById('modalPokemonId'),
  modalPokemonName: document.getElementById('modalPokemonName'),
  modalTypeBadges: document.getElementById('modalTypeBadges'),
  modalPokemonImg: document.getElementById('modalPokemonImg'),
  shinyToggleBtn: document.getElementById('shinyToggleBtn'),
  shinyToggleText: document.getElementById('shinyToggleText'),
  modalHeight: document.getElementById('modalHeight'),
  modalWeight: document.getElementById('modalWeight'),
  modalStatTotal: document.getElementById('modalStatTotal'),
  modalStatsList: document.getElementById('modalStatsList'),
  imageAura: document.getElementById('imageAura')
};

/**
 * Funções Utilitárias
 */
function formatPokemonId(id) {
  return `#${String(id).padStart(4, '0')}`;
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getTypeStyle(type) {
  return TYPE_COLORS[type.toLowerCase()] || {
    bg: 'bg-slate-400',
    text: 'text-white',
    badge: 'bg-slate-400 text-white',
    border: 'border-slate-200',
    gradient: 'from-slate-600 to-slate-800',
    light: 'bg-slate-100'
  };
}

/**
 * Módulos de Comunicação com a PokéAPI
 */
async function fetchGen1Pokemon() {
  try {
    updateLoadingState(true);
    DOM.counterText.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-red-500 mr-1.5"></i> Conectando à PokéAPI...';
    
    // 1. Obter a lista dos 151 primeiros Pokémon
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    if (!response.ok) throw new Error('Falha ao consultar PokéAPI');
    const data = await response.json();

    // 2. Fetch detalhado em paralelo com lotes para máxima performance e confiabilidade
    DOM.counterText.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-red-500 mr-1.5"></i> Carregando dados de 151 Pokémon...';
    
    const detailsPromises = data.results.map(async (item) => {
      const res = await fetch(item.url);
      return await res.json();
    });

    const allDetails = await Promise.all(detailsPromises);

    // Mapear e simplificar os dados para o estado local
    state.pokemonList = allDetails.map(p => ({
      id: p.id,
      name: p.name,
      types: p.types.map(t => t.type.name),
      primaryType: p.types[0].type.name,
      height: (p.height / 10).toFixed(1), // metros
      weight: (p.weight / 10).toFixed(1), // kg
      artwork: p.sprites.other['official-artwork'].front_default || p.sprites.front_default,
      shinyArtwork: p.sprites.other['official-artwork'].front_shiny || p.sprites.front_shiny,
      stats: p.stats.map(s => ({
        name: s.stat.name,
        base: s.base_stat
      }))
    }));

    state.filteredList = [...state.pokemonList];
    renderPokemonGrid();
    updateLoadingState(false);

  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    DOM.counterText.innerHTML = `<span class="text-rose-600 font-semibold"><i class="fa-solid fa-triangle-exclamation mr-1"></i> Falha ao carregar. Tente reiniciar.</span>`;
    DOM.loadingContainer.classList.add('hidden');
    DOM.noResultsState.classList.remove('hidden');
  }
}

function updateLoadingState(loading) {
  state.isLoading = loading;
  if (loading) {
    DOM.loadingContainer.classList.remove('hidden');
    DOM.pokemonGrid.classList.add('hidden');
    DOM.noResultsState.classList.add('hidden');
  } else {
    DOM.loadingContainer.classList.add('hidden');
    DOM.pokemonGrid.classList.remove('hidden');
  }
}

/**
 * Construção de Componentes e Renderização no DOM
 */
function createPokemonCard(pokemon) {
  const typeStyle = getTypeStyle(pokemon.primaryType);
  
  const card = document.createElement('div');
  // Tailwind classes: card rounded corners, hover scale, shadow, cursor-pointer
  card.className = `group relative bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 cursor-pointer overflow-hidden`;
  card.setAttribute('data-id', pokemon.id);

  // Subtle top gradient accent corresponding to primary type
  const topAccent = document.createElement('div');
  topAccent.className = `absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${typeStyle.gradient}`;
  card.appendChild(topAccent);

  // Card Header: ID & Pokéball background icon
  const headerRow = document.createElement('div');
  headerRow.className = 'flex items-center justify-between w-full mb-2';

  const idSpan = document.createElement('span');
  idSpan.className = 'font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full';
  idSpan.textContent = formatPokemonId(pokemon.id);

  const typeIndicator = document.createElement('div');
  typeIndicator.className = 'w-2 h-2 rounded-full ' + typeStyle.bg;
  headerRow.appendChild(idSpan);
  headerRow.appendChild(typeIndicator);
  card.appendChild(headerRow);

  // Card Center: Image with hover effect & subtle backdrop circle
  const imgContainer = document.createElement('div');
  imgContainer.className = 'relative flex items-center justify-center my-3 py-2';

  const bgGlow = document.createElement('div');
  bgGlow.className = `absolute w-28 h-28 rounded-full ${typeStyle.light} transition-all duration-300 group-hover:scale-110`;
  
  const img = document.createElement('img');
  img.src = pokemon.artwork;
  img.alt = pokemon.name;
  img.loading = 'lazy';
  img.className = 'relative w-32 h-32 object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-110';

  imgContainer.appendChild(bgGlow);
  imgContainer.appendChild(img);
  card.appendChild(imgContainer);

  // Card Footer: Name & Type Badges
  const infoContainer = document.createElement('div');
  infoContainer.className = 'text-center mt-1 flex flex-col items-center';

  const nameHeading = document.createElement('h3');
  nameHeading.className = 'text-lg font-bold text-slate-800 capitalize tracking-tight group-hover:text-red-600 transition-colors';
  nameHeading.textContent = capitalize(pokemon.name);
  infoContainer.appendChild(nameHeading);

  // Badges Container
  const badgesContainer = document.createElement('div');
  badgesContainer.className = 'flex flex-wrap justify-center gap-1.5 mt-2';

  pokemon.types.forEach(type => {
    const style = getTypeStyle(type);
    const badge = document.createElement('span');
    badge.className = `px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-md ${style.badge} shadow-xs`;
    badge.textContent = type;
    badgesContainer.appendChild(badge);
  });

  infoContainer.appendChild(badgesContainer);
  card.appendChild(infoContainer);

  // Card click listener
  card.addEventListener('click', () => {
    openPokemonModal(pokemon);
  });

  return card;
}

function renderPokemonGrid() {
  DOM.pokemonGrid.innerHTML = '';
  
  if (state.filteredList.length === 0) {
    DOM.pokemonGrid.classList.add('hidden');
    DOM.noResultsState.classList.remove('hidden');
    DOM.counterText.textContent = 'Nenhum Pokémon encontrado';
    return;
  }

  DOM.noResultsState.classList.add('hidden');
  DOM.pokemonGrid.classList.remove('hidden');

  const fragment = document.createDocumentFragment();
  state.filteredList.forEach(pokemon => {
    fragment.appendChild(createPokemonCard(pokemon));
  });

  DOM.pokemonGrid.appendChild(fragment);
  DOM.counterText.innerHTML = `Mostrando <strong class="text-slate-800">${state.filteredList.length}</strong> de 151 Pokémon`;
}

/**
 * Filtros e Busca em Tempo Real
 */
function applyFilters() {
  const searchTerm = DOM.searchInput.value.trim().toLowerCase();
  const selectedType = DOM.typeFilter.value;

  // Mostra ou esconde o botão 'X' de limpar
  if (searchTerm.length > 0) {
    DOM.clearSearchBtn.classList.remove('hidden');
  } else {
    DOM.clearSearchBtn.classList.add('hidden');
  }

  state.filteredList = state.pokemonList.filter(pokemon => {
    // Filtro por Texto: Nome ou ID formatado / ID numérico
    const idMatches = pokemon.id.toString() === searchTerm || 
                      formatPokemonId(pokemon.id).toLowerCase().includes(searchTerm) ||
                      pokemon.id.toString().padStart(3, '0').includes(searchTerm);
    const nameMatches = pokemon.name.toLowerCase().includes(searchTerm);
    const matchesQuery = !searchTerm || nameMatches || idMatches;

    // Filtro por Tipo
    const matchesType = (selectedType === 'all') || pokemon.types.includes(selectedType);

    return matchesQuery && matchesType;
  });

  renderPokemonGrid();
}

/**
 * Modal Detalhado
 */
function openPokemonModal(pokemon) {
  state.currentSelectedPokemon = pokemon;
  state.isShiny = false;

  const typeStyle = getTypeStyle(pokemon.primaryType);

  // 1. Atualizar Header e Estilo do Modal
  DOM.modalHeaderBg.className = `relative px-6 pt-6 pb-20 bg-gradient-to-br ${typeStyle.gradient} text-white transition-colors duration-500`;
  DOM.modalPokemonId.textContent = formatPokemonId(pokemon.id);
  DOM.modalPokemonName.textContent = capitalize(pokemon.name);

  // Badges
  DOM.modalTypeBadges.innerHTML = '';
  pokemon.types.forEach(t => {
    const s = getTypeStyle(t);
    const badge = document.createElement('span');
    badge.className = `px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg bg-black/25 backdrop-blur-md text-white border border-white/20`;
    badge.textContent = t;
    DOM.modalTypeBadges.appendChild(badge);
  });

  // Imagem e Aura
  DOM.modalPokemonImg.src = pokemon.artwork;
  DOM.modalPokemonImg.alt = pokemon.name;
  DOM.imageAura.className = `absolute inset-0 rounded-full blur-2xl opacity-50 ${typeStyle.bg}`;

  // Botão Shiny Reset
  updateShinyButtonUI();

  // Altura e Peso
  DOM.modalHeight.textContent = `${pokemon.height} m`;
  DOM.modalWeight.textContent = `${pokemon.weight} kg`;

  // Renderizar Base Stats com barras de progresso
  DOM.modalStatsList.innerHTML = '';
  let totalStats = 0;

  pokemon.stats.forEach(stat => {
    totalStats += stat.base;
    const maxStatValue = 180; // Teto razoável para a Gen 1
    const percentage = Math.min(Math.round((stat.base / maxStatValue) * 100), 100);
    const statLabel = STAT_LABELS[stat.name] || stat.name;
    const statColor = STAT_COLORS[stat.name] || 'bg-slate-500';

    const row = document.createElement('div');
    row.className = 'flex items-center text-xs gap-3';

    row.innerHTML = `
      <div class="w-20 font-bold text-slate-500 shrink-0 truncate">${statLabel}</div>
      <div class="w-8 font-mono font-bold text-slate-800 text-right shrink-0">${stat.base}</div>
      <div class="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200/60 p-0.5">
        <div class="${statColor} h-full rounded-full transition-all duration-700 ease-out" style="width: 0%"></div>
      </div>
    `;

    DOM.modalStatsList.appendChild(row);

    // Animação da barra após inserção no DOM
    setTimeout(() => {
      const bar = row.querySelector('.h-full');
      if (bar) bar.style.width = `${percentage}%`;
    }, 50);
  });

  DOM.modalStatTotal.textContent = `Total: ${totalStats}`;

  // Exibir Modal com Transição
  DOM.modal.classList.remove('opacity-0', 'pointer-events-none');
  DOM.modalCard.classList.remove('scale-95');
  DOM.modalCard.classList.add('scale-100');
  document.body.classList.add('overflow-hidden');
}

function updateShinyButtonUI() {
  if (state.isShiny) {
    DOM.shinyToggleBtn.className = 'mt-2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition shadow-sm border border-amber-300 bg-amber-50 text-amber-800 ring-2 ring-amber-400/40 active:scale-95';
    DOM.shinyToggleText.textContent = 'Versão Normal';
  } else {
    DOM.shinyToggleBtn.className = 'mt-2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition shadow-sm border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 active:scale-95';
    DOM.shinyToggleText.textContent = 'Ver Versão Shiny';
  }
}

function toggleShinySprite() {
  if (!state.currentSelectedPokemon) return;
  state.isShiny = !state.isShiny;

  // Animação de troca suave de imagem
  DOM.modalPokemonImg.classList.add('opacity-40', 'scale-90');
  setTimeout(() => {
    DOM.modalPokemonImg.src = state.isShiny 
      ? state.currentSelectedPokemon.shinyArtwork 
      : state.currentSelectedPokemon.artwork;
    
    DOM.modalPokemonImg.classList.remove('opacity-40', 'scale-90');
  }, 150);

  updateShinyButtonUI();
}

function closeModal() {
  DOM.modal.classList.add('opacity-0', 'pointer-events-none');
  DOM.modalCard.classList.remove('scale-100');
  DOM.modalCard.classList.add('scale-95');
  document.body.classList.remove('overflow-hidden');
  state.currentSelectedPokemon = null;
}

/**
 * Event Listeners
 */
function setupEventListeners() {
  // Busca em tempo real
  DOM.searchInput.addEventListener('input', applyFilters);
  DOM.typeFilter.addEventListener('change', applyFilters);

  DOM.clearSearchBtn.addEventListener('click', () => {
    DOM.searchInput.value = '';
    applyFilters();
    DOM.searchInput.focus();
  });

  DOM.resetFiltersBtn.addEventListener('click', () => {
    DOM.searchInput.value = '';
    DOM.typeFilter.value = 'all';
    applyFilters();
  });

  DOM.refreshBtn.addEventListener('click', () => {
    DOM.searchInput.value = '';
    DOM.typeFilter.value = 'all';
    fetchGen1Pokemon();
  });

  // Alternar Shiny
  DOM.shinyToggleBtn.addEventListener('click', toggleShinySprite);

  // Fechamento de modal
  DOM.closeModalBtn.addEventListener('click', closeModal);
  DOM.closeModalFooterBtn.addEventListener('click', closeModal);
  
  // Clique fora do modal (overlay)
  DOM.modal.addEventListener('click', (e) => {
    if (e.target === DOM.modal) {
      closeModal();
    }
  });

  // Tecla ESC para fechar modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !DOM.modal.classList.contains('pointer-events-none')) {
      closeModal();
    }
  });
}

// Inicialização da Aplicação
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  fetchGen1Pokemon();
});