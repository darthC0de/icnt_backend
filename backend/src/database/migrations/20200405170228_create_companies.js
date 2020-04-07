
exports.up = function(knex) {
  return knex.schema.createTable('company', (table) =>{
      table.increments('company_id');
      table.string('name').notNullable();
      table.string('login').notNullable();
      table.string('password').notNullable();
      table.string('phone').notNullable();
      table.string('whatsapp').notNullable();
      table.string('email').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('company');
};
