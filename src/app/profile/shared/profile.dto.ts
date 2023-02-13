export class ProfileDto {
  constructor(
    private _firstName: string,
    private _lastName: string
  ) {
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }
}
