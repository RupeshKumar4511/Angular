import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
@Component(
{
    selector:'profile',
    imports:[ReactiveFormsModule,NgIf],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})


export class ProfileComponent{
    profileForm = new FormGroup({
        username:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
        email:new FormControl('',[Validators.required,Validators.maxLength(40),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])
    })

    get username(){
        return this.profileForm.get('username');
    }
    get email(){
        return this.profileForm.get('email');
    }
    get password(){
        return this.profileForm.get('password');
    }


    handleSubmit(){
        if(this.profileForm.valid){
            alert("form submitted sucessfully")
        }else{
            alert("Complete Form details")
        }
        
        console.log(this.profileForm.value);
    }
}