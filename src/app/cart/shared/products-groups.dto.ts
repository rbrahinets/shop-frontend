export class ProductsGroupsDto {
  constructor(
    private _product: string,
    private _price: number,
    private _number: number
  ) {
  }

  get product(): string {
    return this._product;
  }

  set product(value: string) {
    this._product = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }
}
