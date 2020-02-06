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
            'Liam is currently studying full-stack web development at Lambda School. He is especially interested in GraphQL, MongoDB, and Javascript and is determined to finish Labs with more git commits than Dom.',
          hourly_rate: 100,
          rating: 5,
        },
        {
          user_id: 3,
          experience_level: 2,
          skill_level: 1,
          description:
            'Funmi is currently studying full stack web development at Lambda School. She is interested in React, Express, and Redux.',
          hourly_rate: 100,
          rating: 5,
        },
        {
          user_id: 6,
          experience_level: 3,
          skill_level: 3,
          description: `Hi, My name is Oladimeji. I'm a software engineer currently studying CS with Lambda School and I'm all about programming. When not working, I find time to mentor on dev-coach and it will be my pleasure to help you land that dream job.`,
          hourly_rate: 100,
          rating: 5,
        },
        {
          user_id: 7,
          experience_level: 4,
          skill_level: 4,
          description:
            "Hi, I am Ben, a full-stack developer from Berlin. I am proficient in Javascript, React, NodeJS, Express, and Python. After working in teams, researching, overcoming challenges, architecting scalable systems, I've developed strong creative problem-solving, communication, and organizational skills.",
          hourly_rate: 50,
          rating: 5,
        },
        {
          user_id: 8,
          experience_level: 3,
          skill_level: 3,
          description:
            "I'm a full stack web developer hoping to share my skills in React, Redux, Node, and Express. I am happy to coach you toward career success!",
          hourly_rate: 44,
          rating: 4,
        },
        {
          user_id: 9,
          experience_level: 2,
          skill_level: 1,
          description:
            "Hi, I'm an experienced software engineer looking to share my knowledge of algorithms and data structures. Please get in touch to find out more.",
          hourly_rate: 49,
        },
        {
          user_id: 10,
          experience_level: 1,
          skill_level: 4,
          description:
            'Hello there! I am a full-stack web developer with DevCoach. Let me know how I can help you get a job in development',
          hourly_rate: 44,
          rating: 4,
        },
        {
          user_id: 11,
          experience_level: 5,
          skill_level: 2,
          description:
            "Hi there, I'm an inexperienced web developer but have watched several tutorials on jQuery, PHP, and HTML. Would love to coach you towards career success",
          hourly_rate: 20,
        },
        {
          user_id: 12,
          experience_level: 3,
          skill_level: 1,
          description:
            'I am currently studying full stack web development at Lambda School and in my spare time I enjoy fly fishing, mountain biking, and practicing the guitar',
          hourly_rate: 50,
          rating: 4,
        },
        {
          user_id: 13,
          experience_level: 4,
          skill_level: 4,
          description: 'I code, therefore I am - myself, 2020',
          hourly_rate: 100,
        },
      ]);
    });
};
