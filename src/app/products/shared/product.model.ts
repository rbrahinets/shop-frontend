export class Product {
  constructor(
    private _id?: number,
    private _name?: string,
    private _describe?: string,
    private _price?: number,
    private _barcode?: string,
    private _inStock?: boolean,
    private _image?: string
  ) {
  }

  get id(): number {
    return this._id;
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

  get inStock(): boolean {
    return this._inStock;
  }

  get image(): string {
    return this._image;
  }
}
