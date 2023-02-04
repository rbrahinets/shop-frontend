export class SignInDto {
  constructor(
    private _login: string,
    private _password: string
  ) {
  }

  get login(): string {
    return this._login;
  }

  get password(): string {
    return this._password;
  }
}
