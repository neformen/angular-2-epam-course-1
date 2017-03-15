import { Component, OnInit } from '@angular/core';
import { CompanyListService } from './company-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  description = 'Some description of this project';
  date = new Date();
  listOfStudents = [
    'Vasyl',
    'Taras',
    'Alex',
    'Oleg',
    'Uliana',
    'Viktoria',
    'Iruna'
  ];
  isVisible: boolean;
  companies: Array<string>;

  constructor(public companyService: CompanyListService) {}

  deleteCompany(company: string): void {
    const index = this.companies.indexOf(company);

    if (index !== -1) {
      this.companies.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.companies = this.companyService.getCompanies();
  }
}
