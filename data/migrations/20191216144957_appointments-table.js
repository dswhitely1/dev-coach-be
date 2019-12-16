exports.up = function(knex) {
  return knex.schema.createTable('appointments', table => {
    table.increments();
    table
      .integer('interviewer_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('interviewers');
    table
      .integer('interviewee_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('interviewees');
    table.string('interview_appointment_datetime');
    table.timestamp('interview_created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('appointments');
};
