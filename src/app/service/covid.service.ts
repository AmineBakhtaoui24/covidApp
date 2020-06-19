import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSummary } from '../model/DataSummary';


@Injectable({
  providedIn: 'root'
})
export class CovidService {
  TAG: 'CovidService';

  constructor(private http: HttpClient) {}

  getSummary():Promise<DataSummary> {
    console.log(`${this.TAG} getSummary`);
    const url: string = 'https://api.covid19api.com/summary';
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        let json: DataSummary = data as DataSummary;
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }


}
