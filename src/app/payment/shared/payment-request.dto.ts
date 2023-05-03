export class PaymentRequest {
  amount: number;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;

  constructor(
    amount: number,
    cardNumber: string,
    cardExpiry: string,
    cardCvc: string
  ) {
    this.amount = amount;
    this.cardNumber = cardNumber;
    this.cardExpiry = cardExpiry;
    this.cardCvc = cardCvc;
  }
}
