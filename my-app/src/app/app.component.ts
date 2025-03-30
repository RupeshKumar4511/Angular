import { Component } from '@angular/core';
//This imports the Component class from @angular/core package, which is required to define a component in Angular.

import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CounterComponent } from './counter/counter.component';


@Component({
  selector: 'app-root', // custom tag
  imports: [RouterOutlet,LoginComponent,ProfileComponent,SignUpComponent,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// The @Component decorator is used to define metadata for the component, such as its selector, template, styles, and more. It essentially configures the component and tells Angular how it should be processed.

export class AppComponent {
  title:string|number = 'my-app';
  name = "David";
  other:any= 23;

  myFunction(){
    let a = 10 ;
    // this.title=13;
    this.other = true;
    
    
  }

  sum(a:number,b:number):number{
    return a +b ;
  }
}
