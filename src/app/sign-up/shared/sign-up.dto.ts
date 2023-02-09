export class SignUpDto {
  constructor(
    private _firstName: string,
    private _lastName: string,
    private _email: string,
    private _phone: string,
    private _password: string,
    private _confirmPassword: string,
    private _adminNumber: string
  ) {
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

  get confirmPassword(): string {
    return this._confirmPassword;
  }

  get adminNumber(): string {
    return this._adminNumber;
  }
}
