document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('vault-search');
    const container = document.getElementById('vault-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('info-modal');
    const modalContent = document.getElementById('modal-content');
    
    let currentFilter = 'all';

    // --- LÓGICA DEL TIP DIARIO ---
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

    // --- RENDERIZADO DE TARJETAS (Cajas Más Grandes) ---
    function renderCards(data) {
        container.innerHTML = ''; // Limpiar grid

        if (data.length === 0) {
            container.innerHTML = `
                <div class="col-span-full text-center py-20 opacity-50">
                    <i class="fas fa-terminal text-5xl mb-6 text-w-olive"></i>
                    <p class="font-mono text-lg text-w-sage">NO_DATA_FOUND :: Intenta con otro término.</p>
                </div>
            `;
            return;
        }

        data.forEach(item => {
            // Estilos según tipo
            let borderColor = 'border-w-olive/40';
            let badgeColor = 'text-w-olive';
            let iconType = 'fa-cube';
            
            if(item.type === 'formula') { borderColor = 'border-blue-500/30'; badgeColor = 'text-blue-400'; iconType = 'fa-square-root-variable'; }
            if(item.type === 'conversion') { borderColor = 'border-purple-500/30'; badgeColor = 'text-purple-400'; iconType = 'fa-exchange-alt'; }

            // Lógica de Verificado (Check verde o Warning amarillo)
            const isVerified = item.verified !== false; // Default true si no existe
            const verificationBadge = isVerified 
                ? `<span class="flex items-center gap-1 text-[10px] font-mono text-green-400 uppercase tracking-tighter bg-green-500/10 px-2 py-1 rounded-bl-sm opacity-80 group-hover:opacity-100 transition"><i class="fas fa-check-double text-[9px]"></i> Verificado</span>`
                : `<span class="flex items-center gap-1 text-[10px] font-mono text-yellow-500 uppercase tracking-tighter bg-yellow-500/10 px-2 py-1 rounded-bl-sm opacity-100"><i class="fas fa-exclamation-triangle text-[9px]"></i> Sin Verificar</span>`;

            // Botón Info si la descripción es larga (> 80 caracteres)
            const showInfoBtn = item.desc.length > 80;
            const infoButtonHTML = showInfoBtn 
                ? `<button onclick="openModal('${item.id}')" class="text-[10px] font-mono text-w-sage/60 hover:text-white border-b border-dotted border-w-sage/40 hover:border-white transition ml-2">INFO (+)</button>`
                : '';

            const card = document.createElement('div');
            // Clases de tamaño aumentadas (p-6, min-h)
            card.className = `bg-w-offblack border ${borderColor} p-8 rounded-sm shadow-xl relative overflow-hidden group hover:bg-w-olive/5 transition-all duration-300 flex flex-col`;
            
            card.innerHTML = `
                <div class="absolute top-0 right-0 p-0">
                    ${verificationBadge}
                </div>

                <div class="flex items-center gap-3 mb-6 mt-1">
                    <span class="font-mono text-xs ${badgeColor} uppercase tracking-[0.2em] border-r border-w-olive/30 pr-3 font-bold">${item.id}</span>
                    <span class="font-mono text-xs text-w-sage/60 uppercase tracking-widest flex items-center gap-2">
                        <i class="fas ${iconType} opacity-50"></i> ${item.category}
                    </span>
                </div>

                <div class="space-y-2 mb-8">
                    <h3 class="font-mono text-base md:text-lg text-w-light font-bold uppercase tracking-wider group-hover:text-white transition leading-tight">${item.title}</h3>
                    
                    <div class="bg-w-black/60 p-5 border-l-4 ${isVerified ? borderColor.replace('border', 'border-l') : 'border-yellow-500/50'} relative group/code mt-3">
                        <p class="font-mono text-2xl md:text-3xl text-white tracking-tighter break-all font-medium">
                            ${item.value}
                        </p>
                        <p class="font-mono text-xs text-w-sage/80 mt-2 font-bold opacity-80">${item.unit}</p>
                    </div>
                </div>

                <div class="mt-auto pt-6 border-t border-w-olive/20 flex flex-col gap-4">
                    <div>
                        <p class="font-mono text-xs text-w-sage/80 leading-relaxed line-clamp-2">
                            ${item.desc}
                        </p>
                        ${showInfoBtn ? `<div class="mt-1">${infoButtonHTML}</div>` : ''}
                    </div>
                    
                    <div class="flex justify-end">
                        <button onclick="copyToClipboard('${item.value}')" class="flex items-center gap-2 px-4 py-2 bg-w-olive/20 hover:bg-w-olive text-w-light text-[10px] font-mono font-bold uppercase tracking-widest transition rounded-sm active:scale-95 border border-transparent hover:border-w-light/20">
                            <i class="far fa-copy"></i> <span>Copy Value</span>
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // --- FILTRADO ---
    function filterData() {
        const query = searchInput.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        const filtered = vaultData.filter(item => {
            const matchesSearch = 
                item.title.toLowerCase().includes(query) || 
                item.tags.some(tag => tag.includes(query)) ||
                item.id.toLowerCase().includes(query);
            
            const matchesType = currentFilter === 'all' || item.type === currentFilter;

            return matchesSearch && matchesType;
        });

        renderCards(filtered);
    }

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

    renderCards(vaultData);

    // --- MODAL FUNCTIONS (Global Scope Access) ---
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
        // Small delay to allow transition
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }, 10);
    };

    window.closeModal = function() {
        modal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    };

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if(e.target === modal) window.closeModal();
    });
});

// Función Global de Copiado
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Podríamos añadir un toast aquí, pero por ahora log
        console.log('Copiado: ' + text);
    });
}