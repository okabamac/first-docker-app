import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.TEST_DB || 'docker', 'postgres', 'postgres',{
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    define: {
        underscored: true,
    }
});

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
