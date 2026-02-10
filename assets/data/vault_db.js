/* * WIKINGENIERÍA VAULT DATABASE
 * v1.1 - Added Unverified & Long Description examples
 */

const vaultData = [
    // --- CONSTANTES ---
    {
        id: "CTE_001",
        type: "constante",
        category: "Física",
        title: "Velocidad de la luz (vacío)",
        value: "299 792 458",
        unit: "m/s",
        desc: "Exacta por definición. La velocidad límite del universo y fundamental para la teoría de la relatividad.",
        tags: ["c", "luz", "einstein"],
        verified: true
    },
    {
        id: "CTE_002",
        type: "constante",
        category: "Gravedad",
        title: "Gravedad Estándar (Tierra)",
        value: "9.80665",
        unit: "m/s²",
        desc: "Valor estándar ISO. Usar 9.81 para cálculos rápidos de ingeniería básica.",
        tags: ["g", "peso", "newton"],
        verified: true
    },
    {
        id: "CTE_003",
        type: "constante",
        category: "Termodinámica",
        title: "Constante de los Gases Ideales",
        value: "8.314462618",
        unit: "J / (mol · K)",
        desc: "Relaciona presión, volumen, temperatura y moles en un gas ideal.",
        tags: ["R", "gases", "termo"],
        verified: true
    },
    // ... (Mantén el resto de constantes anteriores si quieres, aquí pongo las nuevas para el ejemplo) ...

    // --- EJEMPLO NO VERIFICADO ---
    {
        id: "EXP_001",
        type: "constante",
        category: "Materiales",
        title: "Coef. Fricción Acero-Hielo",
        value: "0.03 aprox",
        unit: "Adimensional",
        desc: "Valor empírico aproximado. Varía enormemente según temperatura y rugosidad. No usar para cálculos de precisión sin ensayo previo.",
        tags: ["friccion", "acero", "hielo"],
        verified: false 
    },

    // --- EJEMPLO DESCRIPCIÓN LARGA ---
    {
        id: "FORM_999",
        type: "formula",
        category: "Fluidos",
        title: "Ecuación de Navier-Stokes (Incompresible)",
        value: "ρ(∂u/∂t + u·∇u) = -∇p + μ∇²u + f",
        unit: "Momento",
        desc: "Describe el movimiento de sustancias fluidas viscosas. Es una ecuación diferencial parcial no lineal que no tiene solución general analítica conocida para todos los casos. Se utiliza en aerodinámica, hidráulica y modelado climático. Para resolverla en ingeniería se suelen utilizar métodos numéricos (CFD).",
        tags: ["fluidos", "cfd", "navier"],
        verified: true
    },
     {
        id: "CONV_001",
        type: "conversion",
        category: "Presión",
        title: "Bar a Pascales",
        value: "1 bar = 100,000 Pa",
        unit: "Conversión exacta",
        desc: "Útil para hidráulica y neumática.",
        tags: ["presion", "bar", "pascal"],
        verified: true
    },
];