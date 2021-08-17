import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f')
  signupForm: NgForm;

  defaultQuestion: string = 'pet';
  defaultUserName: string = 'sys user';
  answer:string = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'test@gmail.com'
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
          username: suggestedName,
      }
    });
  }


  // onSubmit(form: HTMLFormElement) {
  //   // console.log('on submit ', signupForm);
  //   console.log('on submit ', form);
  // }

  onSubmit() {

    console.log('on submit ', this.signupForm);
  }
}
