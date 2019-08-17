import Sequelize from 'sequelize';

const sequelize = new Sequelize( process.env.TEST_URL ||
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    dialect: "postgres",
    username: process.env.POSTGRES_USER_NAME,
    password: process.env.POSTGRES_PASSWORD,
    database: "docker",
    host: process.env.DB_HOST || "localhost",
    define: {
      underscored: true
    }
  }
);

const models = {
    User: sequelize.import('./user'),
}

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
