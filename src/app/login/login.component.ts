import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot, Router } from '../../../node_modules/@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;
  loginForm:FormGroup;
  frmConfig= [
    {type:'text',name:'userName', label:'User Name', constaint: Validators.required},
    {type:'passWord',name:'passWd', label:'Password', constaint: Validators.required},
  ];
  constructor(private route:ActivatedRoute, private router:Router, private builder:FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(param =>{
      this.message = param['msg'];
    })
    this.intializeForm();
  }
  intializeForm():FormGroup{
    this.loginForm = new FormGroup({});
    this.frmConfig.forEach(eachControl =>{
      this.loginForm.addControl(eachControl.name, new FormControl('', eachControl.constaint));
    })
    return this.loginForm;
  }

  submit(){
    const usrName = this.loginForm.value.userName;
    const passWd = this.loginForm.value.passWd;
    console.log(usrName+' - ' +passWd);
    if(usrName === 'Sita' && passWd === 'Ram'){
        this.router.navigate(['/donor']);
        sessionStorage.setItem('isUserLogin','true');
    }
    else
        this.router.navigate(['/login']);
  }
}

