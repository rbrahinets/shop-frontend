export class Cart {
  constructor(
    private _id?: number,
    private _totalCost?: number,
    private _userId?: number
  ) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get totalCost(): number {
    return this._totalCost;
  }

  set totalCost(value: number) {
    this._totalCost = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }
}
