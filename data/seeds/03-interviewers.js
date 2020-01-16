exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('coaches')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('coaches').insert([
        {
          user_id: 1,
          experience_level: 2,
          skill_level: 2,
          description:
            'Jayne worked as a singing teacher for 9 years and is now studying with Lambda School',
          hourly_rate: 80,
          rating: 5,
        },
        {
          user_id: 2,
          experience_level: 3,
          skill_level: 2,
          description:
            'Liam is now studying in Lambda School, Hello there! I am a full-stack web developer with QualityHub on their Core and InterviewQ teams. I am happy to coach you toward career success!',
          hourly_rate: 70,
          rating: 5,
        },
        {
          user_id: 3,
          experience_level: 2,
          skill_level: 1,
          description:
            'Hello there! I am a full-stack web developer with QualityHub on their Core and InterviewQ teams. I am happy to coach you toward career success!',
          hourly_rate: 50,
          rating: 4,
        },
        {
          user_id: 6,
          experience_level: 3,
          skill_level: 3,
          description:
            'I am working as a singing teacher for 9 years and is now studying with Lambda School',
          hourly_rate: 90,
          rating: 4,
        },
        {
          user_id: 7,
          experience_level: 2,
          skill_level: 2,
          description:
            'I am now studying in Lambda School, Hello there! I am a full-stack web developer with QualityHub on their Core and InterviewQ teams. I am happy to coach you toward career success!',
          hourly_rate: 30,
          rating: 4,
        },
        {
          user_id: 8,
          experience_level: 1,
          skill_level: 1,
          description:
            'Hello there! I am a full-stack web developer with QualityHub on their Core and InterviewQ teams. I am happy to coach you toward career success!',
          hourly_rate: 44,
          rating: 4,
        },
        {
          user_id: 9,
          experience_level: 2,
          skill_level: 1,
          description:
            'I am working as a singing teacher for 9 years and is now studying with Lambda School',
          hourly_rate: 49,
        },
        {
          user_id: 10,
          experience_level: 3,
          skill_level: 1,
          description:
            'I am now studying in Lambda School, Hello there! I am a full-stack web developer with QualityHub on their Core and InterviewQ teams. I am happy to coach you toward career success!',
          hourly_rate: 44,
          rating: 4,
        },
        {
          user_id: 11,
          experience_level: 1,
          skill_level: 2,
          description:
            'Hello there! I am a full-stack web developer with QualityHub on their Core and InterviewQ teams. I am happy to coach you toward career success!',
          hourly_rate: 20,
        },
        {
          user_id: 12,
          experience_level: 3,
          skill_level: 1,
          description:
            'I working as a singing teacher for 9 years and is now studying with Lambda School',
          hourly_rate: 50,
          rating: 4,
        },
        {
          user_id: 13,
          experience_level: 1,
          skill_level: 2,
          description:
            'I am now studying in Lambda School, Hello there! I am a full-stack web developer with QualityHub on their Core and InterviewQ teams. I am happy to coach you toward career success!',
          hourly_rate: 80,
        },
      ]);
    });
};
