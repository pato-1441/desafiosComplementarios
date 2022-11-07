const createProductsTable = () => {
  knex.schema.createTable('products', (table)=>{
    table.increments('id'),
    table.string('title'),
    table.integer('price'),
    table.string('thumbnail')
  }).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(`ERROR: ${err.sqlMessage}`);
  });
}

export default createProductsTable;