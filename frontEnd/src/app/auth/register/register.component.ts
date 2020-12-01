import {Component, OnInit } from '@angular/core';
import { AuthRegisterService} from '../../service/auth-register.service';
import {AlertService} from '../../service/alert.service';
import {Router} from '@angular/router';
import {validationMessage} from '../../model/validationMessages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(private  registerService: AuthRegisterService,
              private router: Router, private alertService: AlertService) {
  }

  ngOnInit() {
  }


  //register code
  register() {
    this.loading = true;
    this.registerService.create(this.model)
      .subscribe(
        data => {

          const returnedMessage = <validationMessage> data;

          if (returnedMessage.success) {


            this.alertService.success('Registration successful', true);
            this.router.navigate(['/login']);
          } else {
            this.alertService.error(returnedMessage.msg);
          }



        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }



}
