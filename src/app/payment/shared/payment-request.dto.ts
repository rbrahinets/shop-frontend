export class PaymentRequest {
  priceAmount: number;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;

  constructor(
    priceAmount: number,
    cardNumber: string,
    cardExpiry: string,
    cardCvc: string
  ) {
    this.priceAmount = priceAmount;
    this.cardNumber = cardNumber;
    this.cardExpiry = cardExpiry;
    this.cardCvc = cardCvc;
  }
}
