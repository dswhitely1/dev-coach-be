exports.up = function(knex) {
  return knex.schema.createTable('coaches', table => {
    table.increments();
    table
      .integer('user_id')
      .unsigned()
      .unique()
      .notNullable()
      .references('id')
      .inTable('users');
    table.integer('experience_level').notNullable();
    table.integer('skill_level').notNullable();
    table.string('description', 400);
    table.integer('rating');
    table.float('hourly_rate');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('coaches');
};
