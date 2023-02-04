export class UserRoleDto {
  constructor(
    private _id?: number,
    private _userId?: number,
    private _roleId?: number
  ) {
  }

  set id(value: number) {
    this._id = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get roleId(): number {
    return this._roleId;
  }

  set roleId(value: number) {
    this._roleId = value;
  }
}
