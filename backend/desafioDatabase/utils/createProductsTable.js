const knexOptions = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "desafiodb",
  },
};
const knex = require("knex")(knexOptions);

const createProductsTable = () => {
  knex.schema.createTable('products', (table)=>{
    table.increments('id'),
    table.string('title'),
    table.integer('price'),
    table.string('thumbnail')
  }).then((result) => {
    console.log('Table: "products", created successfully.');
  }).catch((err) => {
    console.log(`ERROR: ${err.sqlMessage}`);
  });
}

module.exports = createProductsTable;