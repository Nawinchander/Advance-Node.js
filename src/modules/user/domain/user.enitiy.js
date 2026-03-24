class UserEntity {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }

  validate() {
    if (!this.email.includes("@")) {
      throw new Error("Invalid Email");
    }
  }
}

module.exports = UserEntity;



