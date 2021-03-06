exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users.string('username', 128).notNullable().unique();
    users.string('password', 128).notNullable();

    users.integer('role').notNullable();
    users.string('city');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};