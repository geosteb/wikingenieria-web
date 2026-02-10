/* * WIKINGENIERÍA VAULT DATABASE
 * v1.0 - Core Data
 */

const vaultData = [
    // --- CONSTANTES (FÍSICA & QUÍMICA) ---
    {
        id: "CTE_001",
        type: "constante",
        category: "Física",
        title: "Velocidad de la luz (vacío)",
        value: "299 792 458",
        unit: "m/s",
        desc: "Exacta por definición. Fundamental para relatividad y óptica.",
        tags: ["c", "luz", "einstein"]
    },
    {
        id: "CTE_002",
        type: "constante",
        category: "Gravedad",
        title: "Gravedad Estándar (Tierra)",
        value: "9.80665",
        unit: "m/s²",
        desc: "Valor estándar ISO. Usar 9.81 para cálculos rápidos.",
        tags: ["g", "peso", "newton"]
    },
    {
        id: "CTE_003",
        type: "constante",
        category: "Termodinámica",
        title: "Constante de los Gases Ideales",
        value: "8.314462618",
        unit: "J / (mol · K)",
        desc: "Fundamental para PV=nRT.",
        tags: ["R", "gases", "termo"]
    },
    {
        id: "CTE_004",
        type: "constante",
        category: "Física",
        title: "Constante de Planck",
        value: "6.62607015 × 10⁻³⁴",
        unit: "J · s",
        desc: "Cuantización de la energía.",
        tags: ["h", "cuantica", "fotones"]
    },
    {
        id: "CTE_005",
        type: "constante",
        category: "Electromagnetismo",
        title: "Permisividad del vacío",
        value: "8.8541878128 × 10⁻¹²",
        unit: "F/m",
        desc: "Epsilon sub-cero. Clave para condensadores y campo eléctrico.",
        tags: ["epsilon", "campo electrico"]
    },
    {
        id: "CTE_006",
        type: "constante",
        category: "Química",
        title: "Número de Avogadro",
        value: "6.02214076 × 10²³",
        unit: "mol⁻¹",
        desc: "Partículas en un mol de sustancia.",
        tags: ["NA", "mol", "quimica"]
    },
    {
        id: "CTE_007",
        type: "constante",
        category: "Mecánica",
        title: "Presión Atmosférica Estándar",
        value: "101 325",
        unit: "Pa",
        desc: "Equivale a 1 atm o 760 mmHg.",
        tags: ["atm", "presion", "pascal"]
    },
    {
        id: "CTE_008",
        type: "constante",
        category: "Termodinámica",
        title: "Cero Absoluto",
        value: "-273.15",
        unit: "°C",
        desc: "0 Kelvin. Límite inferior de temperatura termodinámica.",
        tags: ["kelvin", "frio", "termo"]
    },

    // --- CONVERSIONES (INGENIERÍA) ---
    {
        id: "CONV_001",
        type: "conversion",
        category: "Presión",
        title: "Bar a Pascales",
        value: "1 bar = 100,000 Pa",
        unit: "Conversión exacta",
        desc: "Útil para hidráulica y neumática.",
        tags: ["presion", "bar", "pascal"]
    },
    {
        id: "CONV_002",
        type: "conversion",
        category: "Potencia",
        title: "Caballo de Vapor (CV) a Vatios",
        value: "1 CV = 735.49875 W",
        unit: "W",
        desc: "Conversión métrica europea (DIN 66036).",
        tags: ["potencia", "motor", "coches"]
    },
    {
        id: "CONV_003",
        type: "conversion",
        category: "Potencia",
        title: "Horsepower (HP) a Vatios",
        value: "1 HP = 745.69987 W",
        unit: "W",
        desc: "Sistema imperial/mecánico. Cuidado: HP != CV.",
        tags: ["potencia", "imperial", "motor"]
    },
    {
        id: "CONV_004",
        type: "conversion",
        category: "Energía",
        title: "kWh a Julios",
        value: "1 kWh = 3.6 × 10⁶ J",
        unit: "J",
        desc: "Conversión estándar para facturas eléctricas.",
        tags: ["energia", "electricidad", "julio"]
    },
    {
        id: "CONV_005",
        type: "conversion",
        category: "Longitud",
        title: "Pulgada a Milímetros",
        value: "1 in = 25.4 mm",
        unit: "mm",
        desc: "Exacta por definición desde 1959.",
        tags: ["pulgada", "inch", "imperial"]
    },

    // --- FÓRMULAS (1º INGENIERÍA) ---
    {
        id: "FORM_001",
        type: "formula",
        category: "Mecánica",
        title: "Segunda Ley de Newton",
        value: "F = m · a",
        unit: "N",
        desc: "La fuerza neta es igual a la masa por la aceleración.",
        tags: ["dinamica", "fuerza", "newton"]
    },
    {
        id: "FORM_002",
        type: "formula",
        category: "Fluidos",
        title: "Ecuación de Bernoulli",
        value: "P + ½ρv² + ρgh = cte",
        unit: "Energía/Volumen",
        desc: "Conservación de energía en fluidos ideales.",
        tags: ["presion", "velocidad", "hidraulica"]
    },
    {
        id: "FORM_003",
        type: "formula",
        category: "Electricidad",
        title: "Ley de Ohm",
        value: "V = I · R",
        unit: "Voltios (V)",
        desc: "Relación fundamental en circuitos resistivos.",
        tags: ["voltaje", "corriente", "resistencia"]
    },
    {
        id: "FORM_004",
        type: "formula",
        category: "Termodinámica",
        title: "Primer Principio (Sist. Cerrado)",
        value: "ΔU = Q - W",
        unit: "Julios (J)",
        desc: "Conservación de la energía interna.",
        tags: ["energia", "calor", "trabajo"]
    },
    {
        id: "FORM_005",
        type: "formula",
        category: "Cálculo",
        title: "Derivada del Producto",
        value: "(f·g)' = f'·g + f·g'",
        unit: "Matemáticas",
        desc: "Regla fundamental de derivación.",
        tags: ["derivadas", "calculo", "matematicas"]
    },
    {
        id: "FORM_006",
        type: "formula",
        category: "Electrónica",
        title: "Potencia Eléctrica",
        value: "P = V · I = I² · R",
        unit: "Vatios (W)",
        desc: "Ley de Joule.",
        tags: ["potencia", "calor", "electricidad"]
    },
    {
        id: "FORM_007",
        type: "formula",
        category: "Estática",
        title: "Momento de una fuerza",
        value: "M = F · d",
        unit: "N·m",
        desc: "Fuerza por distancia perpendicular al punto de giro.",
        tags: ["par", "giro", "mecanica"]
    }
];