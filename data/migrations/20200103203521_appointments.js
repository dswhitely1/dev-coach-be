exports.up = function(knex) {
  return knex.schema.createTable('appointments', table => {
    table.increments();
    table.string('appointment_datetime', 100);
    table.boolean('canceled').defaultTo(false);
    table.boolean('finished').defaultTo(false);
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
    table
      .integer('topic_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('appointment_topics');
    table
      .integer('length_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('appointment_length');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('appointments');
};