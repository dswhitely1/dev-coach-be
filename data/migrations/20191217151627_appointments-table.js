exports.up = function(knex) {
  return knex.schema.createTable('appointments', table => {
    table.increments();
    table
      .integer('coach_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('coaches');
    table
      .integer('student_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('students');
    table.string('appointment_datetime');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('appointments');
};
