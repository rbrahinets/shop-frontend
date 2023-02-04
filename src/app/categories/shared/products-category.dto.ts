export class ProductsCategoryDto {
  constructor(
    private _productId: number,
    private _categoryId: number
  ) {
  }

  get productId(): number {
    return this._productId;
  }

  get categoryId(): number {
    return this._categoryId;
  }
}
