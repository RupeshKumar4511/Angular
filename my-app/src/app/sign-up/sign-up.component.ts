import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

    username:string= "";
    email:string='';
    password:string='';

    handleSubmit(event:Event){
      event.preventDefault();
      try{

      
      if(this.username && this.email && this.password){
        

        alert("Form Submitted Successfully");
      }else{

        return alert('Fill all the required fields');

        
      }
    }catch(error){
         alert('Fill valid data in all fields');
    }
      
      
    }
}
