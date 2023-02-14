export class ProductsGroupsDto {
  constructor(
    private _product: string,
    private _number: number
  ) {
  }

  get product(): string {
    return this._product;
  }

  set product(value: string) {
    this._product = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }
}
