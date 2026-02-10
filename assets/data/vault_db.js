/* * WIKINGENIERÍA VAULT DATABASE
 * v2.2 - Fixed Data Structure & Tags
 */

const vaultData = [
    // --- CONSTANTES FUNDAMENTALES ---
    {
        id: "CTE_001",
        type: "constante",
        category: "Física",
        title: "Velocidad de la luz (vacío)",
        value: "299 792 458",
        unit: "m/s",
        desc: "Exacta por definición. Límite de velocidad del universo.",
        tags: ["c", "relatividad", "einstein", "vacío", "física"],
        verified: true
    },
    {
        id: "CTE_002",
        type: "constante",
        category: "Gravedad",
        title: "Gravedad Estándar (g)",
        value: "9.80665",
        unit: "m/s²",
        desc: "Aceleración media en la superficie terrestre. Usar 9.81 para cálculos rápidos.",
        tags: ["g", "peso", "caída libre", "newton", "tierra"],
        verified: true
    },
    {
        id: "CTE_003",
        type: "constante",
        category: "Termodinámica",
        title: "Cte. Gases Ideales (R)",
        value: "8.314462618",
        unit: "J / (mol · K)",
        desc: "Fundamental para ecuaciones de estado (PV=nRT).",
        tags: ["R", "gases", "termo", "química", "pv=nrt"],
        verified: true
    },
    {
        id: "CTE_004",
        type: "constante",
        category: "Matemáticas",
        title: "Número Pi (π)",
        value: "3.1415926535...",
        unit: "Adimensional",
        desc: "Relación entre la circunferencia y su diámetro.",
        tags: ["pi", "geometría", "círculo", "trigonometría", "radianes"],
        verified: true
    },
    {
        id: "CTE_005",
        type: "constante",
        category: "Física",
        title: "Constante de Planck (h)",
        value: "6.62607015 × 10⁻³⁴",
        unit: "J · s",
        desc: "Cuantización de la energía. Base de la mecánica cuántica.",
        tags: ["h", "cuántica", "fotones", "energía", "física"],
        verified: true
    },
    {
        id: "CTE_006",
        type: "constante",
        category: "Electromagnetismo",
        title: "Permisividad del vacío (ε₀)",
        value: "8.8541878128 × 10⁻¹²",
        unit: "F/m",
        desc: "Capacidad del vacío para permitir campos eléctricos.",
        tags: ["epsilon", "campo eléctrico", "condensador", "capacitancia"],
        verified: true
    },
    {
        id: "CTE_007",
        type: "constante",
        category: "Química",
        title: "Número de Avogadro (NA)",
        value: "6.02214076 × 10²³",
        unit: "mol⁻¹",
        desc: "Cantidad de partículas constituyentes en un mol.",
        tags: ["mol", "átomos", "química", "estequiometría"],
        verified: true
    },
    {
        id: "CTE_008",
        type: "constante",
        category: "Termodinámica",
        title: "Constante de Boltzmann (k)",
        value: "1.380649 × 10⁻²³",
        unit: "J/K",
        desc: "Relaciona temperatura y energía a nivel de partícula.",
        tags: ["k", "estadística", "entropía", "termo"],
        verified: true
    },
    {
        id: "CTE_009",
        type: "constante",
        category: "Física",
        title: "Carga elemental (e)",
        value: "1.602176634 × 10⁻¹⁹",
        unit: "C",
        desc: "Carga eléctrica de un protón (o electrón, signo opuesto).",
        tags: ["carga", "electrón", "protón", "electricidad"],
        verified: true
    },
    {
        id: "CTE_010",
        type: "constante",
        category: "Astrofísica",
        title: "Masa Solar",
        value: "1.98847 × 10³⁰",
        unit: "kg",
        desc: "Unidad estándar para medir masas estelares.",
        tags: ["sol", "astronomía", "masa", "espacio"],
        verified: true
    },
    {
        id: "CTE_011",
        type: "constante",
        category: "Termodinámica",
        title: "Constante de Stefan-Boltzmann",
        value: "5.670374419 × 10⁻⁸",
        unit: "W / (m² · K⁴)",
        desc: "Potencia radiada por un cuerpo negro por unidad de área.",
        tags: ["radiación", "calor", "cuerpo negro", "transferencia"],
        verified: true
    },
    {
        id: "CTE_012",
        type: "constante",
        category: "Fluidos",
        title: "Densidad Agua (4°C)",
        value: "999.97 (aprox 1000)",
        unit: "kg/m³",
        desc: "Densidad máxima del agua pura a presión atmosférica.",
        tags: ["agua", "densidad", "hidrostática", "fluidos"],
        verified: true
    },
    {
        id: "CTE_013",
        type: "constante",
        category: "Acústica",
        title: "Velocidad sonido (Aire 20°C)",
        value: "343",
        unit: "m/s",
        desc: "Varía con la temperatura. Aprox 1235 km/h.",
        tags: ["sonido", "ondas", "aire", "mach", "acústica"],
        verified: true
    },
    {
        id: "CTE_014",
        type: "constante",
        category: "Materiales",
        title: "Módulo Young (Acero)",
        value: "200 - 210",
        unit: "GPa",
        desc: "Rigidez típica de aceros estructurales al carbono.",
        tags: ["acero", "resistencia", "young", "elasticidad", "resis"],
        verified: true
    },
    {
        id: "CTE_015",
        type: "constante",
        category: "Matemáticas",
        title: "Número e (Euler)",
        value: "2.718281828...",
        unit: "Adimensional",
        desc: "Base de los logaritmos naturales. Crecimiento exponencial.",
        tags: ["e", "logaritmo", "cálculo", "exponencial"],
        verified: true
    },

    // --- FÓRMULAS ---
    {
        id: "FORM_001",
        type: "formula",
        category: "Mecánica",
        title: "2ª Ley de Newton",
        value: "F = m · a",
        unit: "Newtons (N)",
        desc: "La fuerza neta es proporcional a la aceleración.",
        tags: ["dinámica", "fuerza", "leyes", "física"],
        verified: true
    },
    {
        id: "FORM_002",
        type: "formula",
        category: "Fluidos",
        title: "Ecuación de Bernoulli",
        value: "P + ½ρv² + ρgh = cte",
        unit: "Energía/Volumen",
        desc: "Conservación de energía en flujo de fluidos incompresibles.",
        tags: ["hidráulica", "presión", "tuberías", "caudal"],
        verified: true
    },
    {
        id: "FORM_003",
        type: "formula",
        category: "Electricidad",
        title: "Ley de Ohm",
        value: "V = I · R",
        unit: "Voltios (V)",
        desc: "Relación fundamental V-I-R en circuitos óhmicos.",
        tags: ["voltaje", "resistencia", "corriente", "circuitos"],
        verified: true
    },
    {
        id: "FORM_004",
        type: "formula",
        category: "Resistencia",
        title: "Esfuerzo Normal (Tensión)",
        value: "σ = F / A",
        unit: "Pascales (Pa)",
        desc: "Fuerza aplicada dividida por el área de la sección transversal.",
        tags: ["tensión", "materiales", "esfuerzo", "tracción", "resis"],
        verified: true
    },
    {
        id: "FORM_005",
        type: "formula",
        category: "Termodinámica",
        title: "Ley de los Gases Ideales",
        value: "P · V = n · R · T",
        unit: "J (Energía)",
        desc: "Ecuación de estado para gases hipotéticos.",
        tags: ["gases", "presión", "temperatura", "termo"],
        verified: true
    },
    {
        id: "FORM_006",
        type: "formula",
        category: "Electricidad",
        title: "Potencia Eléctrica",
        value: "P = V · I",
        unit: "Vatios (W)",
        desc: "Potencia disipada o generada en un componente DC.",
        tags: ["potencia", "energía", "joule", "consumo", "watios"],
        verified: true
    },
    {
        id: "FORM_007",
        type: "formula",
        category: "Mecánica",
        title: "Energía Cinética",
        value: "Ec = ½ · m · v²",
        unit: "Julios (J)",
        desc: "Energía asociada al movimiento de un cuerpo.",
        tags: ["energía", "velocidad", "trabajo", "cinética"],
        verified: true
    },
    {
        id: "FORM_008",
        type: "formula",
        category: "Mecánica",
        title: "Energía Potencial Grav.",
        value: "Ep = m · g · h",
        unit: "Julios (J)",
        desc: "Energía por posición en campo gravitatorio cte.",
        tags: ["energía", "altura", "trabajo", "gravitatoria"],
        verified: true
    },
    {
        id: "FORM_009",
        type: "formula",
        category: "Fluidos",
        title: "Número de Reynolds",
        value: "Re = (ρ · v · D) / μ",
        unit: "Adimensional",
        desc: "Predice si el flujo es laminar (<2300) o turbulento (>4000).",
        tags: ["reynolds", "turbulencia", "laminar", "viscosidad"],
        verified: true
    },
    {
        id: "FORM_010",
        type: "formula",
        category: "Estadística",
        title: "Media Aritmética",
        value: "x̄ = (Σ xi) / n",
        unit: "Variable",
        desc: "Promedio simple de un conjunto de datos.",
        tags: ["promedio", "media", "datos", "estadística"],
        verified: true
    },
    {
        id: "FORM_011",
        type: "formula",
        category: "Geometría",
        title: "Área del Círculo",
        value: "A = π · r²",
        unit: "m²",
        desc: "Superficie contenida en una circunferencia.",
        tags: ["área", "círculo", "radio", "superficie"],
        verified: true
    },
    {
        id: "FORM_012",
        type: "formula",
        category: "Transferencia Calor",
        title: "Ley de Fourier (Conducción)",
        value: "q = -k · ∇T",
        unit: "W/m²",
        desc: "Flujo de calor es proporcional al gradiente de temperatura.",
        tags: ["calor", "conducción", "termo", "transferencia"],
        verified: true
    },
    {
        id: "FORM_013",
        type: "formula",
        category: "Electrónica",
        title: "Frecuencia de Resonancia LC",
        value: "f = 1 / (2π√LC)",
        unit: "Hertz (Hz)",
        desc: "Frecuencia natural de oscilación circuito tanque.",
        tags: ["radio", "frecuencia", "oscilador", "resonancia"],
        verified: true
    },
    {
        id: "FORM_014",
        type: "formula",
        category: "Mecánica",
        title: "Ley de Hooke (Muelle)",
        value: "F = -k · x",
        unit: "Newtons (N)",
        desc: "Fuerza restauradora es proporcional al estiramiento.",
        tags: ["muelle", "elástico", "resorte", "fuerza"],
        verified: true
    },
    {
        id: "FORM_999",
        type: "formula",
        category: "Fluidos (Avanzado)",
        title: "Navier-Stokes (Incomp.)",
        value: "ρ(∂u/∂t + u·∇u) = -∇p + μ∇²u + f",
        unit: "Momento",
        desc: "Ecuación diferencial que describe el movimiento de fluidos viscosos. Uno de los problemas del milenio. Sin solución general analítica.",
        tags: ["cfd", "viscosidad", "ecuaciones", "difícil"],
        verified: true
    },

    // --- CONVERSIONES ---
    {
        id: "CONV_001",
        type: "conversion",
        category: "Presión",
        title: "Bar a Pascales",
        value: "1 bar = 10⁵ Pa",
        unit: "Pa",
        desc: "Conversión estándar SI.",
        tags: ["presión", "bar", "pascal", "atmósferas"],
        verified: true
    },
    {
        id: "CONV_002",
        type: "conversion",
        category: "Potencia",
        title: "CV a W (Vatio)",
        value: "1 CV = 735.5 W",
        unit: "W",
        desc: "Caballo de vapor métrico.",
        tags: ["motor", "potencia", "coche", "auto", "caballos"],
        verified: true
    },
    {
        id: "CONV_003",
        type: "conversion",
        category: "Longitud",
        title: "Pulgada a mm",
        value: "1 in = 25.4 mm",
        unit: "mm",
        desc: "Exacta. Base del sistema imperial industrial.",
        tags: ["inch", "medida", "imperial", "pulgadas"],
        verified: true
    },
    {
        id: "CONV_004",
        type: "conversion",
        category: "Energía",
        title: "kWh a Julios",
        value: "1 kWh = 3.6 MJ",
        unit: "J",
        desc: "3.6 millones de julios.",
        tags: ["factura", "electricidad", "energía", "consumo"],
        verified: true
    },
    {
        id: "CONV_005",
        type: "conversion",
        category: "Temperatura",
        title: "Celsius a Kelvin",
        value: "K = °C + 273.15",
        unit: "K",
        desc: "Escala absoluta termodinámica.",
        tags: ["temperatura", "grados", "termo", "kelvin"],
        verified: true
    },
    {
        id: "CONV_006",
        type: "conversion",
        category: "Temperatura",
        title: "Fahrenheit a Celsius",
        value: "°C = (°F - 32) × 5/9",
        unit: "°C",
        desc: "Conversión sistema imperial a métrico.",
        tags: ["temperatura", "eeuu", "clima", "fahrenheit"],
        verified: true
    },
    {
        id: "CONV_007",
        type: "conversion",
        category: "Volumen",
        title: "Galón (US) a Litros",
        value: "1 gal ≈ 3.785 L",
        unit: "L",
        desc: "Galón líquido estadounidense (no imperial).",
        tags: ["gasolina", "volumen", "líquido", "galón"],
        verified: true
    },
    {
        id: "CONV_008",
        type: "conversion",
        category: "Ángulo",
        title: "Radianes a Grados",
        value: "deg = rad × (180/π)",
        unit: "°",
        desc: "Conversión de unidad natural a sexagesimal.",
        tags: ["trigonometría", "ángulo", "geometría", "radianes"],
        verified: true
    },
    {
        id: "CONV_009",
        type: "conversion",
        category: "Masa",
        title: "Libra (lb) a kg",
        value: "1 lb ≈ 0.4536 kg",
        unit: "kg",
        desc: "Libra masa internacional.",
        tags: ["peso", "masa", "gimnasio", "libras"],
        verified: true
    },
    {
        id: "CONV_010",
        type: "conversion",
        category: "Presión",
        title: "PSI a Bar",
        value: "1 psi ≈ 0.0689 bar",
        unit: "bar",
        desc: "Pound per square inch. Común en neumáticos.",
        tags: ["ruedas", "presión", "neumáticos", "llantas"],
        verified: true
    },

    // --- DATOS NO VERIFICADOS / EMPÍRICOS (EJEMPLOS FUNCIONALES) ---
    {
        id: "CTE_042",
        type: "constante",
        category: "Mecánica",
        title: "Fricción Caucho-Asfalto",
        value: "0.7 - 0.9 (Seco)",
        unit: "µ",
        desc: "Coeficiente muy variable. Baja drásticamente en mojado (0.3).",
        tags: ["coches", "carretera", "seguridad", "neumáticos", "asfalto"],
        verified: false
    },
    {
        id: "CTE_043",
        type: "constante",
        category: "Construcción",
        title: "Precio m² Reforma (España)",
        value: "600 - 800 €/m²",
        unit: "€",
        desc: "Estimación muy variable para calidades medias en 2026. Depende de zona.",
        tags: ["dinero", "obra", "civil", "presupuesto"],
        verified: false
    }
];