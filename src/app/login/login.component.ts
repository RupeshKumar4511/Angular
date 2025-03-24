import { Component, input } from '@angular/core';

@Component({
  selector: 'login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
    fullname="Jack Daniel";
    rowValue= 3;
    handleButtonClick(){
      alert(`Button is clicked`)
    }

    
}
