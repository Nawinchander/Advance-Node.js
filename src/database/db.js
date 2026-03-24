class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  create(data) {
    return this.model.create(data);
  }

  findOne(filter) {
    return this.model.findOne(filter);
  }

  findAll() {
    return this.model.find();
  }
}

module.exports = BaseRepository;

/////

const BaseRepository = require("../../core/BaseRepository");

class UserRepository extends BaseRepository {}

module.exports = new UserRepository(User);

