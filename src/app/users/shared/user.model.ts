export class User {
  constructor(
    private _id?: number,
    private _firstName?: string,
    private _lastName?: string,
    private _email?: string,
    private _phone?: string,
    private _password?: string
  ) {
  }

  get id(): number {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }

  get password(): string {
    return this._password;
  }
}
