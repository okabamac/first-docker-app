export default (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: {
        type: DataTypes.STRING,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: DataTypes.STRING,
  });

  User.associate = function(models) {
    // models.User.hasMany(models.Task);
  };

  return User;
};
