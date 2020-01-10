exports.seed = function(knex) {
  return knex('trucks').insert([
    {
      operator_id: 1,
      name: "Gillette Thai",
      cuisine: 'thai',
      city: "Gillette"
    },
    {
      operator_id: 1,
      name: "Gillette Mexican",
      cuisine: 'mexican',
      city: "Gillette"
    },
    {
      operator_id: 2,
      name: "Casper Pizza",
      cuisine: 'pizza',
      city: "Casper"
    }
  ]);
};