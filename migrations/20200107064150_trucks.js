exports.up = function(knex) {
  return knex.schema.createTable('trucks', trucks => {
    trucks.increments();

    trucks
      .integer('operator_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    trucks.string('name').notNullable();
    trucks.string('description');
    trucks.string('cuisine').notNullable();
    trucks.string('imageUrl');
    trucks.string('city');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('trucks');
};