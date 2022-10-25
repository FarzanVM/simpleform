import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from './form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  model = new Form("Farzan","tony@gmail.com","1234e3de");

  ngOnInit(): void {
  }

  onClickSubmit(userForm:NgForm){
    console.log(this.model);
    console.log(userForm);
  }


}
