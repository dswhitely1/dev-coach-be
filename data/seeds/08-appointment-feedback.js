exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointment_feedback')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('appointment_feedback').insert([
        {
          feedback: `Overall you did a decent job but could still use a bit of extra work to 
get better when it comes to handling the clearInterval properly, using higher order components,
and being able to figure out the logic for coding challenge type questions better. I was on the
border with whether this was a Yes/No, but I think if this was a real interview, I would have 
suggested a followup interview since it was good but not excellent yet. Overall though
communication was good and I enjoyed chatting with him in the end as well. Great job Jayne!`,
          rating: 4,
          user_id: 1,
          appointment_id: 1,
        },
        {
          feedback: `great job Bob!!!`,
          rating: 4,
          user_id: 4,
          appointment_id: 1,
        },
        {
          feedback: `Overall you did a decent job but could still use a bit of extra work to
get better when it comes to handling the clearInterval properly, using higher order components,
and being able to figure out the logic for coding challenge type questions better. I was on the
border with whether this was a Yes/No, but I think if this was a real interview, I would have 
suggested a followup interview since it was good but not excellent yet. Overall though
communication was good and I enjoyed chatting with him in the end as well. SUBERB FUNMI!!!`,
          rating: 3,
          user_id: 3,
          appointment_id: 2,
        },
        {
          feedback: `Good try Liam. For your next interview, make sure to revise data structures and algorithms and practice pair programming!`,
          rating: 1,
          user_id: 2,
          appointment_id: 3,
        },
        {
          feedback: `Great job, you did amazing during your Frontend Interview BOB!!!.`,
          rating: 5,
          appointment_id: 4,
          user_id: 4,
        },
        {
          feedback: `Fantastic job FUNMI, I would only like that you learn more about Time and Space Complexity`,
          rating: 3,
          appointment_id: 5,
          user_id: 3,
        },
        {
          feedback: `Great work Bob! You did an amazing job. I don't have any improvements for you`,
          rating: 5,
          appointment_id: 6,
          user_id: 4,
        },
        {
          feedback: `Great work Liam! Strong improvements from your last session. I recommend revising JS closures and ES6 syntax`,
          rating: 3,
          appointment_id: 6,
          user_id: 2,
        },
      ]);
    });
};
