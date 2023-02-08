import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Wallet} from './wallet.model';
import {Http} from '../../shared/http';
import {LoggedUserService} from '../../users/shared/logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl: string = 'http://localhost:8080/wallets';

  constructor(
    private http: HttpClient
  ) {
  }

  static getWalletId(): number {
    return Number(Cookie.get('walletId'));
  }

  static setWalletId(id: string): void {
    Cookie.set('walletId', id);
  }

  static isWalletAdded(): boolean {
    return WalletService.getWalletId() > 0;
  }

  static getWalletForCurrentUser(wallets: Wallet[]): Wallet {
    for (const wallet of wallets) {
      if (wallet.userId === LoggedUserService.getUserId()) {
        return wallet;
      }
    }

    return undefined;
  }

  getWallets(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(this.apiUrl);
  }

  getWallet(id: number): Observable<Wallet> {
    return this.http.get<Wallet>(`${this.apiUrl}/${id}`);
  }

  saveWallet(wallet: Wallet): Observable<Wallet> {
    return this.http.post<Wallet>(
      this.apiUrl,
      wallet,
      Http.getHttpOptions()
    );
  }

  updateWallet(wallet: Wallet): Observable<Wallet> {
    return this.http.put<Wallet>(
      `${this.apiUrl}/${wallet.id}`,
      wallet,
      Http.getHttpOptions()
    );
  }

  saveWalletForCurrentUser(): void {
    const wallet = new Wallet();

    this.getWallets().subscribe(
      (wallets: Wallet[]) => wallet.id = (wallets.length as number) + 1
    );

    wallet.amountOfMoney = 1000000;
    wallet.number = '1234567890';
    wallet.userId = LoggedUserService.getUserId();

    this.saveWallet(wallet).subscribe();
  }
}
