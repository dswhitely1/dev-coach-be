exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('first_name', 128).notNullable();
    table.string('last_name', 128).notNullable();
    table.string('email', 128).notNullable().unique();
    table.string('password', 128).notNullable();
    table.string('avatar_url', 256).defaultTo('');
    table.string('github', 128).defaultTo(null);
    table.string('linkedin', 128).defaultTo(null);
    table.string('description', 400);
    table.integer('experience_level').notNullable();
    table.string('location');
    table.integer('rating');
    table.float('hourly_rate');
    table
      .integer('role_id')
      .defaultTo(null)
      .unsigned()
      .references('id')
      .inTable('user_roles');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
