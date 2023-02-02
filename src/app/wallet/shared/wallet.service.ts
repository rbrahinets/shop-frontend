import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wallet} from './wallet.model';
import {User} from '../../users/shared/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = 'http://localhost:8080/wallets';

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
    return this.http.post<Wallet>(this.apiUrl, wallet, httpOptions);
  }

  updateWallet(wallet: Wallet): Observable<Wallet> {
    const url = `${this.apiUrl}/${wallet.id}`;
    return this.http.put<Wallet>(url, wallet, httpOptions);
  }

  saveWalletForUser(user: User): void {
    const wallet = new Wallet();

    this.getWallets().subscribe(
      (wallets) => wallet.id = (wallets.length as number) + 1
    );

    wallet.amountOfMoney = 0;
    wallet.number = '';
    wallet.userId = user.id;

    this.saveWallet(wallet).subscribe();
  }
}
