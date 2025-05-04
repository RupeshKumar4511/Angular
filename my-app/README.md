# Angular :
Angular is a TypeScript-based framework for building dynamic web applications. It provides a component-based architecture, dependency injection, routing, and powerful tools for developing scalable applications.
<br>
Key Features of Angular with TypeScript:
<br>

```bash

Component-Based Architecture – Applications are built using reusable components.
TypeScript Support – Ensures type safety and better code maintainability.
Two-Way Data Binding – Automatically updates the UI when the data changes.
Dependency Injection (DI) – Improves modularity and testability.
Directives – Extends HTML with custom behavior (e.g., *ngFor, *ngIf).
Routing – Enables navigation between views with RouterModule.
Reactive Forms & Template-Driven Forms – Helps manage user inputs efficiently.
Observables & RxJS – Provides reactive programming with asynchronous data handling.
```

# Directives : 
Directives are the instructions in the document object model which extends HTML with custom behavior (e.g., *ngFor, *ngIf).

# Angular Architecture And Building Block of Angular:
https://www.geeksforgeeks.org/explain-the-architecture-overview-of-angular/
<br>

```bash 

              MVC-Based Angular Architecture

+-------------+     Event Binding    +--------------+
|   Template  | ------------------→  |  Component   |
|   (View)    |                      | (Controller) |
| - HTML/CSS  |     Property Binding | - Logic      |
| - UI Events | <------------------- | - Handles    |
+-------------+                      +--------------+
                                           |
                                           |
                                           ↓
                                     +-------------+
                                     |  Services   |
                                     |  (Model)    |
                                     | - Business  |
                                     | - API Data  |
                                     +-------------+

```

<br>

# Dependency  Injection
To enable reuse and sharing of logic across components.

# Angular File and Folder Structure:

tsconfig.json : This file defines Typescript configuration for build file.  
<br>
tsconfig.app.json: This files defines Typescritpt configuration for the whole project. 
<br>
tsconfig.spec.json: This files defines TypeScript configuration for the test cases by the developer. 
<br>
angular.json: This file defines the configuration of project which tells that which file will be loaded on the browser. 
<br>
.editorconfig : This files tells formatting used for the project. 
<br>
Inside src/app/app.component.spec.ts is used for the unit testing purpose. 



# Angular/cli command 
The Angular CLI is a powerful tool that helps you create, develop, and manage Angular applications efficiently.
<br>
Some Commands that helps us to develop Angular application. 
```bash 
1️⃣ Install Angular CLI

npm install -g @angular/cli
Verify installation:

ng version

2️⃣ Creating & Running an Angular Project
Create a New Angular Project

ng new my-angular-app
It will ask:

Add Angular routing? → Yes/No
Choose CSS, SCSS, LESS, or SASS
Move into the project directory:


cd my-angular-app
Serve the Application

ng serve
Runs the app on http://localhost:4200/

3️⃣ Essential Angular CLI Commands
Command	Description
ng new my-app	Create a new Angular project
ng serve	Run the project locally
ng build	Build the project for production
ng test	Run unit tests
ng lint	Check for code linting issues
ng e2e	Run end-to-end tests
ng version	Check installed Angular version

4️⃣ Generating Components, Services, and More
Command	Generates
ng generate component my-component or ng g c my-component	A new component
ng generate service my-service or ng g s my-service	A service
ng generate module my-module or ng g m my-module	A module
ng generate directive my-directive or ng g d my-directive	A directive
ng generate pipe my-pipe or ng g p my-pipe	A pipe
ng generate class my-class or ng g class my-class	A class

5️⃣ Routing Commands
Command	Purpose
ng generate module app-routing --flat --module=app	Create a routing module
ng generate component pages/home	Create a component inside pages directory
6️⃣ Building & Deploying
Command	Description
ng build	Build the project for production
ng build --prod	Optimized production build
ng build --output-path=dist-folder	Build to a specific folder


7️⃣ Running Angular in Production
After building (ng build --prod), serve it using:


npx http-server ./dist/my-angular-app


8️⃣ Updating Angular
Check for updates:

ng update

Update Angular CLI and dependencies:


ng update @angular/cli @angular/core

```

