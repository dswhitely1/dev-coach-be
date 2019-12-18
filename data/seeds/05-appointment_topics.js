
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointment_topics')
  .del()
  .then(function() {
    // Inserts seed entries
    return knex('appointment_topics').insert([
      { id: 1, appointment_topic: "Frontend" },
      { id: 2, appointment_topic: "Backend" },
      { id: 3, appointment_topic: "Algortihms / Data Structes" },
      { id: 4, appointment_topic: "Behavorial Interview" },
      { id: 5, appointment_topic: "System Design" },
      { id: 6, appointment_topic: "React" },
    ]);
  });
};