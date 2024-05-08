class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password} abc`;
  }
}

const user = new User("Pema", "pema@777", 21);
console.log(user.encryptPassword());
