module.exports = {
    db: {
        dialect: 'mysql',
        host: 'localhost',
        username: 'root',
        password: '',
        database: 'mobile_app',
        delete: true,
        logging: false,
        dialectOptions: {
          useUTC: true
        },
        timezone: 'UTC'
      }
}