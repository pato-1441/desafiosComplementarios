const knexOptions = {
  client: "sqlite3",
  connection: { filename: "./db/ecommerce.sqlite" },
  useNullAsDefault: true,
};
const knex = require("knex")(knexOptions);

const createMessagesTable = () => {
  knex.schema
    .createTable("messages", (table) => {
      table.increments("id"),
        table.string("message"),
        table.string("createdAt");
    })
    .then((result) => {
      console.log('Table: "messages", created successfully.');
    })
    .catch((err) => {
      console.log(`ERROR: ${err.sqlMessage}.`);
    });
};

module.exports = createMessagesTable;
