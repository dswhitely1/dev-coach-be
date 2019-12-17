exports.up = function(knex) {
  return knex.schema.createTable('interviewees_table', table => {
    table.increments();
    table
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users_table');
    table.string('avatar_url');
    table.integer('interviewee_experience_level').notNullable();
    table.integer('interviewee_confidence_level').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('interviewees_table');
};
