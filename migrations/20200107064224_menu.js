exports.up = function(knex) {
  return knex.schema.createTable('menu', menu => {
    menu.increments();

    menu
      .integer('truck_id')
      .notNullable()
      .references('id')
      .inTable('trucks')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    menu
      .string('name')
      .notNullable();

    menu.float('price').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menu');
};