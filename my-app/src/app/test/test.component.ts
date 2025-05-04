import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'test',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  display= true;
  fullname:string = "";
  result:number = 0;

  names =["Aditya","John","David"];
  toggle(){
    this.display = !this.display;
  }


  handleClick(op:string){
    if(op== 'increment'){
      this.result = this.result+1
    }else {
      if(this.result <= 0){
        this.result = 0
      }else{
        this.result -= 1
      }
    }
  }


  todotitle:string='';
  todoDate:any='';
  SNo = 0
  todos:any =[]

  handleSubmit(todotitle:string,todoDate:any){

    if(todotitle){
      this.todos = [...this.todos,{todotitle:todotitle,todoDate:todoDate,SNo:this.SNo,mark:false}]
      this.todotitle='';
      this.todoDate='';
      this.SNo++;
      console.log(this.todos);
    }else{
      alert("Please enter todo title")
    }
  }

  handleDelete(todoSNo:number){
    let new_todos = this.todos.filter((todoItem:any)=>{
      return todoSNo != todoItem.SNo
    })
    this.todos = new_todos;
  }

  handleMark(todo:any){
    todo.mark = !todo.mark;
  }


  profileForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.maxLength(40),Validators
        .pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password:new FormControl('',[Validators.required,Validators.minLength(5)])
    })
  

  get email(){
    return this.profileForm.get('email');
  }
  get password(){
    return this.profileForm.get('password');
  }

  handleFormSubmit(){
    if(this.profileForm.valid){
      alert("Form Submitted Successfully..")

    }else{
      alert("Complete your form..")
    }
  }

}
