document.addEventListener('DOMContentLoaded', () => {
    // Referencias al DOM
    const searchInput = document.getElementById('vault-search');
    const clearSearchBtn = document.getElementById('clear-search');
    const container = document.getElementById('vault-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('info-modal');
    const modalContent = document.getElementById('modal-content');
    const paginationContainer = document.getElementById('pagination-controls');
    const backToTopBtn = document.getElementById('backToTop');
    const copyToast = document.getElementById('copy-toast');
    
    // Configuración
    const ITEMS_PER_PAGE = 24; 
    let currentPage = 1;
    let currentFilter = 'all';
    let currentData = [...vaultData]; 

    // --- 1. TIP DIARIO ---
    function setDailyTip() {
        const tipContainer = document.getElementById('daily-tip-content');
        if(tipContainer && vaultData.length > 0) {
            const randomItem = vaultData[Math.floor(Math.random() * vaultData.length)];
            tipContainer.innerHTML = `
                <span class="text-w-olive font-bold group-hover:text-w-light transition-colors duration-500">¿Sabías qué?</span> 
                <span class="text-w-sage/80 group-hover:text-white transition-colors duration-500">
                    El dato <span class="text-w-light font-bold">"${randomItem.title}"</span> tiene un valor de <span class="text-w-light border-b border-w-olive/50">${randomItem.value}</span>.
                </span>
                <span class="opacity-50 text-[10px] block mt-2 group-hover:opacity-80 transition-opacity duration-500">> ${randomItem.desc.substring(0, 120)}...</span>
            `;
        }
    }
    setDailyTip();

    // --- 2. LÓGICA DE BÚSQUEDA ---
    function filterData() {
        const rawQuery = searchInput.value.trim();
        
        // Controlar visibilidad botón X
        if(rawQuery.length > 0) {
            clearSearchBtn.classList.remove('hidden');
        } else {
            clearSearchBtn.classList.add('hidden');
        }

        const query = rawQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        if (query === "") {
            currentData = vaultData.filter(item => currentFilter === 'all' || item.type === currentFilter);
        } else {
            currentData = vaultData
                .map(item => {
                    let score = 0;
                    const title = item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    const cat = item.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    const desc = item.desc.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    const val = item.value.toLowerCase();
                    const unit = item.unit.toLowerCase();
                    const type = item.type.toLowerCase(); 
                    
                    if (title.includes(query)) score += 100;
                    if (title.startsWith(query)) score += 50;
                    if (cat.includes(query)) score += 40;
                    if (item.tags.some(t => t.toLowerCase().includes(query))) score += 30;
                    if (type.includes(query)) score += 20;
                    if (val.includes(query)) score += 20;
                    if (unit.includes(query)) score += 20;
                    if (desc.includes(query)) score += 10;

                    return { ...item, score }; 
                })
                .filter(item => item.score > 0) 
                .filter(item => currentFilter === 'all' || item.type === currentFilter) 
                .sort((a, b) => b.score - a.score);
        }

        currentPage = 1; 
        renderCards();
    }

    // Limpiar búsqueda al pulsar X
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        filterData();
    });

    // --- 3. RENDERIZADO ---
    function renderPagination() {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(currentData.length / ITEMS_PER_PAGE);

        if (totalPages <= 1) return;

        const createBtn = (icon, onClick, disabled) => {
            const btn = document.createElement('button');
            btn.innerHTML = `<i class="fas fa-${icon}"></i>`;
            btn.className = `w-10 h-10 flex items-center justify-center border border-w-olive/30 text-w-sage rounded-sm hover:bg-w-olive hover:text-white transition ${disabled ? 'opacity-30 cursor-not-allowed' : ''}`;
            btn.onclick = disabled ? null : onClick;
            return btn;
        };

        const prevBtn = createBtn('chevron-left', () => { 
            currentPage--; renderCards(); window.scrollTo({top: 300, behavior: 'smooth'}); 
        }, currentPage === 1);

        const nextBtn = createBtn('chevron-right', () => { 
            currentPage++; renderCards(); window.scrollTo({top: 300, behavior: 'smooth'}); 
        }, currentPage === totalPages);

        const indicator = document.createElement('span');
        indicator.className = 'font-mono text-xs text-w-sage/60 uppercase tracking-widest px-4';
        indicator.innerText = `${currentPage} / ${totalPages}`;

        paginationContainer.appendChild(prevBtn);
        paginationContainer.appendChild(indicator);
        paginationContainer.appendChild(nextBtn);
    }

    function renderCards() {
        container.innerHTML = '';
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const itemsToShow = currentData.slice(start, end);

        // Detectar si es móvil (pantalla < 768px) para la lógica del botón VER
        // En móvil la tarjeta es más ancha (1 col), en PC es más estrecha (3 cols).
        const isMobile = window.innerWidth < 768;
        // Si es móvil, permitimos más caracteres (ej: 40) antes de cortar. 
        // Si es PC, cortamos antes (ej: 22) porque la columna es estrecha.
        const charLimit = isMobile ? 40 : 22;
    
        if (itemsToShow.length === 0) {
            container.innerHTML = `
                <div class="col-span-full text-center py-20 opacity-50">
                    <i class="fas fa-search text-5xl mb-6 text-w-olive"></i>
                    <p class="font-mono text-lg text-w-sage">NO RESULTS :: Intenta otro término.</p>
                </div>
            `;
            paginationContainer.innerHTML = '';
            return;
        }
    
        itemsToShow.forEach(item => {
            let borderColor = 'border-w-olive/40';
            let badgeColor = 'text-w-olive';
            let iconType = 'fa-cube';
            
            if(item.type === 'formula') { 
                borderColor = 'border-blue-500/30'; 
                badgeColor = 'text-blue-400'; 
                iconType = 'fa-square-root-variable'; 
            }
            if(item.type === 'conversion') { 
                borderColor = 'border-purple-500/30'; 
                badgeColor = 'text-purple-400'; 
                iconType = 'fa-exchange-alt'; 
            }
    
            const isVerified = item.verified !== false;
            const tooltipText = isVerified ? "DATO VERIFICADO" : "DATO NO VERIFICADO";
            const tooltipColor = isVerified ? "text-green-400" : "text-yellow-500";
            const iconClass = isVerified ? "fa-check-double" : "fa-exclamation-triangle";
            const bgClass = isVerified ? "bg-green-500/10" : "bg-yellow-500/10";
            
            const verificationBadge = `
                <div class="group/verified relative flex items-center justify-end">
                    <span class="flex items-center justify-center w-6 h-6 ${tooltipColor} ${bgClass} rounded-bl-sm opacity-80 group-hover:opacity-100 transition cursor-help">
                        <i class="fas ${iconClass} text-[10px]"></i>
                    </span>
                    <span class="absolute right-8 top-0 bg-w-offblack border border-w-olive/50 text-[9px] font-mono ${tooltipColor} px-2 py-1 rounded-sm opacity-0 group-hover/verified:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 uppercase tracking-widest shadow-lg">
                        ${tooltipText}
                    </span>
                </div>
            `;
    
            // Lógica de truncado optimizada
            const isLongValue = item.value.length > charLimit;
            const showInfoBtn = item.desc.length > 80 || isLongValue;
    
            const tagsHTML = item.tags.slice(0, 4).map(tag => 
                `<span class="text-[9px] bg-w-olive/10 text-w-sage/40 px-1.5 py-0.5 rounded-sm border border-w-olive/20 group-hover:text-w-sage/60 group-hover:border-w-olive/40 transition whitespace-nowrap">#${tag}</span>`
            ).join(' ');
    
            const card = document.createElement('div');
            card.className = `bg-w-offblack border ${borderColor} p-6 rounded-sm shadow-xl relative overflow-hidden group hover:bg-w-olive/5 transition-all duration-300 flex flex-col h-full min-h-[420px]`;
            
            card.innerHTML = `
                <div class="absolute top-0 right-0 p-0 z-10">
                    ${verificationBadge}
                </div>
                <div class="flex items-center gap-3 mb-4 mt-1">
                    <span class="font-mono text-xs ${badgeColor} uppercase tracking-[0.2em] border-r border-w-olive/30 pr-3 font-bold">${item.id}</span>
                    <span class="font-mono text-xs text-w-sage/60 uppercase tracking-widest flex items-center gap-2 truncate">
                        <i class="fas ${iconType} opacity-50"></i> ${item.category}
                    </span>
                </div>
                <div class="min-h-[3rem] flex items-start mb-2">
                    <h3 class="font-mono text-base text-w-light font-bold uppercase tracking-wider group-hover:text-white transition leading-tight line-clamp-2">
                        ${item.title}
                    </h3>
                </div>
                <div class="bg-w-black/60 px-5 border-l-4 ${isVerified ? borderColor.replace('border', 'border-l') : 'border-yellow-500/50'} relative group/code mb-6 h-28 flex flex-col justify-center">
                    <p class="font-mono text-xl md:text-2xl text-white tracking-tighter font-medium truncate w-full" title="${item.value}">
                        ${item.value}
                    </p>
                    <p class="font-mono text-xs text-w-sage/80 mt-2 font-bold opacity-80 truncate">${item.unit}</p>
                    
                    ${isLongValue ? `<div class="absolute bottom-2 right-2"><button onclick="openModal('${item.id}')" class="text-[8px] uppercase tracking-widest text-w-sage/40 hover:text-white transition flex items-center gap-1"><i class="fas fa-expand"></i> Ver</button></div>` : ''}
                </div>
                <div class="mt-auto border-t border-w-olive/20 pt-4 flex flex-col gap-3">
                    <div class="min-h-[3rem]">
                        <p class="font-mono text-xs text-w-sage/80 leading-relaxed line-clamp-2">
                            ${item.desc}
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-1 h-6 overflow-hidden content-start">
                        ${tagsHTML}
                    </div>
                    <div class="flex justify-between items-center mt-2">
                        <div>
                             ${showInfoBtn ? `<button onclick="openModal('${item.id}')" class="text-[10px] font-mono text-w-sage/60 hover:text-white border-b border-dotted border-w-sage/40 hover:border-white transition">INFO (+)</button>` : ''}
                        </div>
                        <button onclick="copyToClipboard('${item.value}')" class="flex items-center gap-2 px-3 py-2 bg-w-olive/20 hover:bg-w-olive text-w-light text-[10px] font-mono font-bold uppercase tracking-widest transition rounded-sm active:scale-95 border border-transparent hover:border-w-light/20">
                            <i class="far fa-copy"></i> <span>COPY</span>
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
        renderPagination();
    }

    // --- EVENT LISTENERS ---
    searchInput.addEventListener('input', filterData);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('bg-w-olive', 'text-white', 'shadow-md');
                b.classList.add('text-w-sage', 'bg-w-offblack');
            });
            btn.classList.remove('text-w-sage', 'bg-w-offblack');
            btn.classList.add('bg-w-olive', 'text-white', 'shadow-md');
            currentFilter = btn.dataset.filter;
            filterData(); 
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { backToTopBtn.classList.remove('opacity-0', 'pointer-events-none'); } 
        else { backToTopBtn.classList.add('opacity-0', 'pointer-events-none'); }
    });

    // Modal
    window.openModal = function(id) {
        const item = vaultData.find(i => i.id === id);
        if(!item) return;
        document.getElementById('modal-id').innerText = item.id;
        document.getElementById('modal-category').innerText = item.category;
        document.getElementById('modal-title').innerText = item.title;
        document.getElementById('modal-value').innerText = item.value;
        document.getElementById('modal-unit').innerText = item.unit;
        document.getElementById('modal-desc').innerText = item.desc;
        modal.classList.remove('hidden');
        setTimeout(() => { modal.classList.remove('opacity-0'); modalContent.classList.remove('scale-95'); modalContent.classList.add('scale-100'); }, 10);
    };

    window.closeModal = function() {
        modal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        setTimeout(() => { modal.classList.add('hidden'); }, 300);
    };
    modal.addEventListener('click', (e) => { if(e.target === modal) window.closeModal(); });

    // Copiado con Toast
    window.copyToClipboard = function(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Mostrar Toast
            copyToast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                copyToast.classList.add('translate-y-20', 'opacity-0');
            }, 2000);
        });
    }

    renderCards();
});