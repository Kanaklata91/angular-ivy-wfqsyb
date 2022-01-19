import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // name = 'Angular ' + VERSION.major;
  @ViewChild('f') form: NgForm;

  defaultMailAddress: string = 'testemail@gmail.com';
  defaultPassword: string = 'test';
  ddlOption = ['Basic', 'Advanced', 'Pro'];
  ddlSelectedValue = 'Advanced';

  ngOnInit() {}

  OnFormSubmit(f: Form) {
    console.log(f);
  }

  onitemselected(val: any) {
    console.log('the selected value is:' + val);
  }

  onvalEntered(val: any) {
    console.log('the input entered  is:' + val);
  }
}
