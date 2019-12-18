exports.up = function(knex) {
  return knex.schema.createTable('interviewers_table', table => {
    table.increments();
    table
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users_table');
    table.string('avatar_url', 128).notNullable();
    table.integer('interviewer_experience_level').notNullable();
    table.integer('interviewer_skill_level').notNullable();
    table.string('description', 400);
    table.float('rating');
    table.float('hourly_rate');
    table.string('contact_url', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('interviewers_table');
};
