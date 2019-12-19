exports.up = function(knex) {
  return knex.schema.createTable('students', table => {
    table.increments();
    table
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users');
    table.string('avatar_url');
    table.integer('experience_level').notNullable();
    table.integer('confidence_level').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('students');
};
