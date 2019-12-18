exports.up = function(knex) {
  return knex.schema.createTable('coaches', table => {
    table.increments();
    table
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users');
    table.string('avatar_url', 128).notNullable();
    table.integer('years_experience').notNullable();
    table.integer('skill_level').notNullable();
    table.string('description', 400);
    table.float('rating');
    table.float('hourly_rate');
    table.string('contact_url', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('coaches');
};
