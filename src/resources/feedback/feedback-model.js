const db = require('../../../data/dbConfig');

function getFeedback(user_id) {
  return db('appointment_feedback')
    .join(
      'appointments AS a',
      'a.id',
      '=',
      'appointment_feedback.appointment_id',
    )
    .join('appointment_topics AS at', 'at.id', '=', 'a.topic_id')
    .join('appointment_length AS al', 'al.id', '=', 'a.length_id')
    .join('users', function() {
      this.on('users.id', 'a.user_id_one').orOn(
        'users.id',
        'a.user_id_two',
      );
    })
    .where('appointment_feedback.user_id', '=', user_id)
    .whereNot('users.id', user_id)
    .select(
      'users.first_name',
      'users.last_name',
      'users.email',
      'users.id as user_id',
      'users.avatar_url',
      'users.experience_level',
      'a.id',
      'a.appointment_datetime',
      'a.canceled',
      'a.finished',
      'at.appointment_topic',
      'al.appointment_length',
      'appointment_feedback.feedback',
      'appointment_feedback.rating',
    );
}

module.exports = {
  getFeedback,
};