# Components : 
A component in Angular is the building block of an application. Each component consists of:
<br>
```bash
 HTML Template -> Defines the UI (.html)
 TypeScript Class -> Handles logic and data (.ts)
 CSS Styles -> Defines styles (.css)

```
# Selectors in Components : 
The selector in an Angular component is used to define a custom HTML tag that represents the component in an Angular template. It allows you to use the component within other components.
<br>
Element selectors (app-header) are the most common.
<br>
Attribute ([app-highlight]) and class selectors (.app-box) are useful for modifying existing elements.

# One Way Data Binding : 
We can achieve one way data binding using 
<br>
1. Text Interpolation
<br>
2. Event Binding 
<br>
3. Property binding 
<br>
5. Attribute Binding 


# Text Interpolation : 
Dipslay data from TS to HTML file. 
<br>
Execute Code in HTML file . 
<br>
It starts with "{{}}". 
<br>
Limitations: 
<br>
We can perform basic text Interpolation, math operation,Function call , Object Properties,  Conditional Expression. 
<br>
We cannot declare variable, increment or decrement operation, for/while loop. 

# Event Binding : 
Event Binding is a way to listen to and respond to user actions like clicks,keypresses, mouse movements, etc., in your HTML templates.
<br>

```bash
<button (click)="handleButtonClick()">Button</button>

export class LoginComponent {
    fullname="Jack Daniel";
    handleButtonClick(){
      alert(`Button is clicked`)
    }

    
}
```

# Property Binding : 

Property binding is used to bind values directly to the DOM properties of an element.
It modifies the actual property of the DOM element.
<br>

```bash 
<input type="text" [placeholder]="fullname">

// Now placeholder will "Jack Daniel" 

export class LoginComponent {
    fullname="Jack Daniel";  
}

// another example 
<button [disabled]="isDisabled">Click Me</button>

```

# Attribute Binding :
Attribute binding is used when you need to set the HTML attributes of an element.
Unlike property binding, this modifies the HTML attribute itself, which is static in nature.
Used for attributes that do not have corresponding DOM properties (like aria-*, colspan, tabindex, etc.).
<br>

```bash 
<td [attr.colspan]="columnSpanValue"></td>
<p [attr.aria-label]="ariaLabel"></p>

```


# Define Types in Angular: 
When we declare a property inside a class in Typescript then we do not need to use "let or const or var" with it and even if we do not specify the datatype then also it works. 
<br>
But when we declare variable inside method then we need to use "let or const or var " with it and specifying datatype is not necessary. 
<br>

```bash 

export class AppComponent {
  title = 'my-app';
  name = "David";

  myFunction(){
    let a = 10 ;

  }
}

```
<br>
We can specify multiple data types of a property in Typescript .
<br>

```bash 

// Ist way : define 2 different datatypes for 1 property 

// IInd way : define "any" to a property
export class AppComponent {
  title:string|number = 'my-app';
  name = "David";
  other:any= 23;

  myFunction(){
    let a = 10 ;
    // this.title=13;
    this.other = true;
  }



// We need to define the data type of parameters of function and return type of function
  sum(a:number,b:number):number{
    return a +b ;
  }

}

```
# Event Handling :
Event Handling refers to the process of responding to user actions 
<br>

```bash
<button (click)="handleButtonClick($event)">Button</button>
// In place of "click" there can be many events like mouseenter,mouseleave,input,focus,blur and many more.


export class LoginComponent {
    fullname="Jack Daniel";
    handleButtonClick(event:Event){
      alert(`Button is clicked${event.target}`);

      // event.type will give the name of event. 

      // event.target will give the complete html element on which the event is performed. 

      // event.target.name will give the value of element's attributes. 

      //( event.target as HTMLInputElement).value will give elements value

      
    }

    
}


```
# Template Reference Variable to set and get value
```bash
<input type="text"  name="email" #emailField value={{email}}>
<button (click)="getEmail(emailField.value)">Get Value</button>
<button (click)="setEmail()">Set Value</button>
<br>
<h6>Your Email is {{email}}</h6>

export class LoginComponent {
 email= "";
 getEmail(emailValue:string){
      this.email = emailValue; 
    }
    
    setEmail(){
      this.email = "default@gmail.com"; 
    }
}
```
# Global CSS 
We can add global css to all components by declaring it into styles.css file
<br>
We can load multiple css for a component. 
<br>
In component.ts files : 
<br>

