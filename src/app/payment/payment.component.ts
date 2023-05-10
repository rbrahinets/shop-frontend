import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {PaymentService} from './shared/payment.service';
import {ReportService} from './shared/report.service';
import {CartService} from '../cart/shared/cart.service';
import {ProductsCartService} from '../cart/shared/products-cart.service';
import {PaymentRequestDto} from './shared/payment-request.dto';
import {PaymentResponseDto} from './shared/payment-response.dto';
import {ReportDto} from './shared/report.dto';
import {PaymentValidator} from './shared/payment.validator';
import {Product} from '../products/shared/product.model';
import {Cart} from '../cart/shared/cart.model';
import {NavigationService} from '../shared/navigation.service';

@Component({
  selector: 'shop-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() products: Product[];
  @Input() priceAmount: number;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  private paymentRequest: PaymentRequestDto;

  constructor(
    private paymentService: PaymentService,
    private reportService: ReportService,
    private cartService: CartService,
    private productsCartsService: ProductsCartService,
    private navigation: NavigationService,
    private validator: PaymentValidator,
  ) {
  }

  ngOnInit(): void {
  }

  onPay(): void {
    this.paymentRequest = new PaymentRequestDto(
      this.priceAmount,
      this.cardNumber,
      this.cardExpiry,
      this.cardCvc
    );

    if (!this.isValidData()) {
      return;
    }

    this.payment();
  }

  private isValidData(): boolean {
    return this.validator.validate(
      this.paymentRequest
    );
  }

  private payment(): void {
    this.paymentService.payment(this.paymentRequest).subscribe(
      (response: PaymentResponseDto) => {
        console.log(response.message);

        if (response.message.includes('successfully')) {
          alert('Payment Processed Successfully!');
        } else {
          alert('Payment Processed Unsuccessfully!');
        }

        if (response.isSuccessfully) {
          this.resetCart();
        }
      }
    );
  }

  private resetCart(): void {
    this.cartService.findAll().subscribe(
      (carts: Cart[]) => {
        const cart: Cart = CartService.getCartForCurrentUser(carts);
        cart.priceAmount = 0;
        this.productsCartsService.deleteProductsFromCurrentCart();
        this.cartService.update(cart).subscribe(
          () => {
            this.reportService.downloadReport(
              new ReportDto(
                this.products,
                this.priceAmount
              )
            ).subscribe(
              (response: Blob) => {
                const date = new DatePipe('en-US');
                const formattedDate = date.transform(new Date(), 'yyyy-MM-dd_HH:mm:ss');
                const filename = `report_${formattedDate}.pdf`;
                this.reportService.saveReportAsFile(
                  response,
                  filename
                )
                  .subscribe(
                    () => this.navigation.goToEndpoint('cart', true)
                  );
              },
              (error: any) => console.error('Error downloading report:', error)
            );
          }
        );
      }
    );
  }
}
