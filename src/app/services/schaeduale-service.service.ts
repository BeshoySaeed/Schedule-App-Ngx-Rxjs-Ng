import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class SchaedualeServiceService {
  constructor(private translateService: TranslateService) {}

  days: { name: string; timeManagement: [] }[] = [
    { name: 'common.saturday', timeManagement: [] },
    { name: 'common.sunday', timeManagement: [] },
    { name: 'common.monday', timeManagement: [] },
    { name: 'common.tuesday', timeManagement: [] },
    { name: 'common.wednesday', timeManagement: [] },
    { name: 'common.thursday', timeManagement: [] },
    { name: 'common.friday', timeManagement: [] },
  ];
}
