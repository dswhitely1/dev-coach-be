exports.up = function(knex) {
  return knex.schema.createTable('user_roles', table => {
    table.increments();
    table.string('role_name', 20).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_roles');
};
