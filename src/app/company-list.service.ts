import { Injectable } from '@angular/core';

@Injectable()
export class CompanyListService {
    getCompanies(): Array<string> {
        return [
            'Epam',
            'Google',
            'Yandex',
            'Nokia',
            'LG',
            'SoftServe'
        ];
    }
}
