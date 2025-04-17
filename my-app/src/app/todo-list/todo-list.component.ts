import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todotitle="";
  tododate="";
  todos:any = [];
  SNo= 0 ;
  handleSubmit(title:string,date:any){
    this.todos = [...this.todos,{title:title,DueDate:date,SNo:this.SNo,mark:false}]
    this.todotitle="";
    this.tododate="";
    this.SNo++;
  }

  handleDelete(todoSNo:any){
    
    let new_Todos = this.todos.filter((todoItem:any)=>{
     return  todoSNo !== todoItem.SNo;
    })

    this.todos = new_Todos;
  }


  handleMark(todo:any){
    todo.mark = !todo.mark
  }
}
