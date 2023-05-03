export class PaymentResponseDto {
  message: string;
  isSuccessfully: boolean;

  constructor(
    message: string,
    isSuccessfully: boolean
  ) {
    this.message = message;
    this.isSuccessfully = isSuccessfully;
  }
}
