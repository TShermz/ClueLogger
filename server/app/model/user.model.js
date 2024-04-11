function User(sequelize, Sequelize) {
  const User = sequelize.define("user", {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    admin: {
      type: Sequelize.BOOLEAN,
    },
    // token: {
    //   type: Sequelize.STRING
    // }
  });

  return User;
}

export default User;
