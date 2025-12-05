// userService.js
class UserService {
  constructor() {
    this.users = [];
  }

  addUser(name) {
    if (!name) return;
    this.users.push(name);
  }

  removeUser(name) {
    this.users = this.users.filter(u => u !== name);
  }

  findUser(prefix) {
    return this.users.find(u => u.startsWith(prefix));
  }

  count() { return this.users.length; }
}

module.exports = UserService;
