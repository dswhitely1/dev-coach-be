exports.up = function(knex) {
  return knex.schema.createTable('appointment_feedback', table => {
    table.increments();
    table.string('feedback', 1000).notNullable();
    table.integer('rating').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('appointment_feedback');
};
