module.exports = module.exports.default = Object.freeze({
  default: process.env.DB_CONNECTION || 'mongodb',

  connections: {
    mongodb: {
      uri: process.env.MONGODB_URI?.toString().replace('db-name', process.env.DB_DATABASE || 'forge'),
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || '27017',
      database: process.env.DB_DATABASE || 'forge',
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      options: {
        autoIndex: false,
        maxPoolSize: 50,
        socketTimeoutMS: 1000,
      },
    },
  },
})
