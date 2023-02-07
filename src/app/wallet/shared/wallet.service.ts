import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wallet} from './wallet.model';
import {User} from '../../users/shared/user.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl: string = 'http://localhost:8080/wallets';

  constructor(
    private http: HttpClient
  ) {
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

  saveWalletForUser(user: User): void {
    const wallet = new Wallet();

    this.getWallets().subscribe(
      (wallets: Wallet[]) => wallet.id = (wallets.length as number) + 1
    );

    wallet.amountOfMoney = 0;
    wallet.number = '';
    wallet.userId = user.id;

    this.saveWallet(wallet).subscribe();
  }
}
