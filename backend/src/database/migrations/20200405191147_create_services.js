
exports.up = function(knex) {
    return knex.schema.createTable('services', (table)=>{
        table.increments('service_id');
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('cid').notNullable();
        table.foreign('cid').references('id').inTable('company');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('services');
};
