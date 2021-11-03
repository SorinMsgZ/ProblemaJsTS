export class Item {
  name: string;
  readonly type: string;
  static baseParam = 13;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
}
