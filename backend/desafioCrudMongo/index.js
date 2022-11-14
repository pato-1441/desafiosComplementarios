import mongoose from "mongoose";
import { messages, products } from "./models/index.js";

const toAddProducts = [
  { title: "Coca-Cola", price: 320, url: "www.coca-cola.com" },
  { title: "Seven-Up", price: 650, url: "www.sevenup.com" },
  { title: "Mirinda", price: 830, url: "www.mirinda.com" },
  { title: "Fanta", price: 1040, url: "www.fanta.com" },
  { title: "Pepsi", price: 1260, url: "www.pepsi.com" },
  { title: "Sprite", price: 1520, url: "www.sprite.com" },
  { title: "Gatorade", price: 2800, url: "www.gatorade.com" },
  { title: "Powerade", price: 3200, url: "www.powerade.com" },
  { title: "Guarana", price: 4520, url: "www.guarana.com" },
  { title: "Pritty Limon", price: 4990, url: "www.prittylimon.com" },
];

const toAddMessages = [
  { message: "Hola", timestamp: "161651651651210" },
  { message: "Como estas?", timestamp: "161651895651210" },
  { message: "Bien y vos?", timestamp: "161625481651210" },
  { message: "Todo bien, aprendiendo mongoose", timestamp: "161651651653659" },
  {
    message: "Si esta muy bueno, yo prefiero SQL",
    timestamp: "161657849651210",
  },
  {
    message: "Va en gustos, a mi me resulta mas comodo esto",
    timestamp: "161651256351210",
  },
  {
    message: "Si, o podrias guardar la base en un Excel jajaj",
    timestamp: "161258951651210",
  },
  { message: "En un .txt con fileSystem jajajs", timestamp: "161651659856210" },
  { message: "Nos vemos cuidate!", timestamp: "161678451651210" },
  { message: "Abrazo", timestamp: "161678455286210" },
];

const script = async () => {
  console.log("--------------------");
  try {
    console.log("Conectando...");
    const URI = "mongodb://localhost:27017/ecommerce";
    await mongoose.connect(URI);

    console.log("Elimino todos...");
    await products.deleteMany({});
    await messages.deleteMany({});

    console.log("------------------------------------");
    console.log("1) Añado productos");
    await products.insertMany(toAddProducts);

    console.log("------------------------------------");
    console.log("1 bis) Añado mensajes");
    await messages.insertMany(toAddMessages);

    console.log("3) Listar todos los documentos en colección productos.");
    const getProducts = await products.find({});
    console.log({ getProducts });

    console.log("3 bis) Listar todos los documentos en colección mensajes.");
    const getMessages = await messages.find({});
    console.log({ getMessages });

    console.log("4) Mostrar la cantidad de documentos almacenados en productos.");
    const getProductsLength = await products.find({});
    console.log("Cantidad productos: ", getProductsLength.length);

    console.log("4 bis) Mostrar la cantidad de documentos almacenados en mensajes.");
    const getMessagesLength = await messages.find({});
    console.log("Cantidad mensajes: ", getMessagesLength.length);

    console.log("------------------------------------");
    console.log("5.A) Agregar un producto más en la colección de productos");
    // Elimino el ultimo antes de traerlo para no duplicar
    const newProducts = [
      ...getProducts,
      { title: "Budweiser", price: 2500, url: "www.budweiser.com" },
    ];
    await products.deleteMany({});
    await products.insertMany(newProducts);
    console.log({newProducts});

    console.log("------------------------------------");
    console.log("5.B) Realizar una consulta por nombre de producto específico");
    const puntoB = await products.findOne({ title: "Guarana" });
    console.log(puntoB);

    console.log("------------------------------------");
    console.log("5.bi) Listar los productos con precio menor a 1000 pesos.");
    const puntoBI = await products.find({price:{$lt:1000}});
    console.log(puntoBI);

    console.log("------------------------------------");
    console.log("5.bii) Listar los productos con precio entre los 1000 a 3000 pesos.");
    const puntoBII = await products.find({price:{$gt:1000,$lt:3000}});
    console.log(puntoBII);

    console.log("------------------------------------");
    console.log("5.biii) Listar los productos con precio mayor a 3000 pesos.");
    const puntoBIII = await products.find({price:{$gt:3000}});
    console.log(puntoBIII);

    console.log("------------------------------------");
    console.log("5.biv) Realizar una consulta que traiga sólo el nombre del tercer producto más barato.");
    const puntoBIV = await products.find({},{title:1,_id:0}).sort({price:1}).limit(1).skip(2);
    console.log(puntoBIV);

    console.log("------------------------------------");
    console.log("5.c) Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.");
    const puntoC = await products.updateMany({},{$set:{stock:100}})
    console.log(puntoC);

    console.log("------------------------------------");
    console.log("5.d) Cambiar el stock a cero de los productos con precios mayores a 4000 pesos.");
    const puntoD = await products.updateMany({price:{$gt:4000}},{$set:{stock:0}})
    console.log(puntoD);

    console.log("------------------------------------");
    console.log("5.e) Borrar los productos con precio menor a 1000 pesos ");
    const puntoE = await products.deleteMany({price:{$lt:1000}})
    console.log(puntoE);

  } catch (error) {
    console.log(error);
  }
};

script();
