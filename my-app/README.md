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
Directives modify the DOM structure by adding or removing elements dynamically. 

# Angular Architecture And Building Block of Angular:
https://www.geeksforgeeks.org/explain-the-architecture-overview-of-angular/

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
# Selecotrs in Components : 
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
# 
