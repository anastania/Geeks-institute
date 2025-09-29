const db = require("../config/db");

const User = {
  createUser: async (user, hashedPassword) => {
    return await db.transaction(async (trx) => {
      const [newUser] = await trx("users")
        .insert(user)
        .returning("*");

      await trx("hashpwd").insert({
        username: user.username,
        password: hashedPassword,
      });

      return newUser;
    });
  },

  getAll: () => db("users").select("*"),

  getById: (id) => db("users").where({ id }).first(),

  updateUser: (id, data) => db("users").where({ id }).update(data).returning("*"),

  getPasswordByUsername: (username) =>
    db("hashpwd").where({ username }).first(),
};

module.exports = User;
