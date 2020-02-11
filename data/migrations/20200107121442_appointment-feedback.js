exports.up = function(knex) {
  return knex.schema.createTable('appointment_feedback', table => {
    table.increments();
    table.text('feedback', 5000).notNullable();
    table.integer('rating').notNullable();
    table
      .integer('appointment_id')
      .unsigned()
      .references('id')
      .inTable('appointments');
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('appointment_feedback');
};