```bash

styleUrls:['./profile.btn.css','profile.component.css']

```
# Control Flow statement in HTML file : 

```bash 
// use of IF-ELSE 
export class AppComponent {
	display= true;
	toggle(){
		this.display = !this.display;
	}

}



<button (click)="toggle()">{{display===true?"show red div":"show gold div"}}</button>
<br>
@if(display){
    <div style="width: 200px; height: 200px; background-color: gold;"></div>
}
@else{
    <div style="width: 200px; height: 200px; background-color: red;"></div>
}







// use of ELSE-IF statement 
export class AppComponent {
	color=1;
	setColor(val:number){
		this.color= val;
	}
}


<button (click)="setColor(1)">Gold</button>
<button (click)="setColor(2)">Red</button>
<button (click)="setColor(3)">Blue</button>
<br>
@if(color===1){
    <div style="width: 200px; height: 200px; background-color: gold;"></div>
}
@else if(color===2){
    <div style="width: 200px; height: 200px; background-color: red;"></div>
}
@else if(color===3){
    <div style="width: 200px; height: 200px; background-color: blue;"></div>
}

```

# Switch Case 
```bash
export class AppComponent {
	color=1;
	switchColor(val:number){
		this.color= val;
	}

  handleInput(event:Event){
		this.color = parseInt((event.target as HTMLInputElement).value)
	}

}


<button (click)="switchColor(1)">Gold</button>
<button (click)="switchColor(2)">Red</button>
<button (click)="switchColor(3)">Blue</button>
<input type="text" (input)="handleInput($event)" placeholder="enter color code">
<br>
@switch(color){
    @case(1){
        <div style="width: 200px; height: 200px; background-color: gold;"></div>
    }
    @case(2){
    <div style="width: 200px; height: 200px; background-color: red;"></div>
    }
    @case(3){
    <div style="width: 200px; height: 200px; background-color: blue;"></div>
    }
    @default{
        <div style="width: 200px; height: 200px; background-color: black;"></div>
    } 
    

}
```

# For loop 
```bash
// In ts file
students = [{name:"Adam",age:23,id:123},
		{name:"John",age:24,id:124},
		{name:"Sam",age:25,id:125}
	]


// In html file
@for(student of students;track student ; let i= $index){
    <h1>
        <span>{{i}}</span>
        <span>{{student.name}}</span>
        <span>{{student.age}}</span>
        <span>{{student.id}}</span>
    </h1>

}
```


# Signals and effect :
In Angular, signals are a new reactivity model introduced to handle state management and change detection more efficiently.(Alternate to RxJs).
<br>
A signal is wrapper around a value that gives signal when value changes. 
<br>
There are two types of signal. 
<br>
1. WritableSignal : Writable signals provide an API for updating their values directly.
<br>
2. ComputedSignal : Computed signal are read-only signals that derive their value from other signals.
<br>

```bash
// In the ts file 

count = signal(0);

	constructor(){
		effect(()=>{
		console.log(this.count());
		})


    // effect() is a function used to react to changes in signals.
	}



// In the html file
<input type="text" value="{{count()}}" disabled>
<button (click)="count.set(count()+1)">Increment</button>
<button (click)="count.set(count()-1)">Decrement</button>






// how to define the data type of signal 
// The signal itself is an object that manages reactivity.
count:<number|string> = signal(10);
// count is of type Signal<number|string>, meaning it is a reactive signal that holds a number or string. 



// how to define the data type of signal's value
// The type is inferred from the signal's initial value.

count= signal<number|string> (10);
// this.count() returns a number, which is the signal value data type.



// WritableSignal 
count:WritableSignal<number|string> = signal(10);

// other method to update the WritableSignal value:
count.update((val)=> val + 1); // this only works for single datatype like number. 




// ComputedSignal (read only)
count:Signal<number> = computed(()=>10);

// Another Example of ComputedSignal
x=signal(10);
y=signal(20);
data:Signal<number> = computed(()=> this.x() + this.y());
handleComputedSignal(){
  console.log(this.data()); // 30
  this.x.set(100);
  console.log(this.data()); // 120
}

Note : We can change the computed signal value if it is dependent on some another Writable Signal. 

```

