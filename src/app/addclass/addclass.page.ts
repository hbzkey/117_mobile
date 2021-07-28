import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { HttpserviceService } from '../services/httpservice.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.page.html',
  styleUrls: ['./addclass.page.scss'],
})
export class AddclassPage implements OnInit {
  list: any;
  list1:any;
  list2:any
  classnumber:any;
  classid:any;
  public class: any = {
    class_name: '计算机一班',
    course: '',
    semester: '二',
    school_id:'',
    faculty_id:'',
    major_id: 1

  };
  constructor(public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }

  ngOnInit() {
    this.getschoolfacult()
  }

  
  async getschoolfacult() {
     

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let userid = this.localStorageService.get('userid', ' error');


    var api = 'http://localhost:3000/api/getAllSchoolFacultyMajor';
    this.http.get(api ,httpOptions).subscribe(response => {
      console.log(response)
      this.list1 = response;
      this.list1 = this.list1.schools.rows;
      this.list2 = response;
      this.list2 = this.list2.faculties.rows
      //this.class.school_id = this.list1.schools.rows[0].name
      //this.class.faculty_id = this.list1.faculties.rows[0].name
      
     

    })
  }
    
  
  async createclass() {
    let _list : any;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const alert1 = await this.alertController.create(
      {

        header: '提示',
        message: '您没有权限',
        buttons: ['确定']
      }
    );
    const identity = this.localStorageService.get('identity', 'error');
    console.log(identity);
    if (identity !== 'teacher') {
      alert1.present();
    }
    else {
      var api = 'http://localhost:3000/api/createClass';
      let userid = this.localStorageService.get('userid', ' error');
      let classData = {
        // class_number
       // 'class_qrcode': 'dataurl', //二维码DataURL保存到本地  命名class_number
       // 'class_image': 'dataurl', // 图片DataURL保存到本地 命名class_number
        'name': this.class.class_name,
        'course': this.class.course,
        'semester': this.class.semester,
        'user_id': userid,
        'class_number': -1,
        'school_id': this.class.school_id,
        'faculty_id': this.class.faculty_id,
        'major_id': 1,
        'is_school_plan': true
        // extend_json
      }
      //{ class_image:'',name: '计算机',course:'',semester:'', user_id: '123',shcool_id:'',faculty_id:'',major_id:'',is_school_plan:'' }
      this.http.post(api, { 'classData': classData }, httpOptions).subscribe(response => {
        console.log(response);
        this.navCtrl.navigateRoot(['/tabs']).then(() => { location.reload(); });

      })


    }

  }
}

