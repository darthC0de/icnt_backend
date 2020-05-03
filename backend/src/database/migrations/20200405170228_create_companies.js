
exports.up = function(knex) {
  return knex.schema.createTable('company', (table) =>{
      table.string('company_id').primary();
      table.string('name').notNullable();
      table.string('login').notNullable();
      table.string('password').notNullable();
      table.string('whatsapp').notNullable();
      table.string('email').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('company');
};
