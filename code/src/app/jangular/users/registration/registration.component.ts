import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
    selector: 'japp-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: [AuthService]
})
export class RegistrationComponent {

    registrationForm : FormGroup = new FormGroup({
        name        : new FormControl(""),
        username    : new FormControl(""),
        password    : new FormControl(""),
        cnfpassword : new FormControl(""),
        emailid     : new FormControl(""),
        cnfemailid  : new FormControl("")
    });

    constructor( private _authService : AuthService ) { }

    ngOnInit() {
    }

    registerUser() {
        console.log('register this user ', this.registrationForm.value);
        this._authService.register(this.registrationForm.value).subscribe();
    }
}