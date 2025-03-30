import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sign-up',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

    emailId:string= "";
    handleSubmit(event:Event){
      event.preventDefault();
      alert("Form Submitted Successfully");
    }
}
