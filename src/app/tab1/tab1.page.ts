import { Component } from '@angular/core';
import { DataSummary } from '../model/DataSummary';
import { Country } from '../model/Country';
import { CovidService } from '../service/covid.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  list: DataSummary;
  showData: Promise<boolean>
  selectedCountry: Country;

  constructor(public service: CovidService, public router: Router)  {


  }

  ngOnInit() {

    this.service.getSummary().then(result => {
      
      this.list = result;
      this.showData = Promise.resolve(true);

      console.log(this.filterByCountry("france"));

    })
    .catch(e => console.log(e));

  
  }

  filterByCountry(event: any)  {
    let country = event.target.value;
    this.selectedCountry = this.list.Countries.filter(obj => obj.Slug == country)[0];
  }




}
