export class Wallet {
  constructor(
    private _id?: number,
    private _number?: string,
    private _amountOfMoney?: number,
    private _userId?: number
  ) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  set number(value: string) {
    this._number = value;
  }

  get amountOfMoney(): number {
    return this._amountOfMoney;
  }

  set amountOfMoney(value: number) {
    this._amountOfMoney = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }
}
