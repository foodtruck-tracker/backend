exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: 'operator1',
      password: 'op1pass',
      role: 1,
      latitude: '5',
      longitude: '1'
    },
    {
      username: 'operator2',
      password: 'op2pass',
      role: 1,
      latitude: '5',
      longitude: '1'
    },
    {
      username: 'diner1',
      password: 'diner1pass',
      role: 2,
      latitude: '5',
      longitude: '1'
    }
  ]);
};
