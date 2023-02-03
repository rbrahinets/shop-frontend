export class ConfirmPasswordValidator {
  static validate(
    password: string,
    confirmPassword: string
  ): boolean {
    return ConfirmPasswordValidator
      .validateConfirmPassword(
        password,
        confirmPassword
      );
  }

  private static validateConfirmPassword(
    password: string,
    confirmPassword: string
  ): boolean {
    if (
      !confirmPassword
      || password !== confirmPassword
    ) {
      alert('Your passwords are different');
      return false;
    }

    return true;
  }
}
