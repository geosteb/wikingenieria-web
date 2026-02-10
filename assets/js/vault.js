document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('vault-search');
    const container = document.getElementById('vault-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    let currentFilter = 'all';

    // Función para renderizar tarjetas
    function renderCards(data) {
        container.innerHTML = ''; // Limpiar grid

        if (data.length === 0) {
            container.innerHTML = `
                <div class="col-span-full text-center py-20 opacity-50">
                    <i class="fas fa-terminal text-4xl mb-4 text-w-olive"></i>
                    <p class="font-mono text-w-sage">NO_DATA_FOUND :: Intenta con otro término.</p>
                </div>
            `;
            return;
        }

        data.forEach(item => {
            // Determinar color del borde según tipo
            let borderColor = 'border-w-olive/40';
            let badgeColor = 'text-w-olive';
            if(item.type === 'formula') { borderColor = 'border-blue-500/30'; badgeColor = 'text-blue-400'; }
            if(item.type === 'conversion') { borderColor = 'border-purple-500/30'; badgeColor = 'text-purple-400'; }

            const card = document.createElement('div');
            card.className = `bg-w-offblack border ${borderColor} p-5 rounded-sm shadow-xl relative overflow-hidden group hover:bg-w-olive/5 transition-all duration-300`;
            
            card.innerHTML = `
                <div class="absolute top-0 right-0 p-2">
                    <span class="flex items-center gap-1 text-[8px] font-mono text-green-500/80 uppercase tracking-tighter bg-green-500/10 px-2 py-1 rounded-bl-sm opacity-50 group-hover:opacity-100 transition">
                        <i class="fas fa-check-double text-[7px]"></i> Verificado
                    </span>
                </div>

                <div class="flex items-center gap-2 mb-4">
                    <span class="font-mono text-[9px] ${badgeColor} uppercase tracking-[0.2em] border-r border-w-olive/30 pr-2">${item.id}</span>
                    <span class="font-mono text-[9px] text-w-sage/40 uppercase tracking-widest">${item.category}</span>
                </div>

                <div class="space-y-1 mb-6">
                    <h3 class="font-mono text-sm text-w-light uppercase tracking-wider group-hover:text-white transition">${item.title}</h3>
                    <div class="bg-w-black/50 p-3 border-l-2 ${borderColor.replace('border', 'border-l')} relative group/code">
                        <p class="font-mono text-lg md:text-xl text-white tracking-tighter break-all">
                            ${item.value}
                        </p>
                        <p class="font-mono text-[10px] text-w-sage/50 mt-1">${item.unit}</p>
                    </div>
                </div>

                <div class="flex items-center justify-between pt-4 border-t border-w-olive/20">
                    <div class="flex flex-col">
                        <span class="font-mono text-[8px] text-w-sage/30 uppercase truncate max-w-[150px]">${item.desc}</span>
                    </div>
                    <button onclick="copyToClipboard('${item.value}')" class="flex items-center gap-2 px-3 py-1 bg-w-olive/20 hover:bg-w-olive text-w-light text-[9px] font-mono uppercase tracking-widest transition rounded-sm active:scale-95">
                        <i class="far fa-copy"></i> <span class="hidden md:inline">Copy</span>
                    </button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Lógica de Filtrado y Búsqueda
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

    // Event Listeners
    searchInput.addEventListener('input', filterData);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar estilo botones
            filterBtns.forEach(b => b.classList.remove('bg-w-olive', 'text-white'));
            filterBtns.forEach(b => b.classList.add('text-w-sage/50'));
            
            btn.classList.remove('text-w-sage/50');
            btn.classList.add('bg-w-olive', 'text-white');
            
            currentFilter = btn.dataset.filter;
            filterData();
        });
    });

    // Render inicial
    renderCards(vaultData);
});

// Función Global de Copiado
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Feedback visual simple (opcional)
        console.log('Copiado al portapapeles: ' + text);
    });
}