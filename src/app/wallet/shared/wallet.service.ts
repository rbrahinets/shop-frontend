import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wallet} from './wallet.model';

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

  getWalletById(id: number): Observable<Wallet> {
    return this.http.get<Wallet>(`${this.apiUrl}/${id}`);
  }

  updateWallet(wallet: Wallet): Observable<Wallet> {
    const url = `${this.apiUrl}/${wallet.id}`;
    return this.http.put<Wallet>(url, wallet, httpOptions);
  }
}
