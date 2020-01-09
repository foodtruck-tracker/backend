// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.sqlite3'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || {filename: "./data/dev.sqlite3"},
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }

};
