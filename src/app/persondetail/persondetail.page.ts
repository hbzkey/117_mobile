import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.page.html',
  styleUrls: ['./persondetail.page.scss'],
})
export class PersondetailPage implements OnInit {

  constructor() { }
  public personinfo: any = {
    name: '',
    identitylist: ['teacher', 'student'],
    identity: 'teacher',
    idnumber: '',
  }
  ngOnInit() {
  }

}
