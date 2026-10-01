/* Mansión Venus — Catálogo de productos
   Fuente única de verdad: editar aquí nombre, precios, textos e imágenes.
   images: N° de fotos disponibles en assets/img/productos/<slug>/1.webp ... N.webp */

const WA_NUM = "573108710281";
const WEBSITE_NAME = "Mansión Venus";

const CATEGORIES = {
  ellas: {
    label: "Para Ellas",
    sub: "Selección exclusiva para tu placer íntimo",
    msg: ["Tu cuerpo sabe lo que necesita.", "Solo tienes que darle permiso."],
  },
  ellos: {
    label: "Para Ellos",
    sub: "Placer y bienestar sin límites",
    msg: ["Conocerte a ti mismo es el primer paso", "para darlo todo."],
  },
  parejas: {
    label: "Para Parejas",
    sub: "Conexión y placer compartido",
    msg: ["La intimidad más profunda nace", "cuando dos deciden explorar sin miedo."],
  },
};

const PRODUCTS = [
  {
    "slug": "labial-secreto",
    "cat": "ellas",
    "images": 6,
    "name": "Vibrador Labial Secreto",
    "badge": "100% discreto",
    "tagline": "Parece un labial. Se siente como nada que hayas probado.",
    "hook": "A simple vista, un labial de lujo. En tus manos, tu secreto mejor guardado.",
    "story": "Un vibrador con apariencia de pintalabios para llevarlo contigo con discreción. Su formato compacto se guarda fácilmente en el bolso y su manejo sencillo permite encenderlo cuando quieras. Funciona con una pila AAA y tiene un cuerpo de ABS fácil de limpiar.",
    "benefits": [
      "Diseño de pintalabios, compacto y discreto",
      "Manejo sencillo para ajustar la vibración",
      "Cuerpo de ABS, ligero y fácil de limpiar",
      "Funciona con una pila AAA",
      "Tamaño práctico para llevar en el bolso"
    ],
    "specs": {
      "Material": "ABS",
      "Largo": "12 cm",
      "Alimentación": "1 pila AAA (no incluida)",
      "Formato": "Tipo pintalabios",
      "Resistencia al agua": "Resistente a salpicaduras"
    },
    "orig": 45000,
    "price": 14900
  },
  {
    "slug": "punto-g",
    "cat": "ellas",
    "images": 5,
    "name": "Vibrador Silicón Punto G",
    "badge": "Curva anatómica · Silicona",
    "tagline": "Curva de precisión diseñada para encontrar tu punto G, sin fallar.",
    "hook": "No es prueba y error. Es una curva pensada exactamente para lo que buscas.",
    "story": "Su forma curva está pensada para explorar el punto G con comodidad y ajustar la intensidad a tu ritmo. Combina una superficie suave con un diseño fácil de sujetar, para disfrutar a solas o en pareja. Funciona con pilas AAA; en la galería puedes ver sus controles y detalles.",
    "benefits": [
      "Curva anatómica para una estimulación localizada",
      "Superficie suave de silicona",
      "Distintas intensidades de vibración",
      "Diseño cómodo de sujetar",
      "Funciona con pilas AAA"
    ],
    "specs": {
      "Material": "Silicona",
      "Alimentación": "Pilas AAA",
      "Funciones": "Vibración con distintos niveles",
      "Diseño": "Curvo y ergonómico",
      "Resistencia al agua": "Resistente a salpicaduras"
    },
    "orig": 120000,
    "price": 64900
  },
  {
    "slug": "rabbit-dual",
    "cat": "ellas",
    "images": 7,
    "name": "Vibrador Rabbit Dual",
    "badge": "Doble estimulación · 10 niveles",
    "tagline": "Punto G y clítoris, al mismo tiempo. La combinación que lo cambia todo.",
    "hook": "¿Por qué elegir un solo tipo de placer, cuando puedes tener los dos a la vez?",
    "story": "Dos zonas de estimulación en un mismo diseño: una curva para el punto G y un brazo externo para el clítoris. Sus diez niveles de vibración te permiten encontrar el ritmo que prefieras, con una superficie de silicona y un mango cómodo de sujetar. Funciona con dos pilas AA, sin esperar una recarga.",
    "benefits": [
      "Estimulación interna y externa en un mismo diseño",
      "10 niveles de vibración",
      "Superficie de silicona y cuerpo de ABS",
      "21 cm de largo y 4 cm de diámetro",
      "Funciona con 2 pilas AA"
    ],
    "specs": {
      "Material": "Silicona + ABS",
      "Medidas": "21 cm de largo, 4 cm de diámetro",
      "Vibración": "10 niveles",
      "Alimentación": "2 pilas AA (no incluidas)",
      "Resistencia al agua": "Resistente a salpicaduras"
    },
    "orig": 150000,
    "price": 74900
  },
  {
    "slug": "vibrador-shaki",
    "cat": "ellas",
    "images": 6,
    "name": "Vibrador Shaki",
    "badge": "Control giratorio · Waterproof",
    "tagline": "Curvatura realista y velocidad ajustable con solo girar la base. Tú decides el ritmo.",
    "hook": "Gira la base, y el ritmo cambia contigo.",
    "story": "Su curvatura imita la forma de un pene real, diseñada ergonómicamente para llegar al punto G con eficacia. La base giratoria controla la velocidad de vibración de forma manual, de más suave a más intensa, sin botones complicados. Fabricado en TPE suave, no tóxico e inodoro, es completamente resistente al agua y funciona en silencio. También puede usarse para masajear la próstata.",
    "benefits": [
      "Base giratoria: controla la velocidad con un giro",
      "Curvatura ergonómica pensada para el punto G",
      "TPE suave, no tóxico e inodoro",
      "Resistente al agua, uso en ducha o tina",
      "También apto como estimulador de próstata"
    ],
    "specs": {
      "Material": "TPE suave",
      "Control": "Base giratoria, velocidad ajustable",
      "Impermeable": "Sí",
      "Alimentación": "2 pilas AA (no incluidas)",
      "Uso": "Punto G o próstata"
    },
    "orig": 110000,
    "price": 54900
  },
  {
    "slug": "wand-premium",
    "cat": "ellas",
    "images": 9,
    "name": "Masajeador Wand Premium",
    "badge": "Alta potencia · Cuello 360°",
    "tagline": "La cabeza más grande, la vibración más profunda. El clásico que nunca falla.",
    "hook": "A veces lo simple es lo que mejor funciona. Esta es la prueba.",
    "story": "Con su cabeza esférica de gran tamaño y cuello flexible de 360°, el Wand Premium concentra la vibración justo donde la necesitas, sin dispersar la intensidad. Fabricado en silicona suave de primera calidad con base en ABS, es resistente al agua y funciona por debajo de los 50 decibeles: potente y silencioso a la vez. Disponible en negro y blanco.",
    "benefits": [
      "Cabeza esférica de gran tamaño para cobertura total",
      "Cuello flexible de 360° para un masaje preciso",
      "Resistente al agua",
      "Silencioso: menos de 50 decibeles",
      "Inalámbrico, funciona con pilas AA"
    ],
    "specs": {
      "Material": "Silicona + ABS",
      "Colores": "Negro y blanco",
      "Cuello": "Flexible 360°",
      "Impermeable": "Sí",
      "Ruido": "Menos de 50 decibeles",
      "Alimentación": "Pilas AA (no incluidas)"
    },
    "orig": 70000,
    "price": 24900
  },
  {
    "slug": "dildo-realista",
    "cat": "ellas",
    "images": 8,
    "name": "Dildo Realista con Ventosa",
    "badge": "Manos libres · Tecnología 4D",
    "tagline": "Base con ventosa para usarlo donde tú quieras, sin usar las manos.",
    "hook": "Libertad total: pégalo, olvídate de sostenerlo, y disfruta.",
    "story": "Con tecnología 4D, este dildo de 18 cm simula glande, tronco y testículos con una textura increíblemente natural al tacto. Fabricado en silicona médica hipoalergénica, libre de tóxicos, combina flexibilidad con firmeza para adaptarse a cada movimiento. Su ventosa potente permite adherirlo a cualquier superficie lisa para uso completamente manos libres, y también es compatible con arnés.",
    "benefits": [
      "Tecnología 4D: glande, tronco y testículos realistas",
      "Base de ventosa potente: se adhiere a superficies lisas",
      "Silicona médica hipoalergénica, libre de tóxicos",
      "Flexible pero firme",
      "Compatible con arnés para uso en pareja"
    ],
    "specs": {
      "Material": "Silicona médica hipoalergénica",
      "Medidas": "18 cm de largo, 3.5 cm de diámetro",
      "Base": "Ventosa de alta fijación",
      "Compatible con arnés": "Sí",
      "Empaque": "Bolsa + caja"
    },
    "orig": 95000,
    "price": 67900
  },
  {
    "slug": "dildo-eyaculador",
    "cat": "ellas",
    "images": 5,
    "name": "Dildo Eyaculador + Vibración",
    "badge": "Función eyaculadora real",
    "tagline": "Vibra, y también \"eyacula\". La experiencia más completa e inmersiva.",
    "hook": "No se queda en vibrar. Va un paso más allá.",
    "story": "Este dildo de 21 cm combina un vibrador integrado con una bomba manual que dispara el líquido que elijas, para una experiencia mucho más inmersiva y realista. Su base con copa de succión permite usarlo manos libres en cualquier posición, y también es compatible con arnés. Recargarlo y limpiarlo es sencillo: solo jabón líquido y agua tibia. Funciona con 2 baterías AAA no incluidas.",
    "benefits": [
      "Bomba manual: eyacula el líquido que tú elijas",
      "Vibrador integrado",
      "Base con copa de succión, uso manos libres",
      "Compatible con arnés",
      "Limpieza fácil con jabón y agua tibia",
      "2 baterías AAA no incluidas"
    ],
    "specs": {
      "Material": "Silicona suave y resistente",
      "Medidas": "21 cm de largo, 4 cm de ancho",
      "Función especial": "Bomba manual eyaculadora + vibrador integrado",
      "Base": "Ventosa/copa de succión",
      "Compatible con arnés": "Sí",
      "Alimentación": "2 baterías AAA (no incluidas)"
    },
    "orig": 110000,
    "price": 72900
  },
  {
    "slug": "cristal-metalizado",
    "cat": "ellas",
    "images": 7,
    "name": "Vibrador Cristal Metalizado",
    "badge": "Velocidad regulable · Funda removible",
    "tagline": "Acabado brillante, textura suave y vibración a tu ritmo.",
    "hook": "Gira la base y encuentra tu intensidad.",
    "story": "El Pilot Liso combina una funda suave de silicona con una base giratoria que regula la vibración. Su acabado brillante y los relieves del cabezal aportan textura, mientras que la funda removible facilita la limpieza y doble uso. Un formato de 17,8 cm que funciona con dos pilas AAA.",
    "benefits": [
      "Velocidad de vibración regulable desde la base",
      "Funda removible: facilita la limpieza y doble uso",
      "Cabezal con pequeños relieves",
      "17,8 cm de largo y 3,5 cm de diámetro",
      "Funciona con 2 pilas AAA"
    ],
    "specs": {
      "Material": "Silicona + ABS",
      "Medidas": "17,8 cm de largo, 3,5 cm de diámetro",
      "Control": "Base giratoria, velocidad regulable",
      "Alimentación": "2 pilas AAA",
      "Funda": "Removible",
      "Empaque": "Caja"
    },
    "orig": 75000,
    "price": 29900
  },
  {
    "slug": "bolas-placer-x10",
    "cat": "ellas",
    "images": 6,
    "name": "Bolas de Placer X10",
    "badge": "10 bolas · Progresivo",
    "tagline": "Diez bolas, un solo cordón, una sensación progresiva que se vuelve adictiva.",
    "hook": "Empiezas suave. Terminas sin querer parar.",
    "story": "Una cadena de 26 cm con 10 bolas de tamaño progresivo, pensada para quienes buscan explorar nuevas sensaciones y fortalecer su suelo pélvico. No tienen motor de vibración: su placer viene de la sensación de llenado, el peso y la tonificación muscular que dejan con el uso regular. Su diseño ergonómico facilita una inserción cómoda, tanto para principiantes como para quienes ya quieren profundizar en la práctica.",
    "benefits": [
      "Cadena de 26 cm con 10 bolas de tamaño progresivo",
      "Sin vibración: estimulación por peso y sensación de llenado",
      "Ayuda a fortalecer y tonificar el suelo pélvico",
      "Diseño ergonómico, inserción cómoda",
      "Ideal tanto para principiantes como para expertas"
    ],
    "specs": {
      "Material": "Silicona/ABS liso",
      "Largo total": "26 cm",
      "Cantidad": "10 bolas",
      "Vibración": "No",
      "Uso": "Vaginal o anal",
      "Impermeable": "Sí"
    },
    "orig": 55000,
    "price": 14900
  },
  {
    "slug": "rotor-360",
    "cat": "ellas",
    "images": 5,
    "name": "Vibrador Rotor Realista 360°",
    "badge": "Rotación 360° · 10 modos",
    "tagline": "Rotación 360° y textura ultra realista. Una experiencia envolvente de verdad.",
    "hook": "Gira, vibra, envuelve. Así de simple, así de intenso.",
    "story": "Combina movimiento de rotación de 360° y diez modos de vibración, manejados desde un control externo conectado por cable. Su cuerpo texturizado y su base con ventosa permiten explorar distintos ritmos y posiciones. Tiene 22 cm de largo total y funciona con tres pilas AAA.",
    "benefits": [
      "Movimiento de rotación de 360°",
      "10 modos de vibración",
      "Control externo conectado por cable",
      "Base con ventosa para superficies lisas",
      "Textura realista en un cuerpo de TPR"
    ],
    "specs": {
      "Material": "TPR + ABS",
      "Largo total": "22 cm",
      "Largo insertable": "16 cm",
      "Diámetro": "3,5 cm",
      "Modos": "10 modos de vibración + rotación 360°",
      "Control": "Externo, conectado por cable",
      "Alimentación": "3 pilas AAA (no incluidas)",
      "Resistencia al agua": "Resistente a salpicaduras; no sumergible"
    },
    "orig": 165000,
    "price": 99900
  },
  {
    "slug": "baby-doll",
    "cat": "ellas",
    "images": 1,
    "name": "Malla Baby Doll Enteriza",
    "badge": "Diseño enterizo",
    "tagline": "Encaje, transparencias y aberturas estratégicas. Lencería que hace el trabajo antes de empezar.",
    "hook": "A veces la mejor parte pasa antes de apagar la luz.",
    "story": "Una malla enteriza con detalles de encaje y aberturas pensadas para insinuar, no para esconder. Su tela suave y elástica se ajusta a distintas siluetas con comodidad, y su diseño está pensado para un solo objetivo: sorprender.",
    "benefits": [
      "Diseño enterizo con detalles de encaje",
      "Aberturas estratégicas",
      "Malla suave y elástica",
      "Ajuste universal, cómodo",
      "Ideal para sorprender en una noche especial"
    ],
    "specs": {
      "Material": "Malla elástica + encaje",
      "Talla": "Ajuste universal (talla única)",
      "Color": "Negro",
      "Cuidado": "Lavado a mano"
    },
    "orig": 35000,
    "price": 19900
  },
  {
    "slug": "medias-liguero",
    "cat": "ellas",
    "images": 1,
    "name": "Panty Medias Malla",
    "badge": "Liguero incorporado",
    "tagline": "Medias de malla fina con liguero incorporado. El detalle que sí se nota.",
    "hook": "El detalle pequeño que cambia toda la noche.",
    "story": "Medias de malla fina y transparente con diseño de liguero incorporado. Su tejido elástico se adapta al cuerpo con comodidad y aporta un acabado delicado. Incluye únicamente medias malla.",
    "benefits": [
      "Liguero incorporado, sin ajustes complicados",
      "Malla fina y transparente",
      "Incluye únicamente medias malla",
      "Elástico y cómodo",
      "Ajuste universal"
    ],
    "specs": {
      "Material": "Malla fina",
      "Incluye": "medias malla",
      "Talla": "Ajuste universal",
      "Color": "Negro"
    },
    "orig": 32000,
    "price": 18900
  },
  {
    "slug": "huevos-tenga",
    "cat": "ellos",
    "images": 5,
    "name": "Huevos Masturbadores Tenga",
    "badge": "6 texturas disponibles",
    "tagline": "Seis texturas distintas para descubrir cuál te vuelve loco.",
    "hook": "Uno para cada estado de ánimo.",
    "story": "Un masturbador compacto y flexible, con una textura interior que cambia según el modelo. Hay seis diseños disponibles para explorar sensaciones distintas, desde relieves suaves hasta formas más marcadas. Consulta por WhatsApp cuál está disponible y elige tu preferido antes de pedir.",
    "benefits": [
      "6 diseños de textura interior disponibles",
      "Material flexible que se adapta al movimiento",
      "Formato compacto y discreto",
      "Uso manual, sin baterías",
      "Elige el modelo con ayuda de un asesor"
    ],
    "specs": {
      "Formato": "Huevo masturbador",
      "Material": "Elastómero flexible",
      "Modelos": "Twister, Stepper, Spider, Silky, Clicker y Wavy",
      "Alimentación": "No requiere baterías",
      "Selección": "Modelo según disponibilidad; confirmar por WhatsApp"
    },
    "orig": 45000,
    "price": 14900,
    "soldOut": true
  },
  {
    "slug": "funda-extensora",
    "cat": "ellos",
    "images": 7,
    "name": "Funda Extensora con Vibración",
    "badge": "+Longitud +Grosor",
    "tagline": "Más largo, más grueso, y con vibración extra para ella. Todo en una funda.",
    "hook": "Más de lo que tienes, más de lo que ella siente.",
    "story": "Esta funda de silicona premium, de 12,5 cm de largo por 5,5 cm de ancho, se adapta a cualquier tamaño de pene y suma largo y grosor de forma inmediata, mientras su vibración integrada añade estimulación extra para el clítoris de ella. Suave, cómoda y flexible, pensada para el placer de los dos.",
    "benefits": [
      "Aumenta largo y grosor de forma inmediata",
      "Vibración integrada que también estimula a ella",
      "Silicona premium, suave y flexible",
      "Se adapta a cualquier tamaño de pene",
      "Incluye pilas"
    ],
    "specs": {
      "Material": "Silicona premium",
      "Medidas": "12,5 cm de largo, 5,5 cm de ancho",
      "Vibración": "Sí, integrada",
      "Alimentación": "Pilas incluidas",
      "Impermeable": "Sí"
    },
    "orig": 80000,
    "price": 39000
  },
  {
    "slug": "masajeador-prostata",
    "cat": "ellos",
    "images": 6,
    "name": "Masajeador de Próstata",
    "badge": "Curvatura anatómica",
    "tagline": "Curvatura de precisión diseñada para encontrar el punto P sin adivinar.",
    "hook": "Diseñado con precisión anatómica, no a prueba y error.",
    "story": "Un plug compacto de 10 cm de largo por 2 cm de ancho, con una curvatura calculada para llegar directo al punto P con comodidad. No necesita baterías ni cables: su forma anatómica hace todo el trabajo, con una base ancha pensada para un uso seguro. El punto de partida ideal para empezar a explorar la anatomía masculina.",
    "benefits": [
      "Curvatura anatómica que llega directo al punto P",
      "No necesita baterías, listo para usar",
      "Base ancha de seguridad",
      "Tamaño compacto, ideal para empezar",
      "Discreto y fácil de limpiar"
    ],
    "specs": {
      "Material": "ABS",
      "Medidas": "10 cm de largo, 2 cm de ancho",
      "Alimentación": "No requiere baterías",
      "Diseño": "Curvatura anatómica + base de seguridad",
      "Uso": "Individual o en pareja"
    },
    "orig": 85000,
    "price": 25900
  },
  {
    "slug": "anillo-retardante",
    "cat": "ellos",
    "images": 6,
    "name": "Anillo Vibrador Retardante",
    "badge": "Prolonga · Para dos",
    "tagline": "Doble anillo, doble función: te ayuda a durar más y la estimula a ella al mismo tiempo.",
    "hook": "Dura más. Ella siente más. Los dos ganan.",
    "story": "Su anillo texturizado en silicona morada se coloca en la base del pene (o en escroto y testículos, a tu preferencia) y retiene el flujo sanguíneo para una erección más firme y duradera. La bala vibradora removible, con cerca de 50 minutos de autonomía, se ubica sobre el clítoris durante la penetración para que ella llegue al orgasmo sin necesidad de usar las manos. Suave, flexible y fácil de ajustar a cualquier tamaño.",
    "benefits": [
      "Retarda la eyaculación reteniendo el flujo sanguíneo",
      "Bala vibradora removible que estimula el clítoris sin usar las manos",
      "Silicona texturizada, suave y flexible para cualquier talla",
      "Autonomía de la bala: cerca de 50 minutos por carga",
      "Fácil de colocar y quitar, reutilizable"
    ],
    "specs": {
      "Material": "Silicona texturizada",
      "Color": "Morado",
      "Bala vibradora": "Removible, ~50 min de uso",
      "Función": "Retardante + estimulador de clítoris",
      "Uso recomendado": "Máx. 30 min por sesión",
      "Ajuste": "Universal"
    },
    "orig": 35000,
    "price": 9900
  },
  {
    "slug": "pro-extender-3",
    "cat": "ellos",
    "images": 7,
    "name": "Pro Extender 3",
    "badge": "Extensión progresiva",
    "tagline": "Un sistema de tracción ajustable con los accesorios reunidos en un kit.",
    "hook": "Ajuste gradual y un kit completo, con todos sus detalles a la vista.",
    "story": "Diseñado para agrandar el pene mediante tracción ajustable, este kit reúne una base, varillas de acero y correas para configurar el conjunto. Incluye espuma de confort, manual y caja original.",
    "benefits": [
      "Diseñado para agrandar el pene mediante tracción",
      "Varillas de acero para configurar el conjunto",
      "Correa tubular y correa plana",
      "Espuma de confort incluida",
      "Manual y caja original"
    ],
    "specs": {
      "Materiales": "Acero y silicona",
      "Sistema": "Tracción ajustable",
      "Incluye": "Dispositivo con base, varillas, correas, espuma, manual y caja",
      "Presentación": "Kit completo",
      "Finalidad": "Agrandar el pene mediante tracción"
    },
    "orig": 145000,
    "price": 85900
  },
  {
    "slug": "dildo-doble-45",
    "cat": "parejas",
    "images": 6,
    "name": "Dildo Doble 45 cm",
    "badge": "45cm · Gel premium",
    "tagline": "45 cm para compartir. Un cabezal para el punto G, otro para anal.",
    "hook": "Hecho para dos, al mismo tiempo.",
    "story": "Con 45 cm de largo y 3 cm de grosor, este dildo doble en silicona jelly tiene un cabezal pensado para el punto G o uso vaginal, y otro diseñado para uso anal, permitiendo la doble penetración simultánea en pareja. Su textura suave y muy flexible, en color rosado, se adapta al cuerpo con comodidad, es impermeable y fácil de limpiar después de cada uso.",
    "benefits": [
      "45 cm de largo, 3 cm de grosor",
      "Doble cabezal: uno para punto G/vaginal, otro para anal",
      "Silicona jelly no tóxica y antialérgica",
      "Ideal para uso simultáneo en pareja",
      "Impermeable, fácil de limpiar"
    ],
    "specs": {
      "Material": "Silicona jelly médica",
      "Largo total": "45 cm",
      "Grosor": "3 cm",
      "Color": "Rosado",
      "Extremos": "Doble cabezal (vaginal + anal)",
      "Uso": "En pareja"
    },
    "orig": 90000,
    "price": 72000
  },
  {
    "slug": "arnes-femenino",
    "cat": "parejas",
    "images": 6,
    "name": "Arnés Femenino con Dildo",
    "badge": "Talla ajustable · Color fucsia",
    "tagline": "Arnés fucsia ajustable con dildo realista de 20 cm incluido. Explora nuevos roles, juntos.",
    "hook": "Nuevos roles, la misma confianza de siempre.",
    "story": "Un cinturón en color fucsia con correas ajustables al contorno del cuerpo, fácil de poner y quitar, que te deja las manos completamente libres. Incluye un dildo de 20 cm en TPR con aspecto de piel real, pensado para quienes buscan el tamaño y grosor justos. A prueba de agua y en materiales no tóxicos, es ese ligero toque de perfección para explorar nuevas dinámicas en pareja.",
    "benefits": [
      "Incluye dildo realista de 20 cm en TPR",
      "Correas ajustables al contorno del cuerpo",
      "Manos completamente libres",
      "A prueba de agua, materiales no tóxicos",
      "Ideal para explorar nuevas dinámicas en pareja"
    ],
    "specs": {
      "Material arnés": "Ajustable, color fucsia",
      "Material dildo": "TPR color piel",
      "Medidas dildo": "20 cm de largo, 3.5 cm de diámetro",
      "Impermeable": "Sí",
      "Incluye": "Arnés + dildo"
    },
    "orig": 180000,
    "price": 59900
  },
  {
    "slug": "arnes-ultra",
    "cat": "parejas",
    "images": 8,
    "name": "Arnés Ultra con Dildo",
    "badge": "Arnés ajustable · Control externo",
    "tagline": "Arnés ajustable con vibrador y control externo para explorar juntos.",
    "hook": "El control, literalmente, en sus manos.",
    "story": "Un conjunto de arnés ajustable, dildo con vibración y control externo conectado por cable. Las correas permiten acomodarlo al cuerpo y el mando facilita encenderlo y regular la intensidad. Todo en un mismo conjunto para probar nuevas dinámicas en pareja.",
    "benefits": [
      "Dildo con vibración integrada",
      "Control externo para manejar la intensidad",
      "Correas de arnés ajustables",
      "Diseño para uso en pareja",
      "Arnés, dildo y control en un mismo conjunto"
    ],
    "specs": {
      "Incluye": "Arnés + dildo con vibrador + control externo",
      "Ajuste": "Correas ajustables",
      "Control": "Externo, conectado por cable",
      "Funciones": "Vibración regulable",
      "Uso": "En pareja"
    },
    "orig": 115000,
    "price": 69900
  }
];
const PHOTO_WIDTHS = {"labial-secreto":[[143,143,143],[556,556],[479,479],[618,618],[1122,640],[1254,800]],"punto-g":[[1023,532,319],[887,400],[1353,800],[1024,533],[1254,800]],"rabbit-dual":[[1080,450,270],[1080,450],[1600,800],[486,486],[455,455],[1024,533],[1254,800]],"vibrador-shaki":[[651,271,163],[1600,800],[595,248],[1152,482],[1122,640],[1254,800]],"wand-premium":[[1600,677,406],[1600,678],[1600,701],[1600,800],[1600,800],[826,800],[737,307],[1122,640],[1254,800]],"dildo-realista":[[1600,800,480],[1600,733],[779,325],[990,433],[911,800],[424,424],[1024,533],[1254,800]],"dildo-eyaculador":[[903,376,226],[830,346],[1485,619],[1080,450],[1254,800]],"cristal-metalizado":[[1600,690,414],[1600,753],[907,378],[1600,800],[1600,800],[1122,640],[1254,800]],"bolas-placer-x10":[[1289,537,322],[1315,548],[1080,450],[1600,704],[1024,533],[1254,800]],"rotor-360":[[1076,448,269],[1327,553],[1600,800],[817,340],[469,469]],"baby-doll":[[476,476,408]],"medias-liguero":[[580,580,473]],"huevos-tenga":[[1112,743,446],[1080,450],[1080,450],[941,450],[1254,800]],"funda-extensora":[[1080,450,270],[861,359],[1600,768],[1600,800],[1510,629],[1080,450],[1254,800]],"masajeador-prostata":[[1181,800,480],[1600,800],[1600,800],[1600,800],[1024,533],[1254,800]],"anillo-retardante":[[1600,684,410],[635,635],[1600,800],[1600,800],[1024,533],[1254,800]],"pro-extender-3":[[421,421,258],[815,340],[1081,450],[991,669],[1076,589],[1024,533],[1254,800]],"dildo-doble-45":[[1080,450,270],[1600,800],[1600,800],[1600,800],[1024,533],[1254,800]],"arnes-femenino":[[1080,450,270],[1081,450],[1081,450],[1600,800],[941,450],[1254,800]],"arnes-ultra":[[1200,800,480],[1081,450],[729,729],[1081,450],[1080,450],[521,521],[1080,450],[1254,800]]};
