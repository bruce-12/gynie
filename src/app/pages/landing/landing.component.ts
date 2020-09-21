import { element } from 'protractor';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';


//angular forms module
import{ NgForm } from  '@angular/forms'
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  students: any[];
  profile: any;
  subjects: any[];
  mark: any;

//testing
DataDetails :any[];

//update array users
userupdate :any[];
update : any[];



  constructor(public Data: ApiService) {}
  updates(form  : NgForm) {
    console.log(form.value.name);
  
  
if(form.valid == true) {
console.log("something");
}else{
 console.log("error",console.error());
  
}

// this.Data.getInfo().push(
 // form.value.name
 // ) 
  this.userupdate = this.Data.getInfo();
  this.userupdate.forEach( e =>{
    this.update = e['users']

    //push new users in our array of users
    this.update.push({
      userID: "2017"+form.value.name,
      name: form.value.name,
      Bio: form.value.bio,
    
      
    })


    })


  }


  ngOnInit() {

    this.students = [];
    this.subjects = [];

    this.students = this.Data.getInfo();
    this.subjects = this.Data.getInfo();
    this.students.forEach((Element) => {
      this.profile = Element['users'];
    this.subjects.forEach((element) => {
      this.mark = element['subjects'];
    });
  }

  
    )
}
}