import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  result:number = 0;

  handleButton(op:string){
    if(op=='incre'){
      this.result = this.result + 1;
    }else if(op=='decre'){
      this.result = this.result - 1;
    }else if(op=='incre'){
      this.result = 0;
    }
  }
}
