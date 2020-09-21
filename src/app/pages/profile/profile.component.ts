import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(public Data: ApiService, public _route: ActivatedRoute) {}
  student: any;
  reference: any;
  subject: any;

  ngOnInit() {
    //getting user ID
    this.reference = this._route.snapshot.paramMap.get('ref');
    console.log('reference:', this.reference);

    this.student = this.Data.getStudentInfo(this.reference);
    console.log(this.student);

    this.subject = this.Data.getStudentSubj(this.reference);
    

  }
}
