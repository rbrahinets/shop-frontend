export class ProductDto {
  constructor(
    private _name: string,
    private _describe: string,
    private _price: number,
    private _barcode: string,
    private _category: string,
  ) {
  }

  get name(): string {
    return this._name;
  }

  get describe(): string {
    return this._describe;
  }

  get price(): number {
    return this._price;
  }

  get barcode(): string {
    return this._barcode;
  }

  get category(): string {
    return this._category;
  }
}
