exports.up = function(knex) {
  return knex.schema.createTable('appointment_length', table => {
    table.increments();
    table.string('length');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('appointment_length');
};
