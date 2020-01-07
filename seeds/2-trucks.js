exports.seed = function(knex) {
  return knex('trucks').insert([
    {
      operator_id: 1,
      cuisine: 'thai',
      current_latitude: '5',
      current_longitude: '5'
    },
    {
      operator_id: 1,
      cuisine: 'mexican',
      current_latitude: '1',
      current_longitude: '1'
    },
    {
      operator_id: 2,
      cuisine: 'pizza',
      current_latitude: '2',
      current_longitude: '5'
    }
  ]);
};