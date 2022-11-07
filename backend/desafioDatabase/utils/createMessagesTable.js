const createMessagesTable = () => {
  knex.schema.createTable('messages', (table)=>{
    table.increments('id'),
    table.string('message'),
    table.string('createdAt')
  }).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(`ERROR: ${err.sqlMessage}`);
  });
}

export default createMessagesTable;