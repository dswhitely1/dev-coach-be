exports.up = function(knex) {
  return knex.schema.createTable('students', table => {
    table.increments();
    table
      .integer('user_id')
      .unsigned()
      .unique()
      .notNullable()
      .references('id')
      .inTable('users');
    table.integer('experience_level').notNullable();
    table.integer('confidence_level').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('students');
};
