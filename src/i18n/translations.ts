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
          content: 'Invertir es poner tu dinero a trabajar para ti. En lugar de solo guardar tu dinero, lo usas para comprar activos que pueden crecer en valor con el tiempo.',
        },
        savingVsInvesting: {
          title: 'Ahorrar vs Invertir',
          desc: 'Conoce las diferencias clave.',
          content: 'Ahorrar es guardar dinero de forma segura. Invertir es hacer que ese dinero crezca, aceptando cierto nivel de riesgo a cambio de mayores ganancias potenciales.',
        },
        fixedIncome: {
          title: 'Renta fija',
          desc: 'CDTs, bonos y más.',
          content: 'La renta fija son inversiones que te pagan un interés fijo. Son más seguras pero generalmente ofrecen menores retornos. Ideales para principiantes.',
        },
        equities: {
          title: 'Acciones',
          desc: 'Conviértete en dueño de empresas.',
          content: 'Comprar acciones significa ser dueño de una pequeña parte de una empresa. Si la empresa crece, el valor de tus acciones puede aumentar.',
        },
        etfs: {
          title: 'ETFs',
          desc: 'Fondos cotizados en bolsa.',
          content: 'Los ETFs son como canastas de inversiones. Con una sola compra, inviertes en muchas empresas a la vez, reduciendo el riesgo.',
        },
        mutualFunds: {
          title: 'Fondos mutuos',
          desc: 'Inversiones administradas por expertos.',
          content: 'Los fondos mutuos reúnen dinero de muchos inversores para comprar una variedad de activos, administrados por profesionales.',
        },
        derivatives: {
          title: 'Derivados y futuros',
          desc: 'Inversiones avanzadas (solo educativo).',
          content: 'Los derivados son contratos basados en el valor de otros activos. Son más complejos y generalmente no recomendados para principiantes.',
        },
      },
    },
    
    // Investments
    investments: {
      title: 'Opciones de inversión',
      subtitle: 'Conoce los instrumentos más comunes y accesibles.',
      whatIs: '¿Qué es?',
      riskLevel: 'Nivel de riesgo',
      forWhom: '¿Para quién?',
      example: 'Ejemplo',
      risk: {
        low: 'Bajo',
        medium: 'Medio',
        high: 'Alto',
      },
      items: {
        cdt: {
          title: 'CDTs',
          what: 'Certificados de Depósito a Término. Depositas dinero en un banco por un tiempo fijo y recibes intereses.',
          risk: 'low',
          forWhom: 'Personas que buscan seguridad y rendimientos estables.',
          example: 'Depositas $1,000 por 1 año al 5% anual. Al final recibes $1,050.',
        },
        stocks: {
          title: 'Acciones',
          what: 'Partes de propiedad de una empresa. Si la empresa crece, tu inversión puede crecer también.',
          risk: 'high',
          forWhom: 'Inversores dispuestos a asumir más riesgo por mayores ganancias potenciales.',
          example: 'Compras 10 acciones a $50 cada una. Si suben a $60, tu inversión ahora vale $600.',
        },
        etfs: {
          title: 'ETFs',
          what: 'Fondos que contienen múltiples activos y se negocian como acciones. Ofrecen diversificación instantánea.',
          risk: 'medium',
          forWhom: 'Inversores que quieren diversificación sin elegir acciones individuales.',
          example: 'Un ETF del S&P 500 te da exposición a las 500 empresas más grandes de EE.UU.',
        },
        bonds: {
          title: 'Bonos',
          what: 'Préstamos que haces a gobiernos o empresas. Te pagan intereses durante un período fijo.',
          risk: 'low',
          forWhom: 'Inversores conservadores que buscan ingresos estables.',
          example: 'Compras un bono de $1,000 al 4% anual. Recibes $40 cada año.',
        },
        funds: {
          title: 'Fondos de inversión',
          what: 'Dinero de muchos inversores administrado profesionalmente para comprar diversos activos.',
          risk: 'medium',
          forWhom: 'Personas que prefieren que expertos administren su dinero.',
          example: 'Inviertes en un fondo que distribuye tu dinero entre acciones, bonos y otros activos.',
        },
      },
    },
    
    // Glossary
    glossary: {
      title: 'Glosario financiero',
      subtitle: 'Definiciones simples de términos comunes.',
      searchPlaceholder: 'Buscar término...',
      terms: {
        activo: {
          term: 'Activo',
          def: 'Cualquier cosa de valor que posees, como acciones, bonos o propiedades.',
        },
        diversificacion: {
          term: 'Diversificación',
          def: 'Distribuir tu dinero en diferentes inversiones para reducir el riesgo.',
        },
        dividendo: {
          term: 'Dividendo',
          def: 'Pago que una empresa hace a sus accionistas, usualmente de sus ganancias.',
        },
        liquidez: {
          term: 'Liquidez',
          def: 'Qué tan fácil es convertir una inversión en efectivo.',
        },
        portafolio: {
          term: 'Portafolio',
          def: 'El conjunto de todas tus inversiones.',
        },
        rendimiento: {
          term: 'Rendimiento',
          def: 'La ganancia o pérdida de una inversión, usualmente expresada como porcentaje.',
        },
        riesgo: {
          term: 'Riesgo',
          def: 'La posibilidad de perder dinero en una inversión.',
        },
        volatilidad: {
          term: 'Volatilidad',
          def: 'Qué tanto sube y baja el precio de una inversión.',
        },
      },
    },
    
    // Common
    common: {
      learnMore: 'Aprender más',
      back: 'Volver',
      next: 'Siguiente',
      disclaimer: 'Este contenido es solo educativo y no constituye asesoría financiera.',
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
      glossary: 'Glossary',
    },
    
    // Home
    home: {
      welcome: 'Welcome to BlueMarket',
      welcomeDesc: 'Your guide to understanding the world of investing in a clear and simple way. No prior experience needed.',
      startLearning: 'Start learning',
      exploreInvestments: 'Explore investments',
      whyLearn: 'Why learn to invest?',
      whyLearnDesc: 'Investing helps you grow your money over time. It\'s not just for experts — anyone can start.',
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
          content: 'Investing is putting your money to work for you. Instead of just saving your money, you use it to buy assets that can grow in value over time.',
        },
        savingVsInvesting: {
          title: 'Saving vs Investing',
          desc: 'Learn the key differences.',
          content: 'Saving is keeping money safe. Investing is making that money grow, accepting some level of risk in exchange for potentially higher returns.',
        },
        fixedIncome: {
          title: 'Fixed income',
          desc: 'CDs, bonds and more.',
          content: 'Fixed income are investments that pay you a fixed interest. They are safer but generally offer lower returns. Ideal for beginners.',
        },
        equities: {
          title: 'Stocks',
          desc: 'Become a company owner.',
          content: 'Buying stocks means owning a small part of a company. If the company grows, the value of your stocks can increase.',
        },
        etfs: {
          title: 'ETFs',
          desc: 'Exchange-traded funds.',
          content: 'ETFs are like baskets of investments. With one purchase, you invest in many companies at once, reducing risk.',
        },
        mutualFunds: {
          title: 'Mutual funds',
          desc: 'Investments managed by experts.',
          content: 'Mutual funds pool money from many investors to buy a variety of assets, managed by professionals.',
        },
        derivatives: {
          title: 'Derivatives & futures',
          desc: 'Advanced investments (educational only).',
          content: 'Derivatives are contracts based on the value of other assets. They are more complex and generally not recommended for beginners.',
        },
      },
    },
    
    // Investments
    investments: {
      title: 'Investment options',
      subtitle: 'Learn about the most common and accessible instruments.',
      whatIs: 'What is it?',
      riskLevel: 'Risk level',
      forWhom: 'Who is it for?',
      example: 'Example',
      risk: {
        low: 'Low',
        medium: 'Medium',
        high: 'High',
      },
      items: {
        cdt: {
          title: 'CDs',
          what: 'Certificates of Deposit. You deposit money in a bank for a fixed time and receive interest.',
          risk: 'low',
          forWhom: 'People looking for safety and stable returns.',
          example: 'You deposit $1,000 for 1 year at 5% annual. At the end you receive $1,050.',
        },
        stocks: {
          title: 'Stocks',
          what: 'Ownership shares of a company. If the company grows, your investment can grow too.',
          risk: 'high',
          forWhom: 'Investors willing to take more risk for potentially higher returns.',
          example: 'You buy 10 shares at $50 each. If they rise to $60, your investment is now worth $600.',
        },
        etfs: {
          title: 'ETFs',
          what: 'Funds containing multiple assets that trade like stocks. They offer instant diversification.',
          risk: 'medium',
          forWhom: 'Investors who want diversification without picking individual stocks.',
          example: 'An S&P 500 ETF gives you exposure to the 500 largest U.S. companies.',
        },
        bonds: {
          title: 'Bonds',
          what: 'Loans you make to governments or companies. They pay you interest over a fixed period.',
          risk: 'low',
          forWhom: 'Conservative investors seeking stable income.',
          example: 'You buy a $1,000 bond at 4% annual. You receive $40 every year.',
        },
        funds: {
          title: 'Investment funds',
          what: 'Money from many investors professionally managed to buy various assets.',
          risk: 'medium',
          forWhom: 'People who prefer experts to manage their money.',
          example: 'You invest in a fund that distributes your money among stocks, bonds and other assets.',
        },
      },
    },
    
    // Glossary
    glossary: {
      title: 'Financial glossary',
      subtitle: 'Simple definitions of common terms.',
      searchPlaceholder: 'Search term...',
      terms: {
        activo: {
          term: 'Asset',
          def: 'Anything of value you own, such as stocks, bonds, or property.',
        },
        diversificacion: {
          term: 'Diversification',
          def: 'Spreading your money across different investments to reduce risk.',
        },
        dividendo: {
          term: 'Dividend',
          def: 'A payment a company makes to its shareholders, usually from its profits.',
        },
        liquidez: {
          term: 'Liquidity',
          def: 'How easily an investment can be converted into cash.',
        },
        portafolio: {
          term: 'Portfolio',
          def: 'The collection of all your investments.',
        },
        rendimiento: {
          term: 'Return',
          def: 'The gain or loss on an investment, usually expressed as a percentage.',
        },
        riesgo: {
          term: 'Risk',
          def: 'The possibility of losing money on an investment.',
        },
        volatilidad: {
          term: 'Volatility',
          def: 'How much an investment\'s price goes up and down.',
        },
      },
    },
    
    // Common
    common: {
      learnMore: 'Learn more',
      back: 'Back',
      next: 'Next',
      disclaimer: 'This content is educational only and does not constitute financial advice.',
    },
  },
} as const;