# For loop Contextual Variable :
A contextual variable in Angular refers to a special variable available within structural directives (like *ngFor, *ngIf, etc.), which provides context-specific information inside the template. 

<br>

```bash 
// For loop Contextual variables are : $first, $index,$last,$odd,$even,$count .

// In ts file
students = [{name:"Adam",age:23,id:123},
		{name:"John",age:24,id:124},
		{name:"Sam",age:25,id:125}
	]




// In the HTML file 
@for(student of students;track student ; let i= $index){
  <!-- @if($first || $last){
     <div> Index no is {{i}} and student name is {{student.name}} and his age is {{student.age}} and his id is {{student.id}}.</div>
  } -->

  @if($odd ){
      <div style="background-color: gold;"> Index no is {{i}} and student name is {{student.name}} and his age is {{student.age}} and his id is {{student.id}}.</div>
   } @else if($even){
      <div style="background-color: aliceblue;"> Index no is {{i}} and student name is {{student.name}} and his age is {{student.age}} and his id is {{student.id}}.</div>
      <div>Total count is {{$count}}</div>
   }
      
  
} 
```

# Two Way Binding :
We can perform two way binding using two way:
<br>
1. Using ngModel
<br>
2. Using events
<br>

```bash 
// In ts file
 imports: [FormsModule]
export class SignUpComponent {

  // for first way
  emailId:string= "";

  // for 2nd way 
  handleChange(event:Event){
    this.emailId = (event.target as HTMLInputElement).value; 
  }



}


// In html files
<div class="popup" >
  <div class="contact-us"> 
    <form  method="post">
      <h2>Two Way Binding Example </h2>
      <input type="email" name="email" id="email" placeholder="   Email ID" [(ngModel)]="emailId"><br>
      <h2>Your Email is :</h2>  <p>{{emailId}}</p>  
    </form>
  </div>
</div>


// using events
<div class="popup" >
  <div class="contact-us"> 
    <form  method="post">
      <h2>Two Way Binding Example </h2>
      <input type="email" name="email" id="email" placeholder="   Email ID" (input)="handleChange()"><br>
      <h2>Your Email is :</h2>  <p>{{emailId}}</p>  
    </form>
  </div>
</div>

```

# @Input() and @Output() decorator 
```bash
1. @Input() – Pass Data from Parent to Child
The @Input() decorator allows a child component to receive data from its parent component.

Example:
Child Component (child.component.ts)

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Hello, {{ name }}!</p>`
})
export class ChildComponent {
  @Input() name!: string;  // receives 'name' from parent
}


Parent Component (parent.component.html)

<app-child [name]="'Angular User'"></app-child>


2. @Output() – Send Data from Child to Parent

The @Output() decorator allows a child component to emit events back to the parent using EventEmitter.

Example:
Child Component (child.component.ts)

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendMessage()">Click Me</button>`
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from child!');
  }
}
Parent Component (parent.component.html)

<app-child (messageEvent)="receiveMessage($event)"></app-child>
<p>{{ message }}</p>

Parent Component (parent.component.ts)

export class ParentComponent {
  message = '';

  receiveMessage(event: string) {
    this.message = event;
  }
}
```

# Angular Aninamations
In Angular, animations are built using the @angular/animations module, which provides a declarative API to define smooth transitions and animations in your components.

# Component Life Cycle Hooks :
In Angular, Component Lifecycle Hooks are special methods that allow you to tap into key moments in a component's lifecycle — from creation to destruction.
<br>
They help you run custom logic at specific stages, like initializing data, reacting to input changes, or cleaning up resources.
<br>
```bash

Hook	Called When
ngOnChanges()	When any @Input() property value changes
ngOnInit()	Once after the first ngOnChanges() — used for initialization
ngDoCheck()	On every change detection run (custom change detection)
ngAfterContentInit()	After external content is projected into the component (<ng-content>)
ngAfterContentChecked()	After the projected content is checked
ngAfterViewInit()	After the component's view (and child views) has been initialized
ngAfterViewChecked()	After the view (and child views) has been checked
ngOnDestroy()	Just before the component is removed (for cleanup)

```
