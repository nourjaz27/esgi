const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  PROCESS.env .DATABASE_NAME, // Database name
  PROCESS.env .DATABASE_USERNAME, // User
  PROCESS.env .DATABASE_PASSWORD, // Password
  {
    host: process.env.DATABASE_HOST , // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
