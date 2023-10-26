import { Component } from '@angular/core';
import {faClock} from '@fortawesome/free-regular-svg-icons'
import {faCube} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faUserGroup} from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent {

  // variables

  timeVal : number = 30;
  fixedTime: string  = '';
  dateNum: string = '';

  // icons
  watchIcon = faClock;
  cubeIcon = faCube;
  userIcon = faUser;
  usersIcon = faUserGroup;



    // fixed time functions
    increase()
    {
      this.timeVal += 15;
    }

    decrease()
    {
      if(this.timeVal > 0){
        this.timeVal -= 15;
      }

    }
}
