const PRODUCTS = {
  product1: {
    id: "product1",
    name: "CARDIGAN",
    price: 40,
    salePrice: 35,
    color: "Verde",
    images: {
      slider: [
      "img/products/Cardigan_Verde/CV_3.png",
      "img/products/Cardigan_Verde/CV_4.png"
      ],
      scroll: [
      "img/products/Cardigan_Verde/CV_1.png",
      "img/products/Cardigan_Verde/CV_2.png",
      ]
    },
    collection: "winter25",
    recommended: ["product2", "product3", "product5"],
    isNew: false,
    isSale: true,
    description: `
Diseñado con un enfoque en la calidad, la comodidad 
y la versatilidad. <br><br>

Este cardigan está confeccionado con materiales de 
alta calidad, ofreciendo una sensación suave al tacto,
 una construcción duradera y un fit cuidado para el 
 uso diario. <br><br>

Como detalle distintivo, incluye un pin personalizado, 
diseñado exclusivamente para esta colección: un osito 
sin cabeza. <br><br>

<strong>Disponible en negro, vino y verde.</strong>
    `
  },

  product2: {
    id: "product2",
    name: "CARDIGAN",
    price: 40,
    salePrice: 35,
    color: "Vino",
    images: {
      slider: [
      "img/products/Cardigan_Vino/CV_1.png",
      "img/products/Cardigan_Vino/CV_4.png"
      ],
      scroll: [
      "img/products/Cardigan_Vino/CV_2.png",
      "img/products/Cardigan_Vino/CV_3.png"
      ]
    },
    collection: "winter25",
    recommended: ["product1", "product3", "product5"],
    isNew: false,
    isSale: true,
    description: `
Diseñado con un enfoque en la calidad, la comodidad 
y la versatilidad. <br><br>

Este cardigan está confeccionado con materiales de 
alta calidad, ofreciendo una sensación suave al tacto,
 una construcción duradera y un fit cuidado para el 
 uso diario. <br><br>

Como detalle distintivo, incluye un pin personalizado, 
diseñado exclusivamente para esta colección: un osito 
sin cabeza. <br><br>

<strong>Disponible en negro, vino y verde.</strong>
    `
  },

  product3: {
    id: "product3",
    name: "CARDIGAN",
    price: 40,
    salePrice: 35,
    color: "Negro",
    images: {
      slider: [
      "img/products/Cardigan_Negro/CN_1.png",
      "img/products/Cardigan_Negro/CN_4.png",
      ],
      scroll: [
      "img/products/Cardigan_Negro/CN_2.png",
      "img/products/Cardigan_Negro/CN_3.png",
      ]
    },
    collection: "winter25",
    recommended: ["product1", "product2", "product4"],
    isNew: false,
    isSale: true,
    description: `
Diseñado con un enfoque en la calidad, la comodidad 
y la versatilidad. <br><br>

Este cardigan está confeccionado con materiales de 
alta calidad, ofreciendo una sensación suave al tacto,
 una construcción duradera y un fit cuidado para el 
 uso diario. <br><br>

Como detalle distintivo, incluye un pin personalizado, 
diseñado exclusivamente para esta colección: un osito 
sin cabeza. <br><br>

<strong>Disponible en negro, vino y verde.</strong>
    `
  },

    product4: {
    id: "product4",
    name: "MICHAEL JORDAN TEE",
    price: 20,
    salePrice: 15,
    color: "Negro",
    images: {
      slider: [
      "img/products/MJ_TEE/MJ_3.png",
      "img/products/MJ_TEE/MJ_2.png"
      ],
      scroll: [
      "img/products/MJ_TEE/MJ_1.jpg",
      "img/products/MJ_TEE/MJ_2.jpg"
      ]
    },
    collection: "streetart",
    recommended: ["product1", "product2", "product3"],
    isNew: false,
    isSale: true,
    description: `
Camiseta gráfica inspirada en el legado de Michael 
Jordan, diseñada como una pieza statement dentro 
de la colección.<br><br>

Confeccionada en <strong>100% algodón pesado de alta calidad</strong>,
ofrece un tacto suave, una estructura resistente y 
un fit cómodo para el uso diario.<br><br>

Un homenaje silencioso a quienes entienden que el trabajo,
la visión y la determinación construyen íconos.
    `
  },

    product5: {
    id: "product5",
    name: "TWO LAYERS",
    price: 25,
    salePrice: 20,
    color: "Negro",
    images: {
      slider: [
      "img/products/Long_Sleeve/LS_1.png",
      "img/products/Long_Sleeve/LS_4.png",
      "img/products/Long_Sleeve/LS_5.png"
      ],
      scroll: [
      "img/products/Long_Sleeve/LS_2.jpg",
      "img/products/Long_Sleeve/LS_3.jpg"
      ]
    },
    collection: "streetart",
    recommended: ["product4", "product1", "product3"],
    isNew: false,
    isSale: true,
    description: `
Un saco de <strong>doble capa (Two Layers)</strong>, diseñado 
para aportar profundidad, estructura y un look 
distintivo sin perder la esencia minimal de la marca.<br><br>

La superposición de capas crea una sensación visual 
y funcional diferente, elevando una prenda esencial 
a un nivel más conceptual.<br><br>

Confeccionado con materiales de alta calidad, ofrece
 comodidad, resistencia y un fit pensado para el 
uso diario. Una pieza que demuestra que los detalles 
sutiles también pueden marcar la diferencia.
    `
  },

     product6: {
    id: "product6",
    name: "KNITWEAR",
    price: 35,
    color: "Rosado",
    images: {
      slider: [
      "img/products/Knitwear_Rosa/KS_1.png",
      "img/products/Knitwear_Rosa/KS_2.png",
      "img/products/Knitwear_Rosa/KS_3.png",
      ],
    },
    recommended: ["product7", "product8", "product9"],
    isNew: true,
    isSale: false,
    description: `
Knitwear diseñado con un enfoque minimal en el frente, 
donde vuelve a aparecer nuestro pin característico del 
osito sin cabeza, y un estampado protagonista en la 
parte posterior, creando un contraste sutil pero 
intencional.<br><br>

Esta pieza forma parte de la colección <strong>ART & DESIGN 
STUDIO</strong>, un concepto que representa nuestro amor por
el arte y la manera en la que lo integramos y 
expresamos dentro de Bare Basics. <br><br>

Confeccionado con materiales de alta calidad, ofrece 
abrigo, comodidad y una estructura cuidada para el 
uso diario.<br><br>

El estampado posterior aporta carácter y profundidad,
 transformando una prenda clásica en un elemento 
 distintivo dentro de la colección.
    `
  }, 

    product7: {
    id: "product7",
    name: "KNITWEAR",
    price: 35,
    color: "Azul",
    images: {
      slider: [
      "img/products/Knitwear_Azul/KA_1.png",
      "img/products/Knitwear_Azul/KA_2.png",
      "img/products/Knitwear_Azul/KA_3.png",
      ]
    },
    recommended: ["product6", "product8", "product9"],
    isNew: true,
    isSale: false,
    description: `
Knitwear diseñado con un enfoque minimal en el frente, 
donde vuelve a aparecer nuestro pin característico del 
osito sin cabeza, y un estampado protagonista en la 
parte posterior, creando un contraste sutil pero 
intencional.<br><br>

Esta pieza forma parte de la colección <strong>ART & DESIGN 
STUDIO</strong>, un concepto que representa nuestro amor por
el arte y la manera en la que lo integramos y 
expresamos dentro de Bare Basics. <br><br>

Confeccionado con materiales de alta calidad, ofrece 
abrigo, comodidad y una estructura cuidada para el 
uso diario.<br><br>

El estampado posterior aporta carácter y profundidad,
 transformando una prenda clásica en un elemento 
 distintivo dentro de la colección.
    `
  },

    product8: {
    id: "product8",
    name: "KNITWEAR",
    price: 35,
    color: "Blanco",
    images: {
      slider: [
      "img/products/Knitwear_Blanco/KB_1.png",
      "img/products/Knitwear_Blanco/KB_2.png",
      "img/products/Knitwear_Blanco/KB_3.png",
      ]
    },
    recommended: ["product6", "product7", "product9"],
    isNew: true,
    isSale: false,
    description: `
Knitwear diseñado con un enfoque minimal en el frente, 
donde vuelve a aparecer nuestro pin característico del 
osito sin cabeza, y un estampado protagonista en la 
parte posterior, creando un contraste sutil pero 
intencional.<br><br>

Esta pieza forma parte de la colección <strong>ART & DESIGN 
STUDIO</strong>, un concepto que representa nuestro amor por
el arte y la manera en la que lo integramos y 
expresamos dentro de Bare Basics. <br><br>

Confeccionado con materiales de alta calidad, ofrece 
abrigo, comodidad y una estructura cuidada para el 
uso diario.<br><br>

El estampado posterior aporta carácter y profundidad,
 transformando una prenda clásica en un elemento 
 distintivo dentro de la colección.
    `
  },

    product9: {
    id: "product9",
    name: "ART & DESIGN TEE",
    price: 20,
    color: "Negro",
    images: {
      slider: [
      "img/products/Bare_Tee/BT_1.png",
      "img/products/Bare_Tee/BT_2.png",
      "img/products/Bare_Tee/BT_3.png"
      ]
    },
    recommended: ["product6", "product7", "product8"],
    isNew: true,
    isSale: false,
    description: `
Camiseta diseñada como parte de la colección <strong>ART & 
DESIGN STUDIO</strong>, una expresión de nuestro amor por 
el arte y su integración dentro de Bare Basics.<br><br>

En la parte posterior, incorpora el logotipo <strong>ART & 
DESIGN STUDIO</strong> de Bare, aportando identidad y 
carácter sin perder una estética limpia y atemporal.<br><br>

Confeccionada en <strong>100% algodón de alto gramaje</strong>,
ofrece una sensación firme, cómoda y duradera, pensada para 
el uso diario.<br><br>

Una prenda esencial elevada a través del diseño, la 
calidad y los detalles.
    `
  },

    product10: {
    id: "product10",
    name: "RUNNING VEST",
    price: 25,
    color: "Negro",
    images: {
      slider: [
      "img/products/Running_Vest/RV_1.png",
      "img/products/Running_Vest/RV_2.png",
      ]
    },
    recommended: ["product11", "product12", "product9"],
    isNew: true,
    isSale: false,
    description: `
Running vest diseñado por runners y para runners, 
como parte de la colección <strong>FOR ALL RUNNERS</strong>.<br><br>

Pensado desde la experiencia real de entrenamiento,
prioriza la ligereza, la transpirabilidad y la 
libertad de movimiento.<br><br>

Confeccionado con un textil técnico de alto desempeño, 
es extremadamente ligero, transpirable y de secado 
rápido, ayudando a mantener el cuerpo fresco incluso 
en sesiones intensas.<br><br>

Una prenda funcional creada para acompañarte en cada 
kilómetro, sin distracciones.
    `
  },

    product11: {
    id: "product11",
    name: "SPEED SOCKS",
    price: 8,
    color: "Rosado",
    images: {
      slider: [
      "img/products/Speed_Socks_Rosa/SSR_1.png"
      ],
      scroll: [
      "img/products/Speed_Socks_Rosa/SSR_2.jpg",
      "img/products/Speed_Socks_Rosa/SSR_3.jpg"
      ]
    },
    sizes: ["9-11"],
    recommended: ["product12", "product10", "product9"],
    isNew: true,
    isSale: false,
    description: `
Speed Socks diseñadas como parte de la colección de <strong>FOR ALL RUNNERS</strong>
pensadas para ofrecer comodidad, ajuste y rendimiento 
en cada entrenamiento.<br><br>

Confeccionadas sin costuras, reducen la fricción y 
evitan molestias durante la carrera.<br><br>

Incorporan paneles mesh que favorecen la transpirabilidad 
y una sujeción estratégica que mantiene la media en su 
sitio en todo momento, incluso a ritmos exigentes.<br><br>

Disponibles en talla 9–11, ideales para un ajuste seguro y cómodo.
    `
  },

    product12: {
    id: "product12",
    name: "SPEED SOCKS",
    price: 8,
    color: "Blanco",
    images: {
      slider: [
      "img/products/Speed_Socks_Blanco/SSB_1.png"
      ],
      scroll: [
      "img/products/Speed_Socks_Blanco/SSB_2.jpg",
      "img/products/Speed_Socks_Blanco/SSB_2.jpeg"
      ]
    },
    sizes: ["9-11"],
    oneSize: true,
    recommended: ["product11", "product10", "product9"],
    isNew: true,
    isSale: false,
    description: `
Speed Socks diseñadas como parte de la colección de <strong>FOR ALL RUNNERS</strong>
pensadas para ofrecer comodidad, ajuste y rendimiento 
en cada entrenamiento.<br><br>

Confeccionadas sin costuras, reducen la fricción y 
evitan molestias durante la carrera.<br><br>

Incorporan paneles mesh que favorecen la transpirabilidad 
y una sujeción estratégica que mantiene la media en su 
sitio en todo momento, incluso a ritmos exigentes.<br><br>

Disponibles en talla 9–11, ideales para un ajuste seguro y cómodo.
    `
  }

};
