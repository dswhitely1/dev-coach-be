exports.up = function(knex) {
  return knex.schema.createTable('appointment_topics', table => {
    table.increments();
    table.string('appointment_topic');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('appointment_topics');
};