import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { HttpserviceService } from '../services/httpservice.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public tab = 'tab1';
  public list: any;
  classid: number;
  identity: any;
  user: any;
  permission: any;
  constructor( public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) {
  }
  stuclass_number: string;
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.getuserclass();

    this.getuserdata();
    // this.getAllPermissions();
  }
  getuserdata() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
 
    var api = 'http://localhost:3000/api/getUserById';
    let userid = this.localStorageService.get('userid', ' error');

    this.http.post(api, { 'user_id': userid }, httpOptions).subscribe(response => {
      this.user = response;
      // for (let use of this.user) {
      this.identity = this.user.user[0].identity;
      this.localStorageService.set('identity', this.identity);


      console.log(this.user);
    })
  }

  getuserclass() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var api = 'http://localhost:3000/api/getClassByUserId';
    let userid = this.localStorageService.get('userid', ' error');

    this.http.post(api, { 'user_id': userid }, httpOptions).subscribe(response => {
      this.list = response;
      this.list = this.list.classes

      console.log(this.list);
    })

  }
  async addclass() {
    const identity = this.localStorageService.get('identity', 'error');
    const alert1 = await this.alertController.create(
      {

        header: '提示',
        message: '您没有权限,请与管理员联系',
        buttons: ['确定']
      }
    );
    if (identity !== 'teacher') {
      alert1.present();
    }
    else {
      this.router.navigate(['addclass']);
    }
  }
  onClick(class_id: number, class_number: string) {

    this.localStorageService.set('classid', class_id);
    this.localStorageService.set('classnumber', class_number);
    this.router.navigate(['/myclass']);


  }
  stuonClick(class_id: number, class_number: string) {

    this.localStorageService.set('classid', class_id);
    this.localStorageService.set('classnumber', class_number);
    this.router.navigate(['/stuclass']);
  }
  searchclick(class_id: number, class_number: string) {
    class_number = this.stuclass_number;
    this.localStorageService.set('classid', class_id);
    this.localStorageService.set('classnumber', class_number);
    this.router.navigate(['/stu-addclass']);
  }
  // searchclick3( class_number: string) {
  //   // class_number = this.stuclass_number;
  //   // this.localStorageService.set('classid', class_id);
  //   this.localStorageService.set('classnumber', class_number);
  //   this.router.navigate(['/stu-addclass']);
  // }
  
}
