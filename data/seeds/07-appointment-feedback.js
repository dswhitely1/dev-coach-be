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
          communication was good and I enjoyed chatting with him in the end as well.`,
          rating: 4,
        },
        {
          feedback: `Overall you did a decent job but could still use a bit of extra work to
          get better when it comes to handling the clearInterval properly, using higher order components,
          and being able to figure out the logic for coding challenge type questions better. I was on the
          border with whether this was a Yes/No, but I think if this was a real interview, I would have 
          suggested a followup interview since it was good but not excellent yet. Overall though
          communication was good and I enjoyed chatting with him in the end as well.`,
          rating: 3,
        },
      ]);
    });
};
