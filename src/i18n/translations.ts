export type Language = 'es' | 'en';

export const translations = {
  es: {
    // App
    appName: 'BlueMarket',
    slogan: 'Aprende a invertir, sin complicaciones.',
    
    // Navigation
    nav: {
      home: 'Inicio',
      learn: 'Aprende',
      investments: 'Inversiones',
      tools: 'Herramientas',
      glossary: 'Glosario',
    },
    
    // Home
    home: {
      welcome: 'Bienvenido a BlueMarket',
      welcomeDesc: 'Tu guía para entender el mundo de las inversiones de forma clara y sencilla. No necesitas experiencia previa.',
      startLearning: 'Empezar a aprender',
      exploreInvestments: 'Explorar inversiones',
      whyLearn: '¿Por qué aprender a invertir?',
      whyLearnDesc: 'Invertir te ayuda a hacer crecer tu dinero con el tiempo. No es solo para expertos — cualquiera puede empezar.',
      features: {
        simple: {
          title: 'Explicaciones simples',
          desc: 'Sin jerga financiera complicada',
        },
        visual: {
          title: 'Aprendizaje visual',
          desc: 'Conceptos explicados con ejemplos',
        },
        bilingual: {
          title: 'Bilingüe',
          desc: 'Contenido en español e inglés',
        },
        accessible: {
          title: 'Para todos',
          desc: 'No necesitas conocimientos previos',
        },
      },
    },
    
    // Learn
    learn: {
      title: 'Aprende sobre los mercados',
      subtitle: 'Módulos diseñados para principiantes. Aprende a tu ritmo.',
      modules: {
        whatIsInvesting: {
          title: '¿Qué es invertir?',
          desc: 'Entiende los conceptos básicos de la inversión.',
          content: `Invertir es poner tu dinero a trabajar para ti. En lugar de dejarlo guardado en casa o en una cuenta de ahorros ganando muy poco, lo usas para comprar "activos" — cosas que pueden aumentar de valor con el tiempo.

Piénsalo así: si compras una manzana hoy por $1 y la vendes mañana por $1.50, acabas de hacer una inversión. En el mundo financiero, en vez de manzanas, compras acciones de empresas, bonos, o fondos.

¿Por qué invertir? Tu dinero pierde poder de compra con el tiempo debido a la inflación. Lo que hoy cuesta $100 podría costar $105 el próximo año. Invertir te ayuda a superar esta pérdida y hacer crecer tu patrimonio.

Ejemplo real: María tiene $1,000 guardados bajo el colchón. En 10 años, ese dinero sigue siendo $1,000 pero puede comprar menos cosas. Si María hubiera invertido ese dinero con un rendimiento anual del 7%, tendría aproximadamente $2,000.`,
        },
        savingVsInvesting: {
          title: 'Ahorrar vs Invertir',
          desc: 'Conoce las diferencias clave entre ambas estrategias.',
          content: `Ahorrar e invertir son dos estrategias diferentes para manejar tu dinero, y ambas son importantes.

AHORRAR es guardar dinero de forma segura para metas a corto plazo o emergencias. Tu dinero está protegido, pero crece muy lentamente. Es como plantar semillas en una maceta pequeña — seguras pero con crecimiento limitado.

INVERTIR es usar tu dinero para comprar activos que pueden crecer, aceptando que existe la posibilidad de perder algo. Es como plantar semillas en un campo abierto — más riesgo pero potencial de una cosecha mucho mayor.

¿Cuándo ahorrar? Para tu fondo de emergencia (3-6 meses de gastos), metas a corto plazo (vacaciones, un auto), o dinero que necesitarás pronto.

¿Cuándo invertir? Para metas a largo plazo (retiro, educación de tus hijos), dinero que no necesitarás por varios años.

Ejemplo: Pedro gana $2,000 al mes. Ahorra $200 en una cuenta de emergencia y también invierte $100 en un fondo de inversión para su retiro en 30 años.`,
        },
        fixedIncome: {
          title: 'Renta fija',
          desc: 'CDTs, bonos y otras inversiones de bajo riesgo.',
          content: `La renta fija son inversiones donde sabes de antemano cuánto ganarás. Son como prestar tu dinero a cambio de que te paguen intereses.

¿Cómo funciona? Imagina que le prestas $1,000 a tu vecino por un año y él promete devolverte $1,050. Eso es renta fija — sabes exactamente cuánto recibirás.

TIPOS COMUNES:
• CDTs (Certificados de Depósito a Término): Le prestas dinero al banco por un tiempo fijo.
• Bonos del gobierno: Le prestas dinero al Estado.
• Bonos corporativos: Le prestas dinero a empresas.

VENTAJAS:
✓ Sabes cuánto ganarás
✓ Menor riesgo de perder tu dinero
✓ Ingresos predecibles

DESVENTAJAS:
✗ Rendimientos más bajos que acciones
✗ Tu dinero está "atado" por un tiempo
✗ La inflación puede "comerse" tus ganancias

Nivel de riesgo: Bajo a Medio

Ideal para: Personas conservadoras, principiantes, o quienes necesitan ingresos estables.`,
        },
        equities: {
          title: 'Acciones',
          desc: 'Conviértete en dueño de una parte de las empresas.',
          content: `Comprar acciones significa convertirte en dueño de una pequeña parte de una empresa. Si la empresa crece y gana más dinero, el valor de tu parte también crece.

¿Cómo funciona? Imagina que una panadería vale $100,000 y está dividida en 1,000 "partes" o acciones. Si compras 10 acciones por $1,000, ahora eres dueño del 1% de esa panadería.

¿CÓMO GANAS DINERO?
1. El precio sube: Si la panadería se vuelve muy popular, otros querrán comprar acciones y el precio sube.
2. Dividendos: Algunas empresas reparten parte de sus ganancias a los dueños.

VENTAJAS:
✓ Potencial de altos rendimientos
✓ Puedes comprar y vender fácilmente
✓ Eres dueño de algo real

DESVENTAJAS:
✗ Los precios pueden bajar mucho
✗ Requiere investigar cada empresa
✗ Puede ser estresante ver las subidas y bajadas

Nivel de riesgo: Alto

Ejemplo: Compras 5 acciones de una empresa de tecnología a $100 cada una ($500 total). Un año después, cada acción vale $130. Tu inversión ahora vale $650 — ganaste $150.`,
        },
        etfs: {
          title: 'ETFs',
          desc: 'Fondos que te dan diversificación instantánea.',
          content: `Un ETF (Exchange-Traded Fund o Fondo Cotizado) es como una "canasta" que contiene muchas inversiones diferentes. Con una sola compra, inviertes en docenas o cientos de empresas a la vez.

¿Por qué son populares? Imagina querer comprar acciones de 500 empresas diferentes. Tendrías que investigar cada una, comprarlas por separado, y pagar muchas comisiones. ¡Sería un trabajo enorme! Un ETF hace esto por ti.

TIPOS COMUNES:
• ETFs de índices: Siguen un índice como el S&P 500 (las 500 empresas más grandes de EE.UU.)
• ETFs de sectores: Tecnología, salud, energía, etc.
• ETFs de bonos: Para renta fija diversificada

VENTAJAS:
✓ Diversificación instantánea (reduces el riesgo)
✓ Costos bajos
✓ Fáciles de comprar y vender
✓ Transparentes — sabes qué contienen

DESVENTAJAS:
✗ No puedes elegir empresas específicas
✗ Siguen al mercado — si todo baja, tu ETF también

Nivel de riesgo: Medio

Ejemplo: Inviertes $500 en un ETF del S&P 500. Ahora tienes una pequeña parte de Apple, Microsoft, Amazon, Google, y otras 496 empresas. Si algunas bajan pero otras suben, tu riesgo se reparte.`,
        },
        mutualFunds: {
          title: 'Fondos mutuos',
          desc: 'Inversiones administradas por profesionales.',
          content: `Un fondo mutuo reúne dinero de muchas personas para invertirlo en conjunto. Un administrador profesional decide dónde invertir — tú no tienes que tomar esas decisiones.

¿Cómo funciona? Imagina que 100 personas ponen cada una $1,000 en una "alcancía gigante". Un experto toma esos $100,000 y los invierte en diferentes lugares. Las ganancias (o pérdidas) se reparten entre todos según cuánto aportó cada uno.

VENTAJAS:
✓ Un profesional maneja tu dinero
✓ Diversificación automática
✓ Puedes empezar con poco dinero
✓ Bueno si no tienes tiempo para investigar

DESVENTAJAS:
✗ Cobran comisiones anuales
✗ No controlas las decisiones de inversión
✗ Generalmente menos transparentes que los ETFs
✗ Algunos requieren mínimos de inversión

DIFERENCIA CON ETFs:
Los fondos mutuos se compran al final del día a un precio fijo. Los ETFs se compran en tiempo real como acciones.

Nivel de riesgo: Bajo a Alto (depende del tipo de fondo)

Ideal para: Personas que prefieren que un experto maneje sus inversiones y no quieren investigar cada empresa individualmente.`,
        },
        derivatives: {
          title: 'Derivados y futuros',
          desc: 'Instrumentos avanzados (solo información educativa).',
          content: `⚠️ NOTA IMPORTANTE: Esta sección es solo educativa. Los derivados son instrumentos complejos que NO son recomendados para principiantes.

¿Qué son? Los derivados son contratos cuyo valor "deriva" de otro activo. En lugar de comprar el activo directamente, compras un contrato relacionado con él.

ANALOGÍA SENCILLA:
Imagina que quieres comprar una casa que hoy vale $100,000. En lugar de comprarla ahora, firmas un contrato que te da el derecho de comprarla en 6 meses por $100,000, aunque su precio real suba a $120,000. Ese contrato es un derivado.

TIPOS BÁSICOS:
• Futuros: Contratos para comprar o vender algo a un precio fijo en el futuro
• Opciones: El derecho (pero no la obligación) de comprar o vender

¿POR QUÉ EXISTEN?
• Protección: Las empresas los usan para protegerse de cambios de precio
• Especulación: Algunos traders los usan para apostar sobre el mercado

¿POR QUÉ NO SON PARA PRINCIPIANTES?
✗ Muy complejos de entender
✗ Puedes perder más de lo que invertiste
✗ Requieren monitoreo constante
✗ Alto riesgo de pérdidas significativas

Nivel de riesgo: Muy Alto

Consejo: Domina primero las inversiones básicas (fondos, ETFs, acciones) antes de siquiera considerar los derivados.`,
        },
      },
    },
    
    // Investments
    investments: {
      title: 'Opciones de inversión',
      subtitle: 'Conoce los instrumentos más comunes y accesibles para empezar.',
      whatIs: '¿Qué es?',
      riskLevel: 'Nivel de riesgo',
      forWhom: '¿Para quién es ideal?',
      example: 'Ejemplo práctico',
      risk: {
        low: 'Bajo',
        medium: 'Medio',
        high: 'Alto',
      },
      items: {
        cdt: {
          title: 'CDTs',
          what: 'Certificados de Depósito a Término. Le prestas tu dinero al banco por un período fijo (3, 6, 12 meses o más) y a cambio te pagan intereses garantizados. Es una de las inversiones más seguras porque está protegida por el sistema financiero.',
          risk: 'low',
          forWhom: 'Principiantes que buscan seguridad total, personas que no quieren preocuparse por su inversión, o quienes ahorran para metas específicas a corto plazo.',
          example: 'Ana deposita $5,000 en un CDT a 12 meses con una tasa del 6% anual. Al final del año, retira $5,300. No tuvo que hacer nada más que esperar.',
        },
        stocks: {
          title: 'Acciones',
          what: 'Al comprar una acción, te conviertes en dueño de una pequeña parte de una empresa. Si la empresa crece y tiene éxito, el valor de tus acciones puede aumentar significativamente. También puedes recibir dividendos (parte de las ganancias de la empresa).',
          risk: 'high',
          forWhom: 'Inversores con horizonte de largo plazo (5+ años), personas cómodas con la volatilidad, y quienes disfrutan investigar empresas y seguir el mercado.',
          example: 'Carlos invierte $2,000 en acciones de una empresa de energía renovable. Después de 3 años, la empresa ha crecido mucho y sus acciones ahora valen $3,500. Además, recibió $150 en dividendos.',
        },
        etfs: {
          title: 'ETFs',
          what: 'Fondos que agrupan muchas inversiones y se compran como una acción. Con un solo ETF puedes invertir en cientos de empresas a la vez, lo que reduce tu riesgo automáticamente. Son conocidos por sus bajos costos.',
          risk: 'medium',
          forWhom: 'Inversores que quieren diversificación sin complicaciones, principiantes que no saben qué acciones elegir, y personas que prefieren una estrategia de "comprar y mantener".',
          example: 'Laura invierte $1,000 en un ETF que sigue las 500 empresas más grandes de Estados Unidos. Si el mercado en general sube un 10%, su inversión vale aproximadamente $1,100.',
        },
        bonds: {
          title: 'Bonos',
          what: 'Préstamos que haces a gobiernos o empresas. A cambio, te prometen devolver tu dinero más intereses en una fecha específica. Los bonos del gobierno son especialmente seguros porque es muy raro que un país no pague sus deudas.',
          risk: 'low',
          forWhom: 'Inversores conservadores, personas cercanas al retiro que necesitan proteger su capital, y quienes buscan ingresos predecibles y estables.',
          example: 'Roberto compra un bono del gobierno de $10,000 al 5% anual a 5 años. Cada año recibe $500 de intereses, y al final recupera sus $10,000 originales.',
        },
        funds: {
          title: 'Fondos de inversión',
          what: 'Tu dinero se junta con el de otros inversores y es manejado por profesionales que deciden dónde invertirlo. Tú eliges el tipo de fondo según tu perfil (conservador, moderado, agresivo) y ellos hacen el trabajo.',
          risk: 'medium',
          forWhom: 'Personas ocupadas que no tienen tiempo para investigar inversiones, quienes prefieren que expertos tomen las decisiones, y principiantes que quieren empezar de forma sencilla.',
          example: 'Sofía invierte $500 mensuales en un fondo moderado. El administrador distribuye su dinero entre acciones, bonos y otros activos. Después de un año, tiene $6,300 (invirtió $6,000 y ganó $300).',
        },
      },
    },
    
    // Glossary
    glossary: {
      title: 'Glosario financiero',
      subtitle: 'Definiciones simples de los términos más importantes.',
      searchPlaceholder: 'Buscar término...',
      noResults: 'No se encontraron resultados',
      noTerms: 'No hay términos disponibles',
      terms: {
        rendimiento: {
          term: 'Rendimiento',
          def: 'La ganancia (o pérdida) que obtienes de una inversión. Si inviertes $100 y después tienes $110, tu rendimiento es $10 o 10%. Es la forma de medir si tu inversión fue exitosa.',
        },
        riesgo: {
          term: 'Riesgo',
          def: 'La posibilidad de que pierdas parte o todo tu dinero en una inversión. A mayor potencial de ganancia, generalmente mayor riesgo. Es importante conocer tu tolerancia al riesgo antes de invertir.',
        },
        diversificacion: {
          term: 'Diversificación',
          def: 'No poner todos los huevos en una sola canasta. Significa distribuir tu dinero entre diferentes tipos de inversiones para reducir el riesgo. Si una inversión baja, las otras pueden compensar.',
        },
        inflacion: {
          term: 'Inflación',
          def: 'El aumento general de precios con el tiempo. Si la inflación es del 5%, lo que hoy cuesta $100 costará $105 el próximo año. Por eso es importante invertir: para que tu dinero no pierda poder de compra.',
        },
        tasaInteres: {
          term: 'Tasa de interés',
          def: 'El porcentaje que te pagan por prestar tu dinero (cuando inviertes) o que pagas por pedir prestado (cuando tienes deudas). Es el "precio" del dinero.',
        },
        mercado: {
          term: 'Mercado',
          def: 'El lugar (físico o virtual) donde compradores y vendedores intercambian activos como acciones, bonos, o divisas. Cuando escuchas que "el mercado subió", generalmente se refiere a las bolsas de valores.',
        },
        activo: {
          term: 'Activo',
          def: 'Cualquier cosa de valor que posees y que puede generar dinero o aumentar de valor. Ejemplos: acciones, bonos, propiedades, efectivo, oro. Es lo contrario de un pasivo (deudas).',
        },
        portafolio: {
          term: 'Portafolio',
          def: 'El conjunto de todas tus inversiones. Un buen portafolio está diversificado — contiene diferentes tipos de activos que se comportan de forma diferente ante los cambios del mercado.',
        },
        dividendo: {
          term: 'Dividendo',
          def: 'Parte de las ganancias que una empresa reparte a sus accionistas. Si tienes acciones de una empresa que paga dividendos, recibes dinero periódicamente sin vender tus acciones.',
        },
        liquidez: {
          term: 'Liquidez',
          def: 'Qué tan rápido puedes convertir una inversión en efectivo sin perder valor. Las acciones son muy líquidas (se venden rápido). Una propiedad es poco líquida (puede tomar meses venderla).',
        },
        volatilidad: {
          term: 'Volatilidad',
          def: 'Qué tanto sube y baja el precio de una inversión. Alta volatilidad significa cambios grandes y frecuentes. Las criptomonedas son muy volátiles; los bonos del gobierno son poco volátiles.',
        },
        capital: {
          term: 'Capital',
          def: 'El dinero que tienes disponible para invertir, o el valor total de tus inversiones. "Proteger tu capital" significa cuidar que no pierdas el dinero que has invertido.',
        },
      },
    },
    
    // Tools
    tools: {
      title: 'Herramientas de aprendizaje',
      subtitle: 'Calculadoras, comparaciones y guías para entender mejor las inversiones.',
      
      // Risk vs Return
      riskReturn: {
        title: 'Riesgo vs Rendimiento',
        subtitle: 'Entiende la relación fundamental de las inversiones',
        riskTitle: '¿Qué es el riesgo?',
        riskDesc: 'El riesgo es la posibilidad de que pierdas parte o todo tu dinero. Cuanto mayor es la incertidumbre sobre el resultado, mayor es el riesgo.',
        riskAnalogy: 'Es como cruzar un río: puedes usar un puente seguro (bajo riesgo) o nadar (alto riesgo). Ambos te llevan al otro lado, pero uno es más arriesgado.',
        returnTitle: '¿Qué es el rendimiento?',
        returnDesc: 'El rendimiento es la ganancia que obtienes de tu inversión. Se expresa como porcentaje de lo que invertiste.',
        returnAnalogy: 'Si plantas un árbol, el rendimiento son las frutas que cosechas. Más cuidado y tiempo generalmente dan más frutos.',
        relationshipTitle: 'La regla de oro',
        relationshipDesc: 'Generalmente, las inversiones con mayor potencial de rendimiento también tienen mayor riesgo. No existe inversión de alto rendimiento sin riesgo.',
        lowRisk: 'Bajo riesgo',
        mediumRisk: 'Riesgo medio',
        highRisk: 'Alto riesgo',
        lowerReturn: '← Menor rendimiento',
        higherReturn: 'Mayor rendimiento →',
      },
      
      // Calculator
      calculator: {
        title: 'Calculadora educativa',
        subtitle: 'Simula cómo podría crecer tu dinero con el tiempo',
        initialAmount: 'Monto inicial ($)',
        monthlyContribution: 'Aporte mensual ($)',
        years: 'Años',
        riskProfile: 'Perfil de riesgo',
        risk: {
          low: 'Bajo',
          medium: 'Medio',
          high: 'Alto',
        },
        expectedReturn: 'Rendimiento estimado anual',
        finalValue: 'Valor final estimado',
        totalInvested: 'Total invertido',
        estimatedGain: 'Ganancia estimada',
        invested: 'Invertido',
        gain: 'Ganancia',
        disclaimer: 'Esta calculadora es solo para fines educativos. Los rendimientos mostrados son estimaciones basadas en promedios históricos y no garantizan resultados futuros. Las inversiones reales pueden variar significativamente.',
      },
      
      // Comparisons
      comparisons: {
        title: 'Comparaciones simples',
        cdtVsSavings: {
          title: 'CDT vs Cuenta de ahorros',
          optionA: {
            name: 'CDT',
            risk: 'Riesgo bajo',
            whenToUse: 'Cuando puedes dejar tu dinero quieto por meses y quieres ganar más intereses.',
          },
          optionB: {
            name: 'Cuenta de ahorros',
            risk: 'Riesgo muy bajo',
            whenToUse: 'Cuando necesitas acceso inmediato a tu dinero para emergencias.',
          },
          mainDifference: 'El CDT paga más intereses pero tu dinero queda "atrapado". La cuenta de ahorros paga menos pero puedes retirar cuando quieras.',
        },
        cdtVsEtf: {
          title: 'CDT vs ETF',
          optionA: {
            name: 'CDT',
            risk: 'Riesgo bajo',
            whenToUse: 'Perfecto si quieres seguridad y saber exactamente cuánto ganarás.',
          },
          optionB: {
            name: 'ETF',
            risk: 'Riesgo medio',
            whenToUse: 'Mejor si buscas mayor crecimiento a largo plazo y toleras fluctuaciones.',
          },
          mainDifference: 'El CDT tiene rendimiento fijo y garantizado. El ETF puede dar más ganancias pero su valor sube y baja con el mercado.',
        },
        stockVsEtf: {
          title: 'Acciones vs ETF',
          optionA: {
            name: 'Acciones individuales',
            risk: 'Riesgo alto',
            whenToUse: 'Si quieres elegir empresas específicas y tienes tiempo para investigar.',
          },
          optionB: {
            name: 'ETF',
            risk: 'Riesgo medio',
            whenToUse: 'Si prefieres diversificación automática sin elegir empresas una por una.',
          },
          mainDifference: 'Con acciones apuestas a una empresa. Con ETFs, inviertes en muchas a la vez, reduciendo el riesgo si alguna falla.',
        },
        fixedVsEquities: {
          title: 'Renta fija vs Acciones',
          optionA: {
            name: 'Renta fija (bonos, CDTs)',
            risk: 'Riesgo bajo',
            whenToUse: 'Ideal para conservar capital y obtener ingresos predecibles.',
          },
          optionB: {
            name: 'Acciones',
            risk: 'Riesgo alto',
            whenToUse: 'Mejor para hacer crecer tu dinero a largo plazo si toleras volatilidad.',
          },
          mainDifference: 'Renta fija es como un salario fijo. Acciones son como un negocio propio: más trabajo, más riesgo, pero potencialmente más ganancia.',
        },
      },
      
      // Common Mistakes
      mistakes: {
        title: 'Errores comunes de principiantes',
        noUnderstanding: {
          title: 'Invertir sin entender',
          description: 'Poner dinero en algo solo porque alguien lo recomendó, sin investigar cómo funciona.',
          tip: 'Antes de invertir, entiende qué estás comprando y cuáles son los riesgos.',
        },
        quickProfits: {
          title: 'Esperar ganancias rápidas',
          description: 'Creer que te harás rico de la noche a la mañana con inversiones.',
          tip: 'Las inversiones sólidas crecen con el tiempo. La paciencia es clave.',
        },
        noDiversification: {
          title: 'No diversificar',
          description: 'Poner todo tu dinero en una sola inversión o tipo de activo.',
          tip: 'Distribuye tu dinero en diferentes inversiones para reducir el riesgo.',
        },
        emotionalDecisions: {
          title: 'Decisiones emocionales',
          description: 'Vender por pánico cuando bajan los precios o comprar por euforia cuando suben.',
          tip: 'Ten un plan y síguelo. No dejes que las emociones guíen tus decisiones.',
        },
      },
      
      // Investor Profiles
      profiles: {
        title: '¿Qué tipo de inversor eres?',
        conservative: {
          title: 'Conservador',
          description: 'Prioriza la seguridad sobre las ganancias. Prefiere no arriesgar su capital.',
          suitable: ['CDTs y depósitos a plazo', 'Bonos del gobierno', 'Fondos de renta fija', 'Cuentas de ahorro de alto rendimiento'],
        },
        moderate: {
          title: 'Moderado',
          description: 'Busca un balance entre seguridad y crecimiento. Acepta algo de volatilidad.',
          suitable: ['ETFs diversificados', 'Fondos balanceados', 'Mezcla de bonos y acciones', 'Fondos de inversión moderados'],
        },
        aggressive: {
          title: 'Agresivo',
          description: 'Busca máximo crecimiento. Tolera alta volatilidad y riesgo de pérdidas.',
          suitable: ['Acciones individuales', 'ETFs de crecimiento', 'Inversiones en sectores específicos', 'Mercados emergentes'],
        },
      },
      
      // Key Takeaways
      takeaways: {
        title: 'Puntos clave para recordar',
        items: [
          {
            title: 'Antes de invertir',
            points: [
              'Paga tus deudas de alto interés primero',
              'Ten un fondo de emergencia (3-6 meses de gastos)',
              'Invierte solo dinero que no necesitarás pronto',
            ],
          },
          {
            title: 'Durante tu viaje inversor',
            points: [
              'Empieza pequeño y aprende',
              'La diversificación es tu amiga',
              'El tiempo en el mercado importa más que el timing',
            ],
          },
        ],
      },
    },
    
    // Common
    common: {
      learnMore: 'Aprender más',
      back: 'Volver',
      next: 'Siguiente',
      disclaimer: 'Este contenido es solo educativo y no constituye asesoría financiera. Consulta con un profesional antes de tomar decisiones de inversión.',
    },
  },
  
  en: {
    // App
    appName: 'BlueMarket',
    slogan: 'Learn investing, clearly.',
    
    // Navigation
    nav: {
      home: 'Home',
      learn: 'Learn',
      investments: 'Investments',
      tools: 'Tools',
      glossary: 'Glossary',
    },
    
    // Home
    home: {
      welcome: 'Welcome to BlueMarket',
      welcomeDesc: 'Your guide to understanding the world of investing in a clear and simple way. No prior experience needed.',
      startLearning: 'Start learning',
      exploreInvestments: 'Explore investments',
      whyLearn: 'Why learn to invest?',
      whyLearnDesc: "Investing helps you grow your money over time. It's not just for experts — anyone can start.",
      features: {
        simple: {
          title: 'Simple explanations',
          desc: 'No complicated financial jargon',
        },
        visual: {
          title: 'Visual learning',
          desc: 'Concepts explained with examples',
        },
        bilingual: {
          title: 'Bilingual',
          desc: 'Content in Spanish and English',
        },
        accessible: {
          title: 'For everyone',
          desc: 'No prior knowledge required',
        },
      },
    },
    
    // Learn
    learn: {
      title: 'Learn about markets',
      subtitle: 'Modules designed for beginners. Learn at your own pace.',
      modules: {
        whatIsInvesting: {
          title: 'What is investing?',
          desc: 'Understand the basics of investing.',
          content: `Investing is putting your money to work for you. Instead of leaving it sitting in a savings account earning very little, you use it to buy "assets" — things that can increase in value over time.

Think of it this way: if you buy an apple today for $1 and sell it tomorrow for $1.50, you just made an investment. In the financial world, instead of apples, you buy company stocks, bonds, or funds.

Why invest? Your money loses purchasing power over time due to inflation. What costs $100 today might cost $105 next year. Investing helps you overcome this loss and grow your wealth.

Real example: Maria has $1,000 saved under her mattress. In 10 years, that money is still $1,000 but can buy fewer things. If Maria had invested that money with a 7% annual return, she would have approximately $2,000.`,
        },
        savingVsInvesting: {
          title: 'Saving vs Investing',
          desc: 'Learn the key differences between both strategies.',
          content: `Saving and investing are two different strategies for managing your money, and both are important.

SAVING is keeping money safe for short-term goals or emergencies. Your money is protected, but it grows very slowly. It's like planting seeds in a small pot — safe but with limited growth.

INVESTING is using your money to buy assets that can grow, accepting that there's a possibility of losing some. It's like planting seeds in an open field — more risk but potential for a much larger harvest.

When to save? For your emergency fund (3-6 months of expenses), short-term goals (vacation, a car), or money you'll need soon.

When to invest? For long-term goals (retirement, children's education), money you won't need for several years.

Example: Pedro earns $2,000 per month. He saves $200 in an emergency account and also invests $100 in an investment fund for his retirement in 30 years.`,
        },
        fixedIncome: {
          title: 'Fixed income',
          desc: 'CDs, bonds and other low-risk investments.',
          content: `Fixed income investments are ones where you know in advance how much you'll earn. They're like lending your money in exchange for interest payments.

How does it work? Imagine lending $1,000 to your neighbor for a year and they promise to return $1,050. That's fixed income — you know exactly how much you'll receive.

COMMON TYPES:
• CDs (Certificates of Deposit): You lend money to a bank for a fixed time.
• Government bonds: You lend money to the government.
• Corporate bonds: You lend money to companies.

ADVANTAGES:
✓ You know how much you'll earn
✓ Lower risk of losing your money
✓ Predictable income

DISADVANTAGES:
✗ Lower returns than stocks
✗ Your money is "tied up" for a period
✗ Inflation can "eat into" your gains

Risk level: Low to Medium

Ideal for: Conservative people, beginners, or those who need stable income.`,
        },
        equities: {
          title: 'Stocks',
          desc: 'Become an owner of a piece of companies.',
          content: `Buying stocks means becoming an owner of a small piece of a company. If the company grows and makes more money, the value of your piece also grows.

How does it work? Imagine a bakery worth $100,000 divided into 1,000 "pieces" or shares. If you buy 10 shares for $1,000, you now own 1% of that bakery.

HOW DO YOU MAKE MONEY?
1. Price goes up: If the bakery becomes very popular, others will want to buy shares and the price rises.
2. Dividends: Some companies share part of their profits with owners.

ADVANTAGES:
✓ Potential for high returns
✓ You can buy and sell easily
✓ You own something real

DISADVANTAGES:
✗ Prices can drop significantly
✗ Requires researching each company
✗ Can be stressful watching the ups and downs

Risk level: High

Example: You buy 5 shares of a tech company at $100 each ($500 total). A year later, each share is worth $130. Your investment is now worth $650 — you made $150.`,
        },
        etfs: {
          title: 'ETFs',
          desc: 'Funds that give you instant diversification.',
          content: `An ETF (Exchange-Traded Fund) is like a "basket" containing many different investments. With a single purchase, you invest in dozens or hundreds of companies at once.

Why are they popular? Imagine wanting to buy shares of 500 different companies. You would have to research each one, buy them separately, and pay many fees. That would be a huge amount of work! An ETF does this for you.

COMMON TYPES:
• Index ETFs: Track an index like the S&P 500 (the 500 largest U.S. companies)
• Sector ETFs: Technology, healthcare, energy, etc.
• Bond ETFs: For diversified fixed income

ADVANTAGES:
✓ Instant diversification (reduces risk)
✓ Low costs
✓ Easy to buy and sell
✓ Transparent — you know what they contain

DISADVANTAGES:
✗ You can't choose specific companies
✗ They follow the market — if everything drops, your ETF does too

Risk level: Medium

Example: You invest $500 in an S&P 500 ETF. Now you have a small piece of Apple, Microsoft, Amazon, Google, and 496 other companies. If some go down but others go up, your risk is spread out.`,
        },
        mutualFunds: {
          title: 'Mutual funds',
          desc: 'Investments managed by professionals.',
          content: `A mutual fund pools money from many people to invest it together. A professional manager decides where to invest — you don't have to make those decisions.

How does it work? Imagine 100 people each put $1,000 into a "giant piggy bank." An expert takes that $100,000 and invests it in different places. The profits (or losses) are shared among everyone according to how much each person contributed.

ADVANTAGES:
✓ A professional manages your money
✓ Automatic diversification
✓ You can start with little money
✓ Good if you don't have time to research

DISADVANTAGES:
✗ They charge annual fees
✗ You don't control investment decisions
✗ Generally less transparent than ETFs
✗ Some require minimum investments

DIFFERENCE FROM ETFs:
Mutual funds are bought at the end of the day at a fixed price. ETFs are bought in real-time like stocks.

Risk level: Low to High (depends on the type of fund)

Ideal for: People who prefer experts to handle their investments and don't want to research each company individually.`,
        },
        derivatives: {
          title: 'Derivatives & futures',
          desc: 'Advanced instruments (educational information only).',
          content: `⚠️ IMPORTANT NOTE: This section is for educational purposes only. Derivatives are complex instruments that are NOT recommended for beginners.

What are they? Derivatives are contracts whose value "derives" from another asset. Instead of buying the asset directly, you buy a contract related to it.

SIMPLE ANALOGY:
Imagine you want to buy a house currently worth $100,000. Instead of buying it now, you sign a contract that gives you the right to buy it in 6 months for $100,000, even if its actual price rises to $120,000. That contract is a derivative.

BASIC TYPES:
• Futures: Contracts to buy or sell something at a fixed price in the future
• Options: The right (but not obligation) to buy or sell

WHY DO THEY EXIST?
• Protection: Companies use them to protect against price changes
• Speculation: Some traders use them to bet on the market

WHY THEY'RE NOT FOR BEGINNERS:
✗ Very complex to understand
✗ You can lose more than you invested
✗ Require constant monitoring
✗ High risk of significant losses

Risk level: Very High

Advice: Master basic investments (funds, ETFs, stocks) first before even considering derivatives.`,
        },
      },
    },
    
    // Investments
    investments: {
      title: 'Investment options',
      subtitle: 'Learn about the most common and accessible instruments to get started.',
      whatIs: 'What is it?',
      riskLevel: 'Risk level',
      forWhom: 'Who is it ideal for?',
      example: 'Practical example',
      risk: {
        low: 'Low',
        medium: 'Medium',
        high: 'High',
      },
      items: {
        cdt: {
          title: 'CDs',
          what: 'Certificates of Deposit. You lend your money to the bank for a fixed period (3, 6, 12 months or more) and in return they pay you guaranteed interest. It is one of the safest investments because it is protected by the financial system.',
          risk: 'low',
          forWhom: 'Beginners looking for total safety, people who do not want to worry about their investment, or those saving for specific short-term goals.',
          example: 'Ana deposits $5,000 in a 12-month CD at a 6% annual rate. At the end of the year, she withdraws $5,300. She did not have to do anything but wait.',
        },
        stocks: {
          title: 'Stocks',
          what: 'When you buy a stock, you become an owner of a small piece of a company. If the company grows and succeeds, the value of your stocks can increase significantly. You may also receive dividends (part of the company profits).',
          risk: 'high',
          forWhom: 'Investors with a long-term horizon (5+ years), people comfortable with volatility, and those who enjoy researching companies and following the market.',
          example: 'Carlos invests $2,000 in stocks of a renewable energy company. After 3 years, the company has grown a lot and his stocks are now worth $3,500. He also received $150 in dividends.',
        },
        etfs: {
          title: 'ETFs',
          what: 'Funds that group many investments and are bought like a stock. With a single ETF you can invest in hundreds of companies at once, which automatically reduces your risk. They are known for their low costs.',
          risk: 'medium',
          forWhom: 'Investors who want diversification without complications, beginners who do not know which stocks to choose, and people who prefer a "buy and hold" strategy.',
          example: 'Laura invests $1,000 in an ETF that tracks the 500 largest companies in the United States. If the overall market goes up 10%, her investment is worth approximately $1,100.',
        },
        bonds: {
          title: 'Bonds',
          what: 'Loans you make to governments or companies. In return, they promise to return your money plus interest on a specific date. Government bonds are especially safe because it is very rare for a country not to pay its debts.',
          risk: 'low',
          forWhom: 'Conservative investors, people close to retirement who need to protect their capital, and those seeking predictable and stable income.',
          example: 'Roberto buys a $10,000 government bond at 5% annual for 5 years. Each year he receives $500 in interest, and at the end he gets his original $10,000 back.',
        },
        funds: {
          title: 'Investment funds',
          what: 'Your money is pooled with that of other investors and managed by professionals who decide where to invest it. You choose the type of fund according to your profile (conservative, moderate, aggressive) and they do the work.',
          risk: 'medium',
          forWhom: 'Busy people who do not have time to research investments, those who prefer experts to make decisions, and beginners who want to start simply.',
          example: 'Sofia invests $500 monthly in a moderate fund. The manager distributes her money among stocks, bonds and other assets. After a year, she has $6,300 (invested $6,000 and earned $300).',
        },
      },
    },
    
    // Glossary
    glossary: {
      title: 'Financial glossary',
      subtitle: 'Simple definitions of the most important terms.',
      searchPlaceholder: 'Search term...',
      noResults: 'No results found',
      noTerms: 'No terms available',
      terms: {
        rendimiento: {
          term: 'Return',
          def: 'The gain (or loss) you get from an investment. If you invest $100 and later have $110, your return is $10 or 10%. It is the way to measure if your investment was successful.',
        },
        riesgo: {
          term: 'Risk',
          def: 'The possibility that you lose part or all of your money in an investment. The higher the potential gain, generally the higher the risk. It is important to know your risk tolerance before investing.',
        },
        diversificacion: {
          term: 'Diversification',
          def: "Not putting all your eggs in one basket. It means spreading your money across different types of investments to reduce risk. If one investment goes down, the others may compensate.",
        },
        inflacion: {
          term: 'Inflation',
          def: "The general increase in prices over time. If inflation is 5%, what costs $100 today will cost $105 next year. That's why it's important to invest: so your money doesn't lose purchasing power.",
        },
        tasaInteres: {
          term: 'Interest rate',
          def: 'The percentage they pay you for lending your money (when you invest) or that you pay for borrowing (when you have debts). It is the "price" of money.',
        },
        mercado: {
          term: 'Market',
          def: 'The place (physical or virtual) where buyers and sellers exchange assets like stocks, bonds, or currencies. When you hear "the market went up," it usually refers to stock exchanges.',
        },
        activo: {
          term: 'Asset',
          def: 'Anything of value you own that can generate money or increase in value. Examples: stocks, bonds, properties, cash, gold. It is the opposite of a liability (debts).',
        },
        portafolio: {
          term: 'Portfolio',
          def: 'The collection of all your investments. A good portfolio is diversified — it contains different types of assets that behave differently to market changes.',
        },
        dividendo: {
          term: 'Dividend',
          def: 'Part of the profits that a company distributes to its shareholders. If you own stocks of a company that pays dividends, you receive money periodically without selling your stocks.',
        },
        liquidez: {
          term: 'Liquidity',
          def: 'How quickly you can convert an investment into cash without losing value. Stocks are very liquid (they sell fast). A property is illiquid (it can take months to sell).',
        },
        volatilidad: {
          term: 'Volatility',
          def: "How much an investment's price goes up and down. High volatility means large and frequent changes. Cryptocurrencies are very volatile; government bonds are not volatile.",
        },
        capital: {
          term: 'Capital',
          def: 'The money you have available to invest, or the total value of your investments. "Protecting your capital" means making sure you don\'t lose the money you have invested.',
        },
      },
    },
    
    // Tools
    tools: {
      title: 'Learning Tools',
      subtitle: 'Calculators, comparisons, and guides to better understand investing.',
      
      // Risk vs Return
      riskReturn: {
        title: 'Risk vs Return',
        subtitle: 'Understand the fundamental relationship of investing',
        riskTitle: 'What is risk?',
        riskDesc: 'Risk is the possibility of losing part or all of your money. The greater the uncertainty about the outcome, the higher the risk.',
        riskAnalogy: "It's like crossing a river: you can use a safe bridge (low risk) or swim across (high risk). Both get you to the other side, but one is riskier.",
        returnTitle: 'What is return?',
        returnDesc: 'Return is the profit you earn from your investment. It is expressed as a percentage of what you invested.',
        returnAnalogy: 'If you plant a tree, the return is the fruit you harvest. More care and time generally yield more fruit.',
        relationshipTitle: 'The golden rule',
        relationshipDesc: 'Generally, investments with higher potential returns also carry higher risk. There is no such thing as a high-return, no-risk investment.',
        lowRisk: 'Low risk',
        mediumRisk: 'Medium risk',
        highRisk: 'High risk',
        lowerReturn: '← Lower return',
        higherReturn: 'Higher return →',
      },
      
      // Calculator
      calculator: {
        title: 'Educational Calculator',
        subtitle: 'Simulate how your money could grow over time',
        initialAmount: 'Initial amount ($)',
        monthlyContribution: 'Monthly contribution ($)',
        years: 'Years',
        riskProfile: 'Risk profile',
        risk: {
          low: 'Low',
          medium: 'Medium',
          high: 'High',
        },
        expectedReturn: 'Expected annual return',
        finalValue: 'Estimated final value',
        totalInvested: 'Total invested',
        estimatedGain: 'Estimated gain',
        invested: 'Invested',
        gain: 'Gain',
        disclaimer: 'This calculator is for educational purposes only. The returns shown are estimates based on historical averages and do not guarantee future results. Actual investments may vary significantly.',
      },
      
      // Comparisons
      comparisons: {
        title: 'Simple Comparisons',
        cdtVsSavings: {
          title: 'CD vs Savings Account',
          optionA: {
            name: 'CD (Certificate of Deposit)',
            risk: 'Low risk',
            whenToUse: 'When you can leave your money untouched for months and want to earn more interest.',
          },
          optionB: {
            name: 'Savings Account',
            risk: 'Very low risk',
            whenToUse: 'When you need immediate access to your money for emergencies.',
          },
          mainDifference: 'CDs pay more interest but your money is "locked." Savings accounts pay less but you can withdraw anytime.',
        },
        cdtVsEtf: {
          title: 'CD vs ETF',
          optionA: {
            name: 'CD',
            risk: 'Low risk',
            whenToUse: "Perfect if you want safety and to know exactly what you'll earn.",
          },
          optionB: {
            name: 'ETF',
            risk: 'Medium risk',
            whenToUse: 'Better if you seek greater long-term growth and can tolerate fluctuations.',
          },
          mainDifference: 'CDs have a fixed, guaranteed return. ETFs can provide higher gains but their value fluctuates with the market.',
        },
        stockVsEtf: {
          title: 'Individual Stocks vs ETF',
          optionA: {
            name: 'Individual Stocks',
            risk: 'High risk',
            whenToUse: 'If you want to pick specific companies and have time to research.',
          },
          optionB: {
            name: 'ETF',
            risk: 'Medium risk',
            whenToUse: 'If you prefer automatic diversification without selecting companies one by one.',
          },
          mainDifference: 'With stocks, you bet on one company. With ETFs, you invest in many at once, reducing risk if one fails.',
        },
        fixedVsEquities: {
          title: 'Fixed Income vs Stocks',
          optionA: {
            name: 'Fixed income (bonds, CDs)',
            risk: 'Low risk',
            whenToUse: 'Ideal for preserving capital and earning predictable income.',
          },
          optionB: {
            name: 'Stocks',
            risk: 'High risk',
            whenToUse: 'Better for growing your money long-term if you tolerate volatility.',
          },
          mainDifference: 'Fixed income is like a steady salary. Stocks are like running your own business: more work, more risk, but potentially more reward.',
        },
      },
      
      // Common Mistakes
      mistakes: {
        title: 'Common Beginner Mistakes',
        noUnderstanding: {
          title: 'Investing without understanding',
          description: 'Putting money into something just because someone recommended it, without researching how it works.',
          tip: 'Before investing, understand what you are buying and what the risks are.',
        },
        quickProfits: {
          title: 'Expecting quick profits',
          description: 'Believing you will get rich overnight with investments.',
          tip: 'Solid investments grow over time. Patience is key.',
        },
        noDiversification: {
          title: 'Not diversifying',
          description: 'Putting all your money into a single investment or asset type.',
          tip: 'Spread your money across different investments to reduce risk.',
        },
        emotionalDecisions: {
          title: 'Emotional decisions',
          description: 'Panic-selling when prices drop or euphoria-buying when they rise.',
          tip: "Have a plan and stick to it. Don't let emotions guide your decisions.",
        },
      },
      
      // Investor Profiles
      profiles: {
        title: 'What type of investor are you?',
        conservative: {
          title: 'Conservative',
          description: 'Prioritizes safety over gains. Prefers not to risk capital.',
          suitable: ['CDs and term deposits', 'Government bonds', 'Fixed income funds', 'High-yield savings accounts'],
        },
        moderate: {
          title: 'Moderate',
          description: 'Seeks a balance between safety and growth. Accepts some volatility.',
          suitable: ['Diversified ETFs', 'Balanced funds', 'Mix of bonds and stocks', 'Moderate investment funds'],
        },
        aggressive: {
          title: 'Aggressive',
          description: 'Seeks maximum growth. Tolerates high volatility and risk of losses.',
          suitable: ['Individual stocks', 'Growth ETFs', 'Sector-specific investments', 'Emerging markets'],
        },
      },
      
      // Key Takeaways
      takeaways: {
        title: 'Key Points to Remember',
        items: [
          {
            title: 'Before investing',
            points: [
              'Pay off your high-interest debts first',
              'Have an emergency fund (3-6 months of expenses)',
              "Only invest money you won't need soon",
            ],
          },
          {
            title: 'During your investing journey',
            points: [
              'Start small and learn',
              'Diversification is your friend',
              'Time in the market matters more than timing',
            ],
          },
        ],
      },
    },
    
    // Common
    common: {
      learnMore: 'Learn more',
      back: 'Back',
      next: 'Next',
      disclaimer: 'This content is educational only and does not constitute financial advice. Consult a professional before making investment decisions.',
    },
  },
} as const;
