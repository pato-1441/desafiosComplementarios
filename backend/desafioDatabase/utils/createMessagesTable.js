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

const createMessagesTable = () => {
  knex.schema.createTable('messages', (table)=>{
    table.increments('id'),
    table.string('message'),
    table.string('createdAt')
  }).then((result) => {
    console.log('Table: "messages", created successfully.');
  }).catch((err) => {
    console.log(`ERROR: ${err.sqlMessage}.`);
  });
}

module.exports = createMessagesTable;