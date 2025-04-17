import { Component ,signal,effect,computed, Signal, WritableSignal} from '@angular/core';
//This imports the Component class from @angular/core package, which is required to define a component in Angular.
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CounterComponent } from './counter/counter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
@Component({
	selector: 'app-root', // custom tag
	imports: [RouterOutlet, LoginComponent, ProfileComponent, SignUpComponent, CounterComponent,TodoListComponent,WelcomeComponent,CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
// The @Component decorator is used to define metadata for the component, such as its selector, template, styles, and more. It essentially configures the component and tells Angular how it should be processed.


export class AppComponent {
	title: string | number = 'my-app';
	name = "David";
	other: any = 23;
	display= true;
	color=1;

	myFunction() {
		let a = 10;
		// this.title=13;
		this.other = true;
	}

	sum(a: number, b: number): number {
		return a + b;
	}

	toggle(){
		this.display = !this.display;
	}

	
	setColor(val:number){
		this.color= val;
	}

	switchColor(val:number){
		this.color= val;
	}
	handleInput(event:Event){
		this.color = parseInt((event.target as HTMLInputElement).value)
	}


	students = [{name:"Adam",age:23,id:123},
		{name:"John",age:24,id:124},
		{name:"Sam",age:25,id:125}
	];

	count = signal(0);

	constructor(){
		effect(()=>{
		console.log(this.count());
		})
	}

 
	x=signal(10);
	y=signal(20);
	data:Signal<number> = computed(()=> this.x() + this.y());
	handleComputedSignal(){
		console.log(this.data());
		this.x.set(30);
		console.log(this.data());
	}
	
}


// export class AppComponent {
// 	students = [{name:"Adam",age:23,id:123},
// 		{name:"John",age:24,id:124},
// 		{name:"Sam",age:25,id:125}
// 	];
// }