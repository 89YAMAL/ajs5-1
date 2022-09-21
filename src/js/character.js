export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
