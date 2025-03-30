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
    email="";
    handleButtonClick(event:Event){
      // alert(`Button is clicked${(event.target as HTMLInputElement).value}`)
      alert(`Button is clicked${event.type }`)
    }

    getEmail(emailValue:string){
      this.email = emailValue; 
    }
    
    setEmail(){
      this.email = "default@gmail.com"; 
    }
    
}
