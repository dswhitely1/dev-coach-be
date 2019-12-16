exports.up = function(knex) {
  return knex.schema.createTable('interviewers', table => {
    table.increments();
    table
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users');
    table.string('avatar_url', 128).notNullable();
    table.integer('interviewer_experience_level').notNullable();
    table.integer('interviewer_skill_level').notNullable();
    table.string('description', 400);
    table.integer('rating');
    table.float('hourly_rate')
  });
};

exports.down = function(knex) {};
