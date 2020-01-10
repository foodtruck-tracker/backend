exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: 'aoperator1',
      password: 'op1pass',
      role: 1,
      city: "Gillette"
    },
    {
      username: 'boperator2',
      password: 'op2pass',
      role: 1,
      city: "Casper"
    },
    {
      username: 'adiner1',
      password: 'diner1pass',
      role: 2,
      city: "Sheridan"
    }
  ]);
};
