// external
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  constructor(private http: HttpClient) {}

  getTableData() {
    return this.http.get(
      'https://raw.githubusercontent.com/PerxTech/angular-interview/master/example.json',
    );
  }
}
