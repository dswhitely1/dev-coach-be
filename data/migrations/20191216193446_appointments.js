
exports.up = function(knex) {
  return knex.schema.createTable('appointments_table', table => {
    table.increments();
    table
      .integer('interviewer_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('interviewers_table');
    table
      .integer('interviewee_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('interviewees_table');
    table.string('interview_appointment_datetime');
    table.timestamp('interview_created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('appointments');
};
