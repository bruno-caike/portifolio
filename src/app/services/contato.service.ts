import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  constructor(private httpClient: HttpClient) {}

  getContato(): Observable<any> {
    return this.httpClient.get<any>('https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail', {}).pipe();
  }
}